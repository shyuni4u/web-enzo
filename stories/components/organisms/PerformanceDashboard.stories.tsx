import React from 'react';
import Wrapper from '../../../components/organisms/Wrapper';

import { Story, Meta } from '@storybook/react/types-6-0';

import PerformanceDashboard from '../../../components/organisms/PerformanceDashboard';

export default {
  title: 'Component/Organisms/PerformanceDashboard',
  component: PerformanceDashboard
} as Meta;

const Template: Story = (args) => (
  <Wrapper>
    <PerformanceDashboard {...args} />
  </Wrapper>
);

export const Basic = Template.bind({});
Basic.args = {};
