import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta = {
  title: 'Action/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

// Stories start below =======

// Controls story
export const Controls: Story = {
  args: {
    test: 'Controls',
  },
};

// Kitchen Sink story
export const KitchenSink: Story = {
  parameters: {
    layout: 'fullscreen',
    options: { showPanel: false },
  },
  render: () => <Button test="Kitchen Sink" />,
};
