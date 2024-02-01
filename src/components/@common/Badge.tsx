import { ark } from '@ark-ui/react/factory';
import { styled } from '@style/jsx';
import { badge } from '@style/recipes';
import type { ComponentProps } from 'react';

export const Badge = styled(ark.div, badge);
export type BadgeProps = ComponentProps<typeof Badge>;
