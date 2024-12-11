

import { type ReactNode, useRef } from 'react';

import { MonsterMirrorStoreContext } from './context';
import {
  createMonsterMirrorStore,
  initMonsterMirrorStore,
  type MonsterMirrorStoreReturnType,
} from './store';

export interface MonsterMirrorStoreProviderProps {
  children: ReactNode;
}

export const MonsterMirrorStoreProvider = ({
  children,
}: MonsterMirrorStoreProviderProps) => {
  const storeRef = useRef<MonsterMirrorStoreReturnType>();
  if (!storeRef.current) {
    storeRef.current = createMonsterMirrorStore(initMonsterMirrorStore());
  }

  return (
    <MonsterMirrorStoreContext.Provider value={storeRef.current}>
      {children}
    </MonsterMirrorStoreContext.Provider>
  );
};
