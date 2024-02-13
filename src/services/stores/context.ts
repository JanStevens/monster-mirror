'use client';

import { createContext } from 'react';

import { MonsterMirrorStoreReturnType } from './monster-mirror-store';

export const MonsterMirrorStoreContext =
  createContext<MonsterMirrorStoreReturnType | null>(null);
