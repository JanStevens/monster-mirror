import { css, cx } from '@style/css';
import Image from 'next/image';

import { expandString } from 'utils/macro.utils';

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

export default function Home() {
  const card = {
    initiative: 28,
    name: 'Stone Golem',
    shuffle: false,
    lines: [
      '* %move% +1',
      '* %attack% -2',
      '** %range% 3',
      '* %pull% 2',
      '** %immobilize%',
      '* Attributes',
      '**%shield% 1',
      "** <span class='elite-color'>%shield% 2</span>",
    ],
    attack: [4, 5],
    move: [1, 2],
    range: [0, 0],
    level: '2',
    health: [11, 14],
  };

  const nestedList = arrayToNestedList(
    card.lines,
    card.attack,
    card.move,
    card.range,
  );

  return (
    <>
      <div className={css({ fontSize: '2xl', fontWeight: 'bold' })}>
        Hello 🐼!
      </div>
      <div className={css({ fontFamily: 'philosopher' })}>Heal</div>
      <div
        className={css({
          fontSize: 24,
          fontFamily: 'pirataOne',
          fontWeight: 700,
        })}
      >
        Frost Giant
      </div>

      <Image
        src="/images/add_target.svg"
        alt="add target"
        width="40"
        height="40"
      />

      <div id="tableau" style={{ fontSize: '16.3067px' }}>
        <div className="card-container">
          <div className="card">
            <span className={cx(css({ fontFamily: 'pirataOne' }), 'name')}>
              {card.name}
            </span>
            <span
              className={cx(css({ fontFamily: 'pirataOne' }), 'healthNormal')}
            >
              HP 2
            </span>
            <span
              className={cx(css({ fontFamily: 'pirataOne' }), 'healthElite')}
            >
              HP 4
            </span>
            <span
              className={cx(css({ fontFamily: 'pirataOne' }), 'initiative')}
            >
              23
            </span>
            <ul
              className={css({
                fontFamily: 'philosopher',
                ...{ fontSize: card.lines.length > 5 ? '80%' : '100%' },
              })}
            >
              {nestedList.map((item, idx) => {
                if (item.children.length) {
                  const nestedList = (
                    <ul
                      className={css({
                        ...{ fontSize: card.lines.length > 5 ? '80%' : '100%' },
                      })}
                    >
                      {item.children.map((child, id) => (
                        <li
                          key={id}
                          dangerouslySetInnerHTML={{ __html: child.value }}
                        />
                      ))}
                    </ul>
                  );

                  return (
                    <li key={idx}>
                      <span dangerouslySetInnerHTML={{ __html: item.value }} />
                      {nestedList}
                    </li>
                  );
                }
                return (
                  <li
                    key={item.value}
                    dangerouslySetInnerHTML={{ __html: item.value }}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
