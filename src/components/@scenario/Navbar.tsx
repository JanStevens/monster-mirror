'use client';

import { MenuValueChangeDetails } from '@ark-ui/react';
import { Flex, HStack, Stack } from '@style/jsx';
import { Icon } from 'icons';
import {
  ArrowDown01Icon,
  ArrowDownAZIcon,
  HeartPulseIcon,
  MenuIcon,
} from 'lucide-react';
import { useState } from 'react';
import { useShallow } from 'zustand/react/shallow';

import { useStore } from 'store/useStore';

import { Button, IconButton, Menu, Switch, Text } from 'components/@common';
import { Navigation } from 'components/@navigation';

import ChangeLevelDialog from './ChangeLevelDialog';

interface Props {
  scenarioName: string;
}

const Navbar = ({ scenarioName }: Props) => {
  const [
    level,
    selectLevel,
    clearActiveCards,
    sortDecksOnInitiative,
    toggleSortDecksOnInitiative,
  ] = useStore(
    useShallow((state) => [
      state.level,
      state.selectLevel,
      state.clearActiveCards,
      state.sortDecksOnInitiative,
      state.toggleSortDecksOnInitiative,
    ]),
  );

  const [isChangeLevelOpen, setIsChangeLevelOpen] = useState(false);

  const handleSelect = ({ value }: { value: string }) => {
    if (value === 'new-round') clearActiveCards();
    if (value === 'change-level') setIsChangeLevelOpen(true);
  };

  const handleValueChange = (details: MenuValueChangeDetails) => {
    if (details.name === 'sorting') toggleSortDecksOnInitiative();
  };

  const menuState = {
    sorting: sortDecksOnInitiative ? 'initiative' : 'default',
  };

  return (
    <Navigation>
      <Navigation.Logo title={scenarioName} subtitle={`level: ${level}`} />
      <Flex align="center" gap={4} display={{ smDown: 'none', base: 'flex' }}>
        <HStack gap={2}>
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
        </HStack>
        <HStack gap={2}>
          <Button
            variant="subtle"
            aria-label="toggle sorting"
            fontWeight="normal"
            fontSize="xl"
            onClick={() => toggleSortDecksOnInitiative()}
          >
            {sortDecksOnInitiative ? (
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
        <HStack gap={2} display={{ lgTo2xl: 'flex', base: 'none' }}>
          <Button
            variant="subtle"
            aria-label="Change Party level"
            fontWeight="normal"
            fontSize="xl"
            onClick={() => setIsChangeLevelOpen(true)}
          >
            <HStack gap="2">
              <HeartPulseIcon />
              Change Party level
            </HStack>
          </Button>
        </HStack>
      </Flex>
      <Menu.Root
        value={menuState}
        onSelect={handleSelect}
        onValueChange={handleValueChange}
      >
        <Menu.Trigger asChild display={{ smDown: 'flex', base: 'none' }}>
          <IconButton variant="ghost" size="sm" fontWeight="normal">
            <MenuIcon />
          </IconButton>
        </Menu.Trigger>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item id="new-round">
              <Stack gap="6" justify="space-between" flex="1">
                <HStack gap="2">
                  <Icon name="shuffle" />
                  New Round
                </HStack>
              </Stack>
            </Menu.Item>
            <Menu.OptionItem name="sorting" type="checkbox" value="initiative">
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
            <Menu.Item id="change-level">
              <Stack gap="6" justify="space-between" flex="1">
                <HStack gap="2">
                  <HeartPulseIcon />
                  Change Party level
                  <Text as="span" color="fg.subtle" size="sm">
                    (lvl: {level})
                  </Text>
                </HStack>
              </Stack>
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Menu.Root>
      <ChangeLevelDialog
        open={isChangeLevelOpen}
        currentLevel={`${level}`}
        onSubmit={selectLevel}
        onClose={() => setIsChangeLevelOpen(false)}
      />
    </Navigation>
  );
};

export default Navbar;
