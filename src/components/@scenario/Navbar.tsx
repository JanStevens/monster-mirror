'use client';

import { MenuValueChangeDetails } from '@ark-ui/react';
import { Flex, HStack, Stack } from '@style/jsx';
import { Icon } from 'icons';
import {
  ArrowDown01Icon,
  ArrowDownAZIcon,
  HeartPulseIcon,
  MenuIcon,
  UsersIcon,
} from 'lucide-react';
import { useLayoutEffect, useState } from 'react';
import { useShallow } from 'zustand/react/shallow';

import { useStore } from 'services/stores';
import { InitiativeState } from 'types/initiative.types';

import { Button, IconButton, Menu } from 'components/@common';
import { Navigation } from 'components/@navigation';

import ChangeLevelDialog from './ChangeLevelDialog';
import ChangePartySize from './ChangePartySize';
import NewRoundDialog from './NewRoundDialog';

interface Props {
  scenarioName: string;
}

const Navbar = ({ scenarioName }: Props) => {
  const [level, characters, deckSortBy, initiatives] = useStore(
    useShallow((state) => [
      state.level,
      state.characters,
      state.deckSortBy,
      state.initiatives,
    ]),
  );

  const roundEnded =
    Object.values(initiatives).every((initiative) => initiative.played) &&
    Object.values(initiatives).length > 0;

  const {
    setLevel,
    setCharacters,
    clearActiveCards,
    setInitiatives,
    setDeckSortBy,
  } = useStore((state) => state.actions);

  const [isChangeLevelOpen, setIsChangeLevelOpen] = useState(false);
  const [isChangeCharactersOpen, setIsChangeCharactersOpen] = useState(false);
  const [isNewRoundOpen, setIsNewRoundOpen] = useState(false);

  const startNewRound = (initiatives: InitiativeState) => {
    clearActiveCards();
    setInitiatives(initiatives);
  };

  const handleSelect = ({ value }: { value: string }) => {
    if (value === 'new-round') setIsNewRoundOpen(true);
    if (value === 'change-level') setIsChangeLevelOpen(true);
    if (value === 'change-characters') setIsChangeCharactersOpen(true);
  };

  const handleValueChange = (details: MenuValueChangeDetails) => {
    if (details.name === 'sorting') {
      setDeckSortBy(deckSortBy === 'initiative' ? 'scenario' : 'initiative');
    }
  };

  useLayoutEffect(() => {
    if (roundEnded) {
      setIsNewRoundOpen(true);
    }
  }, [roundEnded]);

  const menuState = {
    sorting: deckSortBy === 'initiative' ? 'initiative' : 'scenario',
  };

  return (
    <Navigation>
      <Navigation.Logo title={scenarioName} subtitle={`level: ${level}`} />
      <Flex align="center" gap={2}>
        <HStack gap={2} display={{ smDown: 'none', base: 'flex' }}>
          <Button
            variant="subtle"
            aria-label="Start new round"
            fontWeight="normal"
            fontSize="xl"
            onClick={() => setIsNewRoundOpen(true)}
          >
            <Icon name="shuffle" />
            New Round
          </Button>

          <Button
            variant="subtle"
            aria-label="toggle sorting"
            fontWeight="normal"
            fontSize="xl"
            onClick={() =>
              setDeckSortBy(
                deckSortBy === 'initiative' ? 'scenario' : 'initiative',
              )
            }
          >
            {deckSortBy === 'initiative' ? (
              <HStack gap="2">
                <ArrowDownAZIcon />
                Sort Alphabethical
              </HStack>
            ) : (
              <HStack gap="2">
                <ArrowDown01Icon />
                Sort on Initiative
              </HStack>
            )}
          </Button>
        </HStack>

        <Menu.Root
          value={menuState}
          onSelect={handleSelect}
          onValueChange={handleValueChange}
        >
          <Menu.Trigger asChild>
            <IconButton variant="ghost" size="md" fontWeight="normal">
              <MenuIcon />
            </IconButton>
          </Menu.Trigger>
          <Menu.Positioner>
            <Menu.Content>
              <Menu.Item
                id="new-round"
                display={{ smDown: 'flex', base: 'none' }}
              >
                <Stack gap="6" justify="space-between" flex="1">
                  <HStack gap="2">
                    <Icon name="shuffle" />
                    New Round
                  </HStack>
                </Stack>
              </Menu.Item>
              <Menu.OptionItem
                name="sorting"
                type="checkbox"
                value="initiative"
                display={{ smDown: 'flex', base: 'none' }}
              >
                {({ isChecked }) => (
                  <>
                    {isChecked ? (
                      <HStack gap="2">
                        <ArrowDownAZIcon />
                        Sort Alphabethical
                      </HStack>
                    ) : (
                      <HStack gap="2">
                        <ArrowDown01Icon />
                        Sort on Initiative
                      </HStack>
                    )}
                  </>
                )}
              </Menu.OptionItem>
              <Menu.Item id="change-characters" fontSize="lg">
                <Stack gap="6" justify="space-between" flex="1">
                  <HStack gap="2">
                    <UsersIcon />
                    Change Party
                  </HStack>
                </Stack>
              </Menu.Item>

              <Menu.Item id="change-level" fontSize="lg">
                <Stack gap="6" justify="space-between" flex="1">
                  <HStack gap="2">
                    <HeartPulseIcon />
                    Party level: {level}
                  </HStack>
                </Stack>
              </Menu.Item>
            </Menu.Content>
          </Menu.Positioner>
        </Menu.Root>
      </Flex>
      {isNewRoundOpen && (
        <NewRoundDialog
          open={isNewRoundOpen}
          currentParty={characters}
          onSubmit={startNewRound}
          onSkip={clearActiveCards}
          onClose={() => setIsNewRoundOpen(false)}
        />
      )}
      <ChangeLevelDialog
        open={isChangeLevelOpen}
        currentLevel={level}
        onSubmit={setLevel}
        onClose={() => setIsChangeLevelOpen(false)}
      />
      {isChangeCharactersOpen && (
        <ChangePartySize
          open={isChangeCharactersOpen}
          currentParty={characters}
          onSubmit={setCharacters}
          onClose={() => setIsChangeCharactersOpen(false)}
        />
      )}
    </Navigation>
  );
};

export default Navbar;
