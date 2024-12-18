import {
  closestCenter,
  DndContext,
  type DragEndEvent,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { Stack, type StackProps } from '@style/jsx';

import { useInitiative } from 'hooks/useInitiative';
import type { CharacterNames } from 'types/character.types';

import Item from './Item';

const SortableInitiatives = (stackProps: StackProps) => {
  const { initiatives, onToggleInitiativePlayed, setPlayerInitiative } =
    useInitiative();

  const sensors = useSensors(
    useSensor(MouseSensor, {
      // Require the mouse to move by 10 pixels before activating
      activationConstraint: {
        distance: 10,
      },
    }),
    useSensor(TouchSensor, {
      // Press delay of 250ms, with tolerance of 5px of movement
      activationConstraint: {
        delay: 250,
        tolerance: 5,
      },
    }),
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over?.id) {
      const oldIndex = initiatives.findIndex(
        (initiative) => initiative.id === active.id,
      );
      const newIndex = initiatives.findIndex(
        (initiative) => initiative.id === over.id,
      );
      const modifier = newIndex < oldIndex ? -1 : 1;
      const newInitiative = initiatives[newIndex].initiative + modifier;
      const initiative = initiatives[oldIndex];
      setPlayerInitiative(initiative.id as CharacterNames, newInitiative);
    }
  };

  return (
    <Stack gap={4} flexDirection="column" flex="1" {...stackProps}>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
        modifiers={[restrictToVerticalAxis]}
      >
        <SortableContext
          items={initiatives}
          strategy={verticalListSortingStrategy}
        >
          {initiatives.map((initiative) => (
            <Item
              key={initiative.name}
              initiative={initiative}
              onClick={onToggleInitiativePlayed}
            />
          ))}
        </SortableContext>
      </DndContext>
    </Stack>
  );
};

export default SortableInitiatives;
