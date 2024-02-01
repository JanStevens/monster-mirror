import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { MonsterCard } from 'types/data.types';

interface ActiveDecksState {
  decks: string[];
  activeCards: { [key: string]: MonsterCard | undefined };
  selectDeck: (deckName: string) => void;
  closeDeck: (deckName: string) => void;
  selectCard: (deckName: string, card: MonsterCard) => void;
  clearCard: (deckName: string) => void;
  clearActiveCards: () => void;
}

export const useActiveDecks = create<ActiveDecksState>()(
  immer((set) => ({
    decks: [],
    activeCards: {},
    selectDeck: (deckName) =>
      set((state) => {
        state.decks.push(deckName);
        state.activeCards[deckName] = undefined;
      }),
    closeDeck: (deckName) =>
      set((state) => {
        state.decks = state.decks.filter((deck) => deck !== deckName);
        state.activeCards[deckName] = undefined;
      }),

    selectCard: (deckName, card) =>
      set((state) => {
        state.activeCards[deckName] = card;
      }),

    clearCard: (deckName) =>
      set((state) => (state.activeCards[deckName] = undefined)),

    clearActiveCards: () =>
      set((state) => {
        state.activeCards = {};
        return state;
      }),
  })),
);
