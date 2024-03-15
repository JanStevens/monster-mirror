import { Meta, StoryObj } from '@storybook/react';

import AppIcon from './AppIcon';

const meta: Meta<typeof AppIcon> = {
  component: AppIcon,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Mobile: Story = {
  parameters: {
    viewport: { defaultViewport: 'iphonex' },
  },
};

export const Desktop: Story = {};
