import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';
import { KITCHEN_SINK_PARAMS } from '../../utils/storybook.constants';

// Storybook settings
const meta = {
  title: 'Action/Button',
  component: Button,
} satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof Button>;

// Controls story
export const Controls: Story = {
  args: {
    children: 'Controls',
    isActive: false,
    isLoading: false,
    isDisabled: false,
    colorScheme: 'blue',
    variant: 'filled',
    loadingText: 'loading...',
  },
  argTypes: {
    colorScheme: {
      control: { type: 'select' },
    },
    variant: {
      control: { type: 'select' },
    },
    size: {
      control: { type: 'select' },
    },
    children: {
      control: { type: 'text' },
    },
    iconSpacing: {
      control: { type: 'text' },
      table: { category: 'icons' },
    },
    isLoading: {
      table: { category: 'icons' },
    },
    leftIcon: {
      table: { category: 'icons' },
    },
    rightIcon: {
      table: { category: 'loading' },
    },
    spinner: {
      table: { category: 'loading' },
    },
    loadingText: {
      control: { type: 'text' },
      table: { category: 'loading' },
    },
    spinnerPlacement: {
      control: { type: 'inline-radio' },
      table: { category: 'loading' },
    },
    onClick: {
      table: { category: 'actions' },
    },
    type: {
      control: { type: 'inline-radio' },
    },
  },
};

// Kitchen Sink story
export const KitchenSink: Story = {
  parameters: KITCHEN_SINK_PARAMS,
  render: () => <Button size={'sm'}>Kitchen Sink</Button>,
};
