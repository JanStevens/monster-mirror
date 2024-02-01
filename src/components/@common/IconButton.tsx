import { ark } from '@ark-ui/react/factory';
import { styled } from '@style/jsx';
import { iconButton } from '@style/recipes';
import type { ComponentProps } from 'react';

export const IconButton = styled(ark.button, iconButton);
export type IconButtonProps = ComponentProps<typeof IconButton>;
