import React from 'react';
import Wrapper from '../../../components/organisms/StorybookWrapper';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { MenuItem, MenuItemProps } from '../../../components/atoms/MenuItem';

export default {
  title: 'Component/Atoms/MenuItem',
  component: MenuItem
} as Meta;

const Template: Story<MenuItemProps> = () => (
  <Wrapper>
    <MenuItem>MENU 1</MenuItem>
  </Wrapper>
);

export const Basic = Template.bind({});
Basic.args = {
  active: true
};
