import React from 'react';
import Wrapper from '../../../components/organisms/Wrapper';

import { Story, Meta } from '@storybook/react/types-6-0';

import SettingSDAToken from '../../../components/organisms/SettingSDAToken';

export default {
  title: 'Component/Organisms/SettingSDAToken',
  component: SettingSDAToken
} as Meta;

const Template: Story = (args) => (
  <Wrapper>
    <SettingSDAToken {...args} />
  </Wrapper>
);

export const Basic = Template.bind({});
Basic.args = {
  test: {
    token: [
      { value: 'TokenData.value 1', description: 'sample 1' },
      { value: 'TokenData.value 2', description: 'sample 2' },
      { value: 'TokenData.value 3', description: 'sample 3 (sda empty)' }
    ],
    sda: [
      {
        id: '606401556125c1606150cf95',
        modelId: 0,
        token: { value: 'TokenData.value 1', description: 'test data.' },
        backendlist: [],
        description: 'TokenData.value = SDAData.token.value'
      },
      {
        id: '607cf5a3a0ed1a24bb3d250d',
        modelId: 2,
        token: { value: 'TokenData.value 2', description: 'test data (has backend info).' },
        backendlist: [
          {
            id: 0,
            type: 'ucx',
            ip: '192.168.0.30',
            port: '24155',
            deviceList: [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }]
          }
        ],
        description: 'test data (has backend info).'
      }
    ],
    sdaModel: [
      { id: 0, name: 'small', numDevices: 2 },
      { id: 1, name: 'large', numDevices: 4 },
      { id: 2, name: 'xlarge', numDevices: 8 },
      { id: 3, name: '2xlarge', numDevices: 16 },
      { id: 5, name: '4xlarge', numDevices: 32 },
      { id: 4, name: '3xlarge', numDevices: 24 }
    ]
  }
};
