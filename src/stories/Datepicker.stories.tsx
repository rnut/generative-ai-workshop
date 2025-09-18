import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Datepicker from '../components/Datepicker';
import '../index.css';

const meta: Meta<typeof Datepicker> = {
  title: 'Components/Datepicker',
  component: Datepicker,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Datepicker>;

export const Default: Story = {
  args: {},
};
