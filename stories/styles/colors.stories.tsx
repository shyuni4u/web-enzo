import React from 'react';
import Wrapper from '../../components/organisms/StorybookWrapper';

import { Story, Meta } from '@storybook/react/types-6-0';

import Color from '../../styles/color';

export default {
  title: 'Styles/Color',
  component: Color
} as Meta;

const Template: Story = () => (
  <Wrapper>
    <Color />
  </Wrapper>
);

export const Base = Template.bind({});
