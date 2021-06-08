import React from 'react';
import Wrapper from '../../../components/organisms/Wrapper';

import { Story, Meta } from '@storybook/react/types-6-0';

import SettingPower from '../../../components/organisms/SettingPower';

export default {
  title: 'Component/Organisms/SettingPower',
  component: SettingPower
} as Meta;

const Template: Story = (args) => (
  <Wrapper>
    <SettingPower {...args} />
  </Wrapper>
);

export const Basic = Template.bind({});
Basic.args = {
  testData: [
    {
      sNodeId: 'IP (ex. 192.168.1.255)',
      sLabel: 'Searching',
      bStatus: -1
    },
    {
      sNodeId: 'IP (ex. 192.168.1.255)',
      sLabel: 'POWER OFF',
      bStatus: 0
    },
    {
      sNodeId: 'IP (ex. 192.168.1.255)',
      sLabel: 'POWER ON',
      bStatus: 1
    },
    {
      sNodeId: 'IP (ex. 192.168.1.255)',
      sLabel: 'Network disconnected',
      bStatus: 9
    }
  ]
};
