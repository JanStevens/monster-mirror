import type { MonsterCard } from 'types/data.types';
import type { MonsterDeck } from 'types/deck.types';

import AbilityCard, { cardLinesToNestedList } from './AbilityCard';

interface Props {
  deck: MonsterDeck;
  card: MonsterCard;
  onClose?: () => void;
}

const MonsterAbilityCard = ({ deck, card, onClose }: Props) => {
  const { attack, move, range } = deck.stats;

  const actionList = cardLinesToNestedList(card.lines, attack, move, range);

  return (
    <AbilityCard
      title={deck.name}
      initiative={card.initiative}
      shuffle={card.shuffle}
      lines={actionList}
      onClose={onClose}
    />
  );
};

export default MonsterAbilityCard;
