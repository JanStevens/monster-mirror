

import { createContext } from 'react';

import { MonsterMirrorStoreReturnType } from './store';

export const MonsterMirrorStoreContext =
  createContext<MonsterMirrorStoreReturnType | null>(null);
