'use client';

import { Flex, HStack } from '@style/jsx';
import { ScenarioDefinition } from 'data/scenarios';
import { Icon } from 'icons';
import { ArrowDown01Icon } from 'lucide-react';

import { Button } from 'components/@common/button';
import { IconButton } from 'components/@common/icon-button';
import { Navigation } from 'components/@navigation';

import { NavbarDialogs, NavbarMenu, useNavbarDialogs } from './shared';

interface Props {
  scenario: ScenarioDefinition;
  isRandomDungeon?: boolean;
}

const Navbar = ({ scenario, isRandomDungeon }: Props) => {
  const { level, dialogOpen, handleSelect, handleClose } = useNavbarDialogs();

  return (
    <>
      <Navigation>
        <Navigation.Logo title={scenario.name} subtitle={`level: ${level}`} />
        <Flex align="center" gap={2}>
          <HStack gap={2} display={{ smDown: 'none', base: 'flex' }}>
            <Button
              variant="subtle"
              aria-label="Start new round"
              fontWeight="normal"
              fontSize="xl"
              onClick={() => handleSelect('new-round')}
            >
              <Icon name="shuffle" />
              New Round
            </Button>
          </HStack>

          <HStack gap={2} display={{ smDown: 'flex', base: 'none' }}>
            <IconButton
              variant="subtle"
              aria-label="Show initiative"
              fontWeight="normal"
              fontSize="xl"
              onClick={() => handleSelect('show-initiative')}
            >
              <ArrowDown01Icon />
            </IconButton>
          </HStack>

          <NavbarMenu
            level={level}
            onSelect={handleSelect}
            isRandomDungeon={isRandomDungeon}
          />
        </Flex>
      </Navigation>

      <NavbarDialogs
        dialogOpen={dialogOpen}
        onClose={handleClose}
        scenario={scenario}
        isRandomDungeon={isRandomDungeon}
      />
    </>
  );
};

export default Navbar;
