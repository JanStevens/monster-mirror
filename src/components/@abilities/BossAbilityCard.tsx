import { notesToLines, specialToLines } from 'utils/macro.utils';

import { BossDeck } from 'hooks/useDecks';
import { MonsterCard } from 'types/data.types';

import AbilityCard, { cardLinesToNestedList } from './AbilityCard';

interface Props {
  deck: BossDeck;
  card: MonsterCard;
  onClose: () => void;
}

const BossAbilityCard = ({ deck, card, onClose }: Props) => {
  const { attack, move, range, special1, special2, notes } = deck.stats;

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
      onClose={onClose}
    />
  );
};

export default BossAbilityCard;
