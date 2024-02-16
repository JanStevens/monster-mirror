import { css } from '@style/css';
import { Box, Flex, Stack } from '@style/jsx';
// @ts-expect-error dont care for now
import { AutoTextSize } from 'auto-text-size';
import { Icon } from 'icons';
import Image from 'next/image';

import { expandString } from 'utils/macro.utils';

import { Heading, IconButton, Text } from 'components/@common';

interface Props {
  title: string;
  initiative: number;
  shuffle: boolean;
  onClose?: () => void;
  lines: Item[];
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

const AbilityCard = ({ title, initiative, shuffle, lines, onClose }: Props) => {
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
          mt="1%"
          lineHeight="1.5"
          fontFamily="pirataOne"
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
          lineHeight="1.5"
          fontFamily="pirataOne"
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
              filter: 'drop-shadow(5px 5px 5px rgba(0,0,0,.7))',
            })}
          />
        )}
        {onClose && (
          <Box position="absolute" right="0" top="0">
            <IconButton
              variant="ghost"
              aria-label="Close ability"
              size="lg"
              onClick={onClose}
              color="neutral.default"
              background="transparent"
              css={{
                _hover: { background: 'transparent' },
              }}
            >
              <Icon
                name="close"
                fontSize="24"
                className={css({
                  filter: 'drop-shadow(5px 5px 5px rgba(0,0,0,.7))',
                })}
              />
            </IconButton>
          </Box>
        )}
        <ActionList lines={lines} />
      </Box>
    </Flex>
  );
};

const ActionList = ({ lines }: { lines: Item[] }) => (
  <Box
    position="relative"
    justifyContent="center"
    alignItems="center !important"
    height="calc(100% - 48px)"
    px="8"
    py="2"
    fontFamily="philosopher"
  >
    <AutoTextSize mode="box" maxFontSizePx={30}>
      <Stack
        gap="4"
        css={{
          '& > :not(:last-of-type):after': {
            content: '""',
            position: 'absolute',
            width: '100px',
            height: '1px',
            bottom: 'calc(-0.5rem - 1px)',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundImage:
              'linear-gradient(to right, white 40%, rgba(255, 255, 255, 0) 0%)',
            backgroundPosition: 'top',
            backgroundSize: '8px 1px',
            backgroundRepeat: 'repeat-x',
          },
        }}
      >
        {lines.map((item, idx) => {
          if (item.children.length) {
            return (
              <Box key={idx} position="relative" className="action-item">
                <span dangerouslySetInnerHTML={{ __html: item.value }} />
                <Box fontSize="80%">
                  {item.children.map((child, id) => (
                    <Box
                      key={id}
                      margin="0"
                      dangerouslySetInnerHTML={{ __html: child.value }}
                    />
                  ))}
                </Box>
              </Box>
            );
          } else {
            return (
              <Box
                key={item.value}
                position="relative"
                className="action-item"
                dangerouslySetInnerHTML={{ __html: item.value }}
              />
            );
          }
        })}
      </Stack>
    </AutoTextSize>
  </Box>
);

export default AbilityCard;
