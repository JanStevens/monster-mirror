import { useState } from 'react';
import { useShallow } from 'zustand/react/shallow';

import { useStore } from 'services/stores';

export const DialogTypes = [
  'new-round',
  'change-level',
  'change-characters',
  'change-monsters',
  'show-initiative',
  'scenario-info',
  'about',
  'tools',
] as const;

export type DialogType = (typeof DialogTypes)[number];

export const useNavbarDialogs = () => {
  const [level, characters] = useStore(
    useShallow((state) => [state.level, state.party]),
  );
  const { clearActiveCards } = useStore((state) => state.actions);
  const [dialogOpen, setDialogOpen] = useState<DialogType | null>(null);

  const handleSelect = (value: DialogType) => {
    if (value === 'new-round') {
      if (characters.length < 2) {
        clearActiveCards();
      } else {
        setDialogOpen('new-round');
      }
      return;
    }

    if (DialogTypes.includes(value)) {
      setDialogOpen(value);
    }
  };

  const handleClose = () => setDialogOpen(null);

  return {
    level,
    characters,
    dialogOpen,
    handleSelect,
    handleClose,
  };
};
