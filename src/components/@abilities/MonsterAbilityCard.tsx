import { MonsterDeck } from 'hooks/useDecks';
import { useActiveDecks } from 'store/useDecksStore';
import { MonsterCard } from 'types/data.types';

import AbilityCard, { cardLinesToNestedList } from './AbilityCard';

interface Props {
  deck: MonsterDeck;
  card: MonsterCard;
}

const MonsterAbilityCard = ({ deck, card }: Props) => {
  const { attack, move, range } = deck.stats;
  const clearCard = useActiveDecks((state) => state.clearCard);
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
