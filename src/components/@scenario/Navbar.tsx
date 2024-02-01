'use client';

import { Flex } from '@style/jsx';
import { Icon } from 'icons';

import { useActiveDecks } from 'store/useDecksStore';

import { Button, IconButton } from 'components/@common';
import { Navigation } from 'components/@navigation';

interface Props {
  scenarioName: string;

  level: number;
}

const Navbar = ({ scenarioName, level }: Props) => {
  const clearActiveCards = useActiveDecks((state) => state.clearActiveCards);

  return (
    <Navigation>
      <Navigation.Logo title={scenarioName} subtitle={`level: ${level}`} />
      <Flex align="center" gap={2}>
        <Button
          variant="subtle"
          aria-label="Start new round"
          fontWeight="normal"
          fontSize={{ smDown: 'xl', base: 'xl' }}
          display={{ smDown: 'none', base: 'flex' }}
          onClick={() => clearActiveCards()}
        >
          <Icon name="shuffle" />
          New Round
        </Button>
        <IconButton
          variant="subtle"
          aria-label="Start new round"
          fontWeight="normal"
          size="sm"
          display={{ smDown: 'flex', base: 'none' }}
          onClick={() => clearActiveCards()}
        >
          <Icon name="shuffle" />
        </IconButton>
      </Flex>
    </Navigation>
  );
};

export default Navbar;
