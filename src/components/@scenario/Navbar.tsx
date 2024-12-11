import { Flex, HStack, Stack } from '@style/jsx';
import type { ScenarioDefinition } from 'data/scenarios';
import { Icon } from 'icons';
import {
  ArrowDown01Icon,
  HeartPulseIcon,
  InfoIcon,
  MenuIcon,
  RadioTowerIcon,
  UsersIcon,
} from 'lucide-react';
import { useState } from 'react';
import { useShallow } from 'zustand/react/shallow';

import { useStore } from 'services/stores';

import { Button } from 'components/@common/button';
import { IconButton } from 'components/@common/icon-button';
import { Menu } from 'components/@common/menu';
import { Navigation } from 'components/@navigation';
import AboutDialog from 'components/@scenario/AboutDialog';

import ChangeLevelDialog from './ChangeLevelDialog';
import ChangePartyDialog from './ChangePartyDialog';
import ConnectDialog from './ConnectDialog';
import ConnectionInfo from './ConnectionInfo';
import { ConnectionInfoDialog } from './ConnectionInfoDialog';
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
  | 'scenario-info'
  | 'connect'
  | 'connect-info'
  | 'about';

const Navbar = ({ scenario }: Props) => {
  const [level, characters] = useStore(
    useShallow((state) => [state.level, state.party]),
  );
  const { room, status } = useStore((state) => state.liveblocks);
  const { clearActiveCards } = useStore((state) => state.actions);
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
    if (value === 'connect') setDialogOpen('connect');
    if (value === 'connect-info') setDialogOpen('connect-info');
    if (value === 'about') setDialogOpen('about');
  };

  const handleClose = () => setDialogOpen(null);

  return (
    <>
      <Navigation>
        <Navigation.Logo title={scenario.name} subtitle={`level: ${level}`} />
        <Flex align="center" gap={2}>
          <ConnectionInfo
            onClick={() => handleSelect({ value: 'connect-info' })}
          />
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

          <Menu.Root onSelect={handleSelect}>
            <Menu.Trigger asChild>
              <IconButton variant="ghost" size="md" fontWeight="normal">
                <MenuIcon />
              </IconButton>
            </Menu.Trigger>
            <Menu.Positioner>
              <Menu.Content>
                <Menu.Item value="scenario-info" fontSize="lg">
                  <Stack gap="6" justify="space-between" flex="1">
                    <HStack gap="2">
                      <InfoIcon />
                      Scenario Info
                    </HStack>
                  </Stack>
                </Menu.Item>
                {!room && (
                  <Menu.Item value="connect" fontSize="lg">
                    <Stack gap="6" justify="space-between" flex="1">
                      <HStack gap="2">
                        <RadioTowerIcon />
                        Connect
                      </HStack>
                    </Stack>
                  </Menu.Item>
                )}

                {room && status === 'connected' && (
                  <Menu.Item value="connect-info" fontSize="lg">
                    <Stack gap="6" justify="space-between" flex="1">
                      <HStack gap="2">
                        <RadioTowerIcon />
                        Connection Info
                      </HStack>
                    </Stack>
                  </Menu.Item>
                )}

                <Menu.Item
                  value="new-round"
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
                <Menu.Item value="change-characters" fontSize="lg">
                  <Stack gap="6" justify="space-between" flex="1">
                    <HStack gap="2">
                      <UsersIcon />
                      Change Party
                    </HStack>
                  </Stack>
                </Menu.Item>

                <Menu.Item value="change-level" fontSize="lg">
                  <Stack gap="6" justify="space-between" flex="1">
                    <HStack gap="2">
                      <HeartPulseIcon />
                      Party level: {level}
                    </HStack>
                  </Stack>
                </Menu.Item>

                <Menu.Item value="about" fontSize="lg">
                  <Stack gap="6" justify="space-between" flex="1">
                    <HStack gap="2">
                      <InfoIcon />
                      About
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

      <ConnectDialog open={dialogOpen === 'connect'} onClose={handleClose} />
      <ConnectionInfoDialog
        open={dialogOpen === 'connect-info'}
        onClose={handleClose}
      />
      <AboutDialog open={dialogOpen === 'about'} onClose={handleClose} />
    </>
  );
};

export default Navbar;
