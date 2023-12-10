import { css } from '@style/css';
import { Box, Flex } from '@style/jsx';
// @ts-expect-error dont care for now
import { AutoTextSize } from 'auto-text-size';
import { Icon } from 'icons';
import { XIcon } from 'lucide-react';
import Image from 'next/image';
import { ReactNode } from 'react';

import { expandString } from 'utils/macro.utils';

import { Heading, IconButton, Text } from 'components/@common';

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
  onClose,
  children,
}: Props) => {
  return (
    <Flex
      align="center"
      aspectRatio="437/280"
      position="relative"
      textShadow="1px 2px 3px black"
      boxShadow="5px 5px 5px rgba(0, 0, 0, 0.1)"
      textAlign="center"
    >
      <Image
        src="/images/front.jpg"
        alt="front ability card"
        fill
        priority
        className={css({
          objectFit: 'cover',
          zIndex: 0,
          borderRadius: '15px',
          aspectRatio: '437/280',
        })}
        sizes="437px"
      />

      <Box zIndex="1" flexGrow="1" aspectRatio="437/280">
        <Heading
          fontSize="2xl"
          fontWeight="normal"
          textAlign="center"
          lineHeight="200%"
        >
          {title}
        </Heading>
        <Text
          fontSize="3xl"
          fontWeight="normal"
          textAlign="center"
          position="absolute"
          left="0"
          top="18%"
          width="19%"
        >
          {initiative}
        </Text>

        {shuffle && (
          <Icon
            name="shuffle"
            fontSize="24"
            className={css({
              position: 'absolute',
              right: '3%',
              bottom: '5%',
              filter: 'drop-shadow(5px 5px 5px rgba(0,0,0,.5))',
            })}
          />
        )}
        <Box position="absolute" right="0" top="0">
          <IconButton
            aria-label="Close ability"
            variant="ghost"
            size="lg"
            onClick={onClose}
            css={{
              filter: 'drop-shadow(5px 5px 5px rgba(0,0,0,.5))',
            }}
          >
            <XIcon strokeWidth="4" fontSize="24" />
          </IconButton>
        </Box>
        {children}
      </Box>
    </Flex>
  );
};

const ActionList = ({ lines }: { lines: Item[] }) => (
  <ul
    className={css({
      fontFamily: 'philosopher',
      position: 'relative',
      boxSizing: 'border-box',
      justifyContent: 'center',
      alignItems: 'center !important',
      height: 'calc(100% - 48px)',
      padding: '2',
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

AbilityCard.ActionList = ActionList;
export default AbilityCard;
