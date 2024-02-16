'use client';
import { useContext } from 'react';
import { useStore as useZustandStore } from 'zustand';

import { MonsterMirrorStoreContext } from './context';
import { MonsterMirrorStore } from './store';

export const useStore = <T>(selector: (store: MonsterMirrorStore) => T): T => {
  const monsterMirrorStoreContext = useContext(MonsterMirrorStoreContext);

  if (monsterMirrorStoreContext === null) {
    throw new Error(`useCounterStore must be use within CounterStoreProvider`);
  }

  return useZustandStore(monsterMirrorStoreContext, selector);
};
