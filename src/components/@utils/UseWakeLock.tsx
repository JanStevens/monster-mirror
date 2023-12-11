'use client';
import { useCallback, useEffect, useRef } from 'react';

export const useWakeLock = () => {
  const wakeLock = useRef<WakeLockSentinel | null>(null);
  const isSupported = typeof window !== 'undefined' && 'wakeLock' in navigator;

  const request = useCallback(
    async (type: WakeLockType = 'screen') => {
      const isWakeLockAlreadyDefined = wakeLock.current != null;
      if (!isSupported || isWakeLockAlreadyDefined) return;

      try {
        wakeLock.current = await navigator.wakeLock.request(type);
        wakeLock.current.onrelease = () => {
          wakeLock.current = null;
        };
      } catch (error) {
        console.error(error);
        // nothing to do here
      }
    },
    [isSupported],
  );

  const release = useCallback(async () => {
    const isWakeLockUndefined = wakeLock.current == null;
    if (!isSupported || isWakeLockUndefined) return;
    try {
      wakeLock.current && (await wakeLock.current.release());
    } catch (error) {
      console.error(error);
      // nothing to do
    }
  }, [isSupported]);

  useEffect(() => {
    const requestOnVisibilityChange = async () => {
      if (document.visibilityState === 'visible') {
        await request();
      } else {
        await release();
      }
    };
    document.addEventListener('visibilitychange', requestOnVisibilityChange);
    // Also request on mount
    request();

    return () => {
      release();
      document.removeEventListener(
        'visibilitychange',
        requestOnVisibilityChange,
      );
    };
  }, [request, release]);
};

const UseWakeLock = () => {
  useWakeLock();
  return <></>;
};

export default UseWakeLock;
