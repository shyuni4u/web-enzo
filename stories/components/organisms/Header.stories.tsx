import React, { useState } from 'react';
import Wrapper from '../../../components/organisms/Wrapper';

import { Story, Meta } from '@storybook/react/types-6-0';

import Header from '../../../components/organisms/Header';

export default {
  title: 'Component/Organisms/Header',
  component: Header
} as Meta;

const Template: Story = () => {
  return (
    <Wrapper>
      <Header />
    </Wrapper>
  );
};

export const Basic = Template.bind({});
