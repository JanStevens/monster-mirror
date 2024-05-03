'use client';

import { MenuValueChangeDetails } from '@ark-ui/react';
import { Flex, HStack, Stack } from '@style/jsx';
import { ScenarioDefinition } from 'data/scenarios';
import { Icon } from 'icons';
import {
  ArrowDown01Icon,
  ArrowDownAZIcon,
  HeartPulseIcon,
  InfoIcon,
  MenuIcon,
  UsersIcon,
} from 'lucide-react';
import { useLayoutEffect, useState } from 'react';
import { useShallow } from 'zustand/react/shallow';

import { useInitiative } from 'hooks/useInitiative';
import { useStore } from 'services/stores';

import { Button, IconButton, Menu } from 'components/@common';
import { Navigation } from 'components/@navigation';

import ChangeLevelDialog from './ChangeLevelDialog';
import ChangePartyDialog from './ChangePartyDialog';
import { InitiativeDialog } from './InitiativeList';
import NewRoundDialog from './NewRoundDialog';
import ScenarioInfoDialog from './ScenarioInfoDialog';

interface Props {
  scenario: ScenarioDefinition;
}

type DialogType =
  | 'new-round'
  | 'change-level'
  | 'change-characters'
  | 'show-initiative'
  | 'scenario-info';

const Navbar = ({ scenario }: Props) => {
  const { roundEnded, initiatives } = useInitiative();
  const [level, characters, deckSortBy] = useStore(
    useShallow((state) => [state.level, state.party, state.deckSortBy]),
  );

  const { clearActiveCards, setDeckSortBy } = useStore(
    (state) => state.actions,
  );

  const [dialogOpen, setDialogOpen] = useState<DialogType | null>(null);

  const handleSelect = ({ value }: { value: string }) => {
    if (value === 'new-round') {
      if (characters.length < 2) {
        clearActiveCards();
      } else {
        setDialogOpen('new-round');
      }
    }
    if (value === 'change-level') setDialogOpen('change-level');
    if (value === 'change-characters') setDialogOpen('change-characters');
    if (value === 'show-initiative') setDialogOpen('show-initiative');
    if (value === 'scenario-info') setDialogOpen('scenario-info');
  };

  const handleValueChange = (details: MenuValueChangeDetails) => {
    if (details.name === 'sorting') {
      setDeckSortBy(deckSortBy === 'initiative' ? 'scenario' : 'initiative');
    }
  };

  const handleClose = () => setDialogOpen(null);

  useLayoutEffect(() => {
    if (roundEnded) {
      setDialogOpen('new-round');
    }
  }, [roundEnded]);

  const menuState = {
    sorting: deckSortBy === 'initiative' ? 'initiative' : 'scenario',
  };

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
              onClick={() => handleSelect({ value: 'new-round' })}
            >
              <Icon name="shuffle" />
              New Round
            </Button>
          </HStack>

          {!!initiatives.length && (
            <HStack gap={2} display={{ smDown: 'flex', base: 'none' }}>
              <IconButton
                variant="subtle"
                aria-label="Show initiative"
                fontWeight="normal"
                fontSize="xl"
                onClick={() => handleSelect({ value: 'show-initiative' })}
              >
                <ArrowDown01Icon />
              </IconButton>
            </HStack>
          )}

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
                <Menu.Item id="scenario-info" fontSize="lg">
                  <Stack gap="6" justify="space-between" flex="1">
                    <HStack gap="2">
                      <InfoIcon />
                      Scenario Info
                    </HStack>
                  </Stack>
                </Menu.Item>

                <Menu.Item
                  id="new-round"
                  display={{ smDown: 'flex', base: 'none' }}
                  fontSize="lg"
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
                  fontSize="lg"
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
      </Navigation>
      <NewRoundDialog open={dialogOpen === 'new-round'} onClose={handleClose} />

      <ChangeLevelDialog
        open={dialogOpen === 'change-level'}
        onClose={handleClose}
      />

      <ChangePartyDialog
        open={dialogOpen === 'change-characters'}
        onClose={handleClose}
      />

      <InitiativeDialog
        open={dialogOpen === 'show-initiative'}
        onClose={handleClose}
      />

      <ScenarioInfoDialog
        scenario={scenario}
        open={dialogOpen === 'scenario-info'}
        onClose={handleClose}
      />
    </>
  );
};

export default Navbar;
