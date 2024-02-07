import { notesToLines, specialToLines } from 'utils/macro.utils';

import { useStore } from 'store/useStore';
import type { MonsterCard } from 'types/data.types';
import type { BossDeck } from 'types/deck.types';

import AbilityCard, { cardLinesToNestedList } from './AbilityCard';

interface Props {
  deck: BossDeck;
  card: MonsterCard;
}

const BossAbilityCard = ({ deck, card }: Props) => {
  const { attack, move, range, special1, special2, notes } = deck.stats;
  const clearCard = useStore((state) => state.clearCard);

  const cardLines =
    card.lines.reduce<string[]>((memo, line) => {
      const result = specialToLines(line, special1, special2);
      if (result) return [...memo, ...result];
      return [...memo, line];
    }, []) ?? [];
  const cardNotes = notes ? notesToLines(notes) : [];

  const lines = cardLinesToNestedList(
    [...cardLines, ...cardNotes],
    attack,
    move,
    range,
  );

  return (
    <AbilityCard
      title={deck.name}
      initiative={card.initiative}
      shuffle={card.shuffle}
      lines={lines}
      onClose={() => clearCard(deck.name)}
    />
  );
};

export default BossAbilityCard;
