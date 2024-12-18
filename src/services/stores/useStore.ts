import { useContext } from 'react';
import { useStore as useZustandStore } from 'zustand';

import { MonsterMirrorStoreContext } from './context';
import type { MonsterMirrorStore } from './store';

export const useStore = <T>(selector: (store: MonsterMirrorStore) => T): T => {
  const monsterMirrorStoreContext = useContext(MonsterMirrorStoreContext);

  if (monsterMirrorStoreContext === null) {
    throw new Error(`useStore must be use within MonsterMirrorStoreProvider`);
  }

  return useZustandStore(monsterMirrorStoreContext, selector);
};
