import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';
import { KITCHEN_SINK_PARAMS } from '../../utils/storybook.constants';
import { KitchenSinkLayout } from '../../shared/KitchenSinkLayout';
import { KitchenSinkSection } from '../../shared/KitchenSinkSection';
import { KitchenSinkBox } from '../../shared/KitchenSinkBox';
import { addIcon } from '../../utils/addIcon';

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
    children: 'Button',
    isLoading: false,
    isDisabled: false,
    colorScheme: 'blue',
    variant: 'filled',
    size: 'lg',
    iconSpacing: '1',
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
    leftIcon: {
      table: { category: 'icons' },
    },
    rightIcon: {
      table: { category: 'icons' },
    },
    isLoading: {
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
  render: () => {
    return (
      <KitchenSinkLayout title="Button" subtitle="Button">
        <KitchenSinkSection title="variant">
          <KitchenSinkBox description="filled (default)" span={6}>
            <Button variant="filled">Button</Button>
          </KitchenSinkBox>
          <KitchenSinkBox description="filled + icon (todo)" span={6}>
            <Button variant="filled" leftIcon={addIcon}>
              Button
            </Button>
          </KitchenSinkBox>
          <KitchenSinkBox description="filled + disabled" span={6}>
            <Button variant="filled" isDisabled>
              Button
            </Button>
          </KitchenSinkBox>
          <KitchenSinkBox description="filled + loading" span={6}>
            <Button variant="filled" isLoading>
              Button
            </Button>
          </KitchenSinkBox>
          <KitchenSinkBox description="rounded" span={6}>
            <Button variant="rounded">Button</Button>
          </KitchenSinkBox>
          <KitchenSinkBox description="rounded + icon (todo)" span={6}>
            <Button variant="rounded" leftIcon={addIcon}>
              Button
            </Button>
          </KitchenSinkBox>
          <KitchenSinkBox description="rounded + disabled" span={6}>
            <Button variant="rounded" isDisabled>
              Button
            </Button>
          </KitchenSinkBox>
          <KitchenSinkBox description="rounded + loading" span={6}>
            <Button variant="rounded" isLoading>
              Button
            </Button>
          </KitchenSinkBox>
          <KitchenSinkBox description="ghost" span={6}>
            <Button variant="ghost">Button</Button>
          </KitchenSinkBox>
          <KitchenSinkBox description="ghost + icon (todo)" span={6}>
            <Button variant="ghost" leftIcon={addIcon}>
              Button
            </Button>
          </KitchenSinkBox>
          <KitchenSinkBox description="ghost + disabled" span={6}>
            <Button variant="ghost" isDisabled>
              Button
            </Button>
          </KitchenSinkBox>
          <KitchenSinkBox description="ghost + loading" span={6}>
            <Button variant="ghost" isLoading>
              Button
            </Button>
          </KitchenSinkBox>
          <KitchenSinkBox description="text" span={6}>
            <Button variant="text">Button</Button>
          </KitchenSinkBox>
          <KitchenSinkBox description="text + icon (todo)" span={6}>
            <Button variant="text" leftIcon={addIcon}>
              Button
            </Button>
          </KitchenSinkBox>
          <KitchenSinkBox description="text + disabled" span={6}>
            <Button variant="text" isDisabled>
              Button
            </Button>
          </KitchenSinkBox>
          <KitchenSinkBox description="text + loading" span={6}>
            <Button variant="text" isLoading>
              Button
            </Button>
          </KitchenSinkBox>
        </KitchenSinkSection>

        <KitchenSinkSection title="colorScheme">
          <KitchenSinkBox description="blue (default)" span={6}>
            <Button colorScheme="blue">Button</Button>
          </KitchenSinkBox>
          <KitchenSinkBox description="grey" span={6}>
            <Button colorScheme="grey">Button</Button>
          </KitchenSinkBox>
          <KitchenSinkBox description="red" span={6}>
            <Button colorScheme="red">Button</Button>
          </KitchenSinkBox>
          <KitchenSinkBox description="orange" span={6}>
            <Button colorScheme="orange">Button</Button>
          </KitchenSinkBox>
          <KitchenSinkBox description="yellow" span={6}>
            <Button colorScheme="yellow">Button</Button>
          </KitchenSinkBox>
          <KitchenSinkBox description="green" span={6}>
            <Button colorScheme="green">Button</Button>
          </KitchenSinkBox>
          <KitchenSinkBox description="teal" span={6}>
            <Button colorScheme="teal">Button</Button>
          </KitchenSinkBox>
          <KitchenSinkBox description="cyan" span={6}>
            <Button colorScheme="cyan">Button</Button>
          </KitchenSinkBox>
          <KitchenSinkBox description="purple" span={6}>
            <Button colorScheme="purple">Button</Button>
          </KitchenSinkBox>
          <KitchenSinkBox description="pink" span={6}>
            <Button colorScheme="pink">Button</Button>
          </KitchenSinkBox>
        </KitchenSinkSection>

        <KitchenSinkSection title="size">
          <KitchenSinkBox description="sm" span={6}>
            <Button size="sm">Button</Button>
          </KitchenSinkBox>
          <KitchenSinkBox description="md" span={6}>
            <Button size="md">Button</Button>
          </KitchenSinkBox>
          <KitchenSinkBox description="lg (default)" span={6}>
            <Button size="lg">Button</Button>
          </KitchenSinkBox>
          <KitchenSinkBox description="xl" span={6}>
            <Button size="xl">Button</Button>
          </KitchenSinkBox>
        </KitchenSinkSection>

        <KitchenSinkSection title="icons & iconSpacing">
          <KitchenSinkBox description="leftIcon" span={8}>
            <Button leftIcon={addIcon}>Button</Button>
          </KitchenSinkBox>
          <KitchenSinkBox description="rightIcon" span={8}>
            <Button rightIcon={addIcon}>Button</Button>
          </KitchenSinkBox>
          <KitchenSinkBox description="leftIcon + rightIcon" span={8}>
            <Button rightIcon={addIcon} leftIcon={addIcon}>
              Button
            </Button>
          </KitchenSinkBox>

          <KitchenSinkBox description="leftIcon + IconSpacing" span={8}>
            <Button leftIcon={addIcon} iconSpacing={3}>
              Button
            </Button>
          </KitchenSinkBox>
          <KitchenSinkBox description="rightIcon + IconSpacing" span={8}>
            <Button rightIcon={addIcon} iconSpacing={3}>
              Button
            </Button>
          </KitchenSinkBox>
          <KitchenSinkBox description="leftIcon + rightIcon + iconSpacing=0" span={8}>
            <Button rightIcon={addIcon} leftIcon={addIcon} iconSpacing={0}>
              Button
            </Button>
          </KitchenSinkBox>
        </KitchenSinkSection>

        <KitchenSinkSection title="loading">
          <KitchenSinkBox description="loading" span={12}>
            <Button isLoading>Button</Button>
          </KitchenSinkBox>
          <KitchenSinkBox description="loading + loadingText" span={12}>
            <Button isLoading loadingText="loading...">
              Button
            </Button>
          </KitchenSinkBox>
          <KitchenSinkBox description="custom Spinner" span={12}>
            <Button isLoading spinner={addIcon}>
              Button
            </Button>
          </KitchenSinkBox>
          <KitchenSinkBox description="custom Spinner + loadingText" span={12}>
            <Button isLoading spinner={addIcon} loadingText="loading...">
              Button
            </Button>
          </KitchenSinkBox>

          <KitchenSinkBox description="SpinnerPlacement=start" span={12}>
            <Button isLoading loadingText="loading..." spinnerPlacement="start">
              Button
            </Button>
          </KitchenSinkBox>
          <KitchenSinkBox description="SpinnerPlacement=end" span={12}>
            <Button isLoading loadingText="loading" spinnerPlacement="end">
              Button
            </Button>
          </KitchenSinkBox>
        </KitchenSinkSection>
      </KitchenSinkLayout>
    );
  },
};
