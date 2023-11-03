import { css } from '@style/css';
// @ts-expect-error dont care for now
import { AutoTextSize } from 'auto-text-size';
import Image from 'next/image';
import { ReactNode } from 'react';

import { expandString } from 'utils/macro.utils';

interface Props {
  title: string;
  initiative: number;
  shuffle: boolean;
  isFlying?: boolean;
  onClose: () => void;
  children: ReactNode;
}

type Item = {
  value: string;
  children: Item[];
  indent: number;
  parent?: Item;
};

export const cardLinesToNestedList = (
  arr: string[],
  attack: (number | string)[],
  move: number[],
  range: number[],
) => {
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
};

const AbilityCard = ({
  title,
  initiative,
  shuffle,
  isFlying,
  onClose,
  children,
}: Props) => {
  return (
    <div
      className={css({
        display: 'flex',
        textAlign: 'center',
        aspectRatio: '437/296',
      })}
    >
      <div
        className={css({
          textShadow: '1px 2px 3px black',
          backgroundClip: 'content-box',
          bgRepeat: 'no-repeat',
          backgroundSize: 'cover',
          bgImage: 'url(/images/front.jpg)',
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
            margin: '0 16px 0 17%',
          })}
        >
          {title}
          {isFlying && (
            <span className={css({ display: 'inline-block', ml: '2' })}>
              <Image
                src="/images/fly.svg"
                width="24"
                height="18"
                alt="flying"
              />
            </span>
          )}
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
          {initiative}
        </h2>
        {shuffle && (
          <Image
            className={css({
              position: 'absolute',
              right: '3%',
              bottom: '5%',
              boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.1);',
            })}
            width="20"
            height="20"
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
          <Image
            className={css({
              boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.1);',
            })}
            width="20"
            height="20"
            alt="close"
            src="/images/close.svg"
          />
        </button>
        {children}
      </div>
    </div>
  );
};

const NormalHP = ({ hp, abilities }: { hp: number; abilities: string }) => (
  <h2
    className={css({
      fontSize: '1.4em',
      textAlign: 'left',
      position: 'absolute',
      textShadow: '1px 2px 3px black',
      left: '3%',
      top: '40%',
      width: '20%',
    })}
  >
    HP {hp}
    <small
      className={css({ display: 'block', fontSize: '60%', pl: 1 })}
      dangerouslySetInnerHTML={{ __html: abilities }}
    />
  </h2>
);

const EliteHP = ({ hp, abilities }: { hp: number; abilities: string }) => (
  <h2
    className={css({
      color: 'gold',
      fontSize: '1.4em',
      textAlign: 'left',
      textShadow: '1px 2px 3px black',
      position: 'absolute',
      left: '3%',
      top: '70%',
      width: '20%',
    })}
  >
    HP {hp}
    <small
      className={css({
        display: 'block',
        fontSize: '60%',
        color: 'gold',
        pl: 1,
      })}
      dangerouslySetInnerHTML={{ __html: abilities }}
    />
  </h2>
);

const BossHP = ({ hp }: { hp: string }) => (
  <h2
    className={css({
      fontSize: '1.6em',
      textAlign: 'left',
      position: 'absolute',
      textShadow: '1px 2px 3px black',
      left: '3%',
      top: '40%',
      width: '20%',
    })}
  >
    HP
    <br />
    {hp}
  </h2>
);

const ActionList = ({ lines }: { lines: Item[] }) => (
  <ul
    className={css({
      fontFamily: 'philosopher',
      position: 'relative',
      margin: '0 16px 0 17%',
      boxSizing: 'border-box',
      justifyContent: 'center',
      alignItems: 'center !important',
      height: 'calc(100% - 48px)',
    })}
  >
    <AutoTextSize mode="box" maxFontSizePx={30}>
      {lines.map((item, idx) => {
        if (item.children.length) {
          return (
            <li key={idx} className={css({ margin: '0.5em 0' })}>
              <span dangerouslySetInnerHTML={{ __html: item.value }} />
              <ul className={css({ fontSize: '80%' })}>
                {item.children.map((child, id) => (
                  <li
                    key={id}
                    className={css({
                      margin: '0',
                    })}
                    dangerouslySetInnerHTML={{ __html: child.value }}
                  />
                ))}
              </ul>
            </li>
          );
        } else {
          return (
            <li
              key={item.value}
              className={css({ margin: '0.5em 0' })}
              dangerouslySetInnerHTML={{ __html: item.value }}
            />
          );
        }
      })}
    </AutoTextSize>
  </ul>
);

const ImmunityIcons = ({ icons }: { icons: string }) => (
  <div
    className={css({
      display: 'grid',
      gridTemplateColumns: '1.25em 1.25em',
      transform: 'rotate(45deg)',
      width: '2.5em',
      '& .icon': { transform: 'rotate(-45deg)' },
      position: 'absolute',
      left: '3%',
      top: '72%',
      fontSize: '1.4em',
    })}
    dangerouslySetInnerHTML={{ __html: icons }}
  />
);

AbilityCard.NormalHP = NormalHP;
AbilityCard.EliteHP = EliteHP;
AbilityCard.BossHP = BossHP;
AbilityCard.ActionList = ActionList;
AbilityCard.ImmunityIcons = ImmunityIcons;
export default AbilityCard;
