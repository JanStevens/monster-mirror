import { expandString } from 'utils/macro.utils';

import { MonsterCard } from 'types/data.types';

import AbilityCard, { cardLinesToNestedList } from './AbilityCard';
import { MonsterDeck } from './useDeck';

interface Props {
  deck: MonsterDeck;
  card: MonsterCard;
  onClose: () => void;
}

const hasFlyingAttribute = (lines: string[]) =>
  !!lines.find((line) => line.includes('%flying%'));

const expandAbilities = (
  lines: string[][],
  attack: number[],
  move: number[],
  range: number[],
) =>
  lines.map((line) =>
    line
      .filter((value) => value !== '%flying%')
      .map((value) => expandString(value, attack, move, range))
      .join('<br />'),
  );

const MonsterAbilityCard = ({ deck, card, onClose }: Props) => {
  const { attack, move, range, attributes } = deck.stats;
  const [normalAbilitiesHTML, eliteAbilitiesHTML] = expandAbilities(
    attributes,
    attack,
    move,
    range,
  );

  const isFlying = hasFlyingAttribute(attributes[0]);
  const actionList = cardLinesToNestedList(card.lines, attack, move, range);

  return (
    <AbilityCard
      title={deck.name}
      initiative={card.initiative}
      shuffle={card.shuffle}
      isFlying={isFlying}
      onClose={onClose}
    >
      <AbilityCard.NormalHP
        hp={deck.stats.health[0]}
        abilities={normalAbilitiesHTML}
      />

      {deck.stats.health[1] > 0 && (
        <AbilityCard.EliteHP
          hp={deck.stats.health[1]}
          abilities={eliteAbilitiesHTML}
        />
      )}
      <AbilityCard.ActionList lines={actionList} />
    </AbilityCard>
  );
};

export default MonsterAbilityCard;
