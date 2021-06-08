import React from 'react';
import Wrapper from '../../../components/organisms/Wrapper';

import { Story, Meta } from '@storybook/react/types-6-0';

import AllocationDashboard from '../../../components/organisms/AllocationDashboard';

export default {
  title: 'Component/Organisms/AllocationDashboard',
  component: AllocationDashboard
} as Meta;

const Template: Story = (args) => (
  <Wrapper>
    <AllocationDashboard {...args} />
  </Wrapper>
);

export const Basic = Template.bind({});
Basic.args = {};
