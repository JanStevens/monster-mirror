import { css } from '@style/css';

import { expandString, notesToLines, specialToLines } from 'utils/macro.utils';

import { MonsterCard } from 'types/data.types';

import AbilityCard, { cardLinesToNestedList } from './AbilityCard';
import { BossDeck } from './useDeck';

interface Props {
  deck: BossDeck;
  card: MonsterCard;
  onClose: () => void;
}

const BossAbilityCard = ({ deck, card, onClose }: Props) => {
  const { attack, move, range, special1, special2, notes, immunities } =
    deck.stats;

  const cardLines =
    card.lines.reduce<string[]>((memo, line) => {
      const result = specialToLines(line, special1, special2);
      if (result) return [...memo, ...result];
      return [...memo, line];
    }, []) ?? [];
  const cardNotes = notes ? notesToLines(notes) : [];

  const immunityIcons = immunities
    .map((macro) => expandString(macro, attack, move, range))
    .join('');

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
      onClose={onClose}
    >
      <AbilityCard.ImmunityIcons icons={immunityIcons} />
      <AbilityCard.BossHP hp={deck.stats.health[0]} />
      <AbilityCard.ActionList lines={lines} />
    </AbilityCard>
  );
};

export default BossAbilityCard;
