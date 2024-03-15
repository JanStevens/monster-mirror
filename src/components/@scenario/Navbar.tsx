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
import { useState } from 'react';
import { useShallow } from 'zustand/react/shallow';

import { useStore } from 'services/stores';

import { Button, IconButton, Menu } from 'components/@common';
import { Navigation } from 'components/@navigation';

import ChangeLevelDialog from './ChangeLevelDialog';
import ChangePartySize from './ChangePartySize';

interface Props {
  scenarioName: string;
}

const Navbar = ({ scenarioName }: Props) => {
  const [level, characterCount, deckSortBy] = useStore(
    useShallow((state) => [
      state.level,
      state.characterCount,
      state.deckSortBy,
    ]),
  );
  const { setLevel, setCharacterCount, clearActiveCards, setDeckSortBy } =
    useStore((state) => state.actions);

  const [isChangeLevelOpen, setIsChangeLevelOpen] = useState(false);
  const [isChangeCharacterCountOpen, setIsChangeCharacterCountOpen] =
    useState(false);

  const handleSelect = ({ value }: { value: string }) => {
    if (value === 'new-round') clearActiveCards();
    if (value === 'change-level') setIsChangeLevelOpen(true);
    if (value === 'change-character-count') setIsChangeCharacterCountOpen(true);
  };

  const handleValueChange = (details: MenuValueChangeDetails) => {
    if (details.name === 'sorting') {
      setDeckSortBy(deckSortBy === 'initiative' ? 'scenario' : 'initiative');
    }
  };

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
            onClick={() => clearActiveCards()}
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
              <Menu.Item id="change-character-count" fontSize="lg">
                <Stack gap="6" justify="space-between" flex="1">
                  <HStack gap="2">
                    <UsersIcon />
                    Party size: {characterCount}
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
      <ChangeLevelDialog
        open={isChangeLevelOpen}
        currentLevel={level}
        onSubmit={setLevel}
        onClose={() => setIsChangeLevelOpen(false)}
      />
      <ChangePartySize
        open={isChangeCharacterCountOpen}
        currentSize={characterCount}
        onSubmit={setCharacterCount}
        onClose={() => setIsChangeCharacterCountOpen(false)}
      />
    </Navigation>
  );
};

export default Navbar;
