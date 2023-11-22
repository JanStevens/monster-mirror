import { ark } from '@ark-ui/react';
import { styled } from '@style/jsx';
import { iconButton } from '@style/recipes';

export type IconButtonProps = typeof IconButton & { 'aria-label': string };
export const IconButton = styled(ark.button, iconButton);
