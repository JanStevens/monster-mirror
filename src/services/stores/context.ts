import { createContext } from 'react';

import type { MonsterMirrorStoreReturnType } from './store';

export const MonsterMirrorStoreContext =
  createContext<MonsterMirrorStoreReturnType | null>(null);
