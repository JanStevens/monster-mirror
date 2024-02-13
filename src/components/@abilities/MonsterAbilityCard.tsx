import { useStore } from 'services/stores';
import type { MonsterCard } from 'types/data.types';
import type { MonsterDeck } from 'types/deck.types';

import AbilityCard, { cardLinesToNestedList } from './AbilityCard';

interface Props {
  deck: MonsterDeck;
  card: MonsterCard;
}

const MonsterAbilityCard = ({ deck, card }: Props) => {
  const { attack, move, range } = deck.stats;
  const clearCard = useStore((state) => state.clearCard);
  const actionList = cardLinesToNestedList(card.lines, attack, move, range);

  return (
    <AbilityCard
      title={deck.name}
      initiative={card.initiative}
      shuffle={card.shuffle}
      lines={actionList}
      onClose={() => clearCard(deck.name)}
    />
  );
};

export default MonsterAbilityCard;
