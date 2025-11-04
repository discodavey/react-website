import type { Meta, StoryObj } from '@storybook/react';
import Nav from './Nav';

const meta: Meta<typeof Nav> = {
  title: 'Atoms/Nav',
  component: Nav,
};
export default meta;

type Story = StoryObj<typeof Nav>;

export const NavMain: Story = {
  args: {
    links: [
      {
        link: '/',
        title: 'Home',
      },
    ],
  }

};

export const NavAbout: Story = {
  args: {
    links: [
      {
        link: '/about',
        title: 'About',
      },
    ],
  }

};
