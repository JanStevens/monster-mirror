import { HStack, Stack } from '@style/jsx';
import { Icon } from 'icons';
import {
  AngryIcon,
  HeartPulseIcon,
  InfoIcon,
  MenuIcon,
  UsersIcon,
  WrenchIcon,
} from 'lucide-react';

import { IconButton } from 'components/@common/icon-button';
import { Menu } from 'components/@common/menu';

import { DialogType } from './useNavbarDialogs';

interface Props {
  level: number;
  onSelect: (value: DialogType) => void;
  isRandomDungeon?: boolean;
}

const NavbarMenu = ({ level, onSelect, isRandomDungeon }: Props) => {
  return (
    <Menu.Root onSelect={({ value }) => onSelect(value as DialogType)}>
      <Menu.Trigger asChild>
        <IconButton variant="ghost" size="md" fontWeight="normal">
          <MenuIcon />
        </IconButton>
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content>
          {/* Scenario Info - Only for regular scenarios */}
          {!isRandomDungeon && (
            <Menu.Item value="scenario-info" fontSize="lg">
              <Stack gap="6" justify="space-between" flex="1">
                <HStack gap="2">
                  <InfoIcon />
                  Scenario Info
                </HStack>
              </Stack>
            </Menu.Item>
          )}

          {isRandomDungeon && (
            <Menu.Item value="change-monsters" fontSize="lg">
              <Stack gap="6" justify="space-between" flex="1">
                <HStack gap="2">
                  <AngryIcon />
                  Change Monsters
                </HStack>
              </Stack>
            </Menu.Item>
          )}

          {/* New Round - Mobile Only */}
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

          {/* Party Management */}
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

          {/* Tools and About */}
          <Menu.Item value="tools" fontSize="lg">
            <Stack gap="6" justify="space-between" flex="1">
              <HStack gap="2">
                <WrenchIcon />
                Tools
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
  );
};

export default NavbarMenu;
