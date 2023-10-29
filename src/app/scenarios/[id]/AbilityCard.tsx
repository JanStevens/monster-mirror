/* eslint-disable @next/next/no-img-element */
import { css } from '@style/css';

import { attributes_to_lines, expandString } from 'utils/macro.utils';

import { MonsterCard } from 'types/data.types';

import { Deck } from './useDeck';

interface Props {
  deck: Deck;
  card: MonsterCard;
  onClose: () => void;
}

type Item = {
  value: string;
  children: Item[];
  indent: number;
  parent?: Item;
};

function arrayToNestedList(
  arr: string[],
  attack: number[],
  move: number[],
  range: number[],
) {
  const root: Item = {
    value: 'Root',
    children: [],
    indent: 0,
  };
  let currentLevel: Item | undefined = root;

  for (const item of arr) {
    const indent = item.lastIndexOf('*');
    const value = item.substring(indent + 1).trim();
    const expandedValue = expandString(value, attack, move, range);
    let parent: Item | undefined = currentLevel;

    while (indent < (currentLevel?.indent ?? 0)) {
      parent = parent?.parent;
      currentLevel = parent;
    }

    const newNode: Item = {
      value: expandedValue,
      children: [],
      parent,
      indent: indent + 1,
    };
    parent?.children.push(newNode);

    currentLevel = newNode;
  }

  return root.children;
}

const AbilityCard = ({ deck, card, onClose }: Props) => {
  const attributeLines = attributes_to_lines(deck.stats.attributes);
  const cardLines = [...card.lines, ...attributeLines];
  const cardLineLevels = cardLines.filter((line) =>
    line.lastIndexOf('* '),
  ).length;

  const nestedList = arrayToNestedList(
    cardLines,
    deck.stats.attack,
    deck.stats.move,
    deck.stats.range,
  );

  return (
    <div
      className={css({
        display: 'flex',
        textAlign: 'center',
        aspectRatio: '437/296',
        fontSize: '16.3821px;',
        p: 4,
      })}
    >
      <div
        className={css({
          fontSize: '100%',
          textShadow: '1px 2px 3px black',
          backgroundClip: 'content-box',
          bgRepeat: 'no-repeat',
          backgroundSize: 'cover',
          bgImage: `url(/images/front.jpg)`,
          boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.1);',
          borderRadius: '15px',
          overflow: 'hidden',
          width: '100%',
          position: 'relative',
        })}
      >
        <h1
          className={css({
            fontFamily: 'pirataOne',
            textShadow: '1px 2px 3px black',
            fontSize: '1.5em',
            textAlign: 'center',
            lineHeight: '200%',
          })}
        >
          {deck.name}
        </h1>
        <h2
          className={css({
            fontSize: '2em',
            textAlign: 'center',
            textShadow: '1px 2px 3px black',
            position: 'absolute',
            left: 0,
            top: '18%',
            width: '19%',
          })}
        >
          {card.initiative}
        </h2>
        <h2
          className={css({
            fontSize: '1.4em',
            textAlign: 'left',
            position: 'absolute',
            textShadow: '1px 2px 3px black',
            left: '3%',
            top: '45%',
          })}
        >
          HP {deck.stats.health[0]}
        </h2>
        {deck.stats.health[1] > 0 && (
          <h2
            className={css({
              color: 'gold',
              fontSize: '1.4em',
              textAlign: 'left',
              textShadow: '1px 2px 3px black',
              position: 'absolute',
              left: '3%',
              top: '70%',
            })}
          >
            HP {deck.stats.health[1]}
          </h2>
        )}
        {card.shuffle && (
          <img
            className={css({
              position: 'absolute',
              right: '3%',
              bottom: '5%',
              height: '1.25em',
            })}
            alt="shuffle"
            src="/images/shuffle.svg"
          />
        )}
        <button
          onClick={onClose}
          className={css({
            position: 'absolute',
            right: 0,
            top: 0,
            p: 2,
          })}
        >
          <img
            className={css({ height: '1.25em' })}
            alt="close"
            src="/images/close.svg"
          />
        </button>

        <ul
          className={css({
            fontFamily: 'philosopher',
            position: 'relative',
            height: '100%',
            margin: '0 16px 0 40px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            boxSizing: 'border-box',
            ...{ fontSize: cardLines.length > 6 ? '80%' : '100%' },
          })}
        >
          {nestedList.map((item, idx) => {
            if (item.children.length) {
              const nestedList = (
                <ul
                  className={css({
                    ...{ fontSize: cardLines.length > 6 ? '80%' : '100%' },
                  })}
                >
                  {item.children.map((child, id) => (
                    <li
                      key={id}
                      className={css({
                        margin: '0',
                        fontSize: '75%',
                      })}
                      dangerouslySetInnerHTML={{ __html: child.value }}
                    />
                  ))}
                </ul>
              );

              return (
                <li
                  key={idx}
                  className={css({ margin: '0.25em 0', marginLeft: '17%' })}
                >
                  <span dangerouslySetInnerHTML={{ __html: item.value }} />
                  {nestedList}
                </li>
              );
            }
            return (
              <li
                key={item.value}
                className={css({ margin: '0.25em 0', marginLeft: '17%' })}
                dangerouslySetInnerHTML={{ __html: item.value }}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default AbilityCard;
