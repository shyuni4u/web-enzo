import React from 'react';
import Wrapper from '../../../components/organisms/Wrapper';

import { Story, Meta } from '@storybook/react/types-6-0';

import AllocationDashboardChart from '../../../components/organisms/AllocationDashboardChart';

export default {
  title: 'Component/Organisms/AllocationDashboardChart',
  component: AllocationDashboardChart
} as Meta;

const Template: Story = (args) => (
  <Wrapper>
    <AllocationDashboardChart {...args} />
  </Wrapper>
);

export const Basic = Template.bind({});
Basic.args = {
  test: {
    node: [
      {
        sNodeId: '192.168.1.10',
        sLabel: 'Node Label Sample 1',
        sWorkerIP: '이 IP가 기준입니다. (node[idx].sWorkerIP = gpu[idx].sNodeId)',
        bStatus: 1
      },
      {
        sNodeId: '192.168.1.11',
        sLabel: 'Setting > 전원 원격 제어 > Node 이름 설정',
        sWorkerIP: '192.168.0.11',
        bStatus: 1
      },
      { sNodeId: '192.168.1.30', sLabel: 'rx5700', sWorkerIP: '192.168.0.30', bStatus: 1 },
      { sNodeId: '192.168.1.32', sLabel: '없는 경우', sWorkerIP: '192.168.0.32', bStatus: 1 }
    ],
    gpu: [
      {
        dtInputTime: '2021-05-03T06:29:08.681Z',
        sNodeId: '192.168.0.10',
        sType: '0001',
        sSignal:
          '[{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":0,"values":{"temp_gpu":31,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":1,"values":{"temp_gpu":30,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":2,"values":{"temp_gpu":30,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":3,"values":{"temp_gpu":30,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":4,"values":{"temp_gpu":30,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":5,"values":{"temp_gpu":31,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":6,"values":{"temp_gpu":32,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":7,"values":{"temp_gpu":33,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}}]'
      },
      {
        dtInputTime: '2021-05-03T06:29:08.918Z',
        sNodeId: '192.168.0.11',
        sType: '0001',
        sSignal:
          '[{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":0,"values":{"temp_gpu":28,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":1,"values":{"temp_gpu":26,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":2,"values":{"temp_gpu":27,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":3,"values":{"temp_gpu":28,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":4,"values":{"temp_gpu":27,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":5,"values":{"temp_gpu":28,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":6,"values":{"temp_gpu":26,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":7,"values":{"temp_gpu":26,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}}]'
      },
      {
        dtInputTime: '2021-05-03T06:29:08.865Z',
        sNodeId: '192.168.0.30',
        sType: '0001',
        sSignal:
          '[{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":0,"values":{"temp_gpu":29,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":1,"values":{"temp_gpu":28,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":2,"values":{"temp_gpu":30,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":3,"values":{"temp_gpu":27,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":4,"values":{"temp_gpu":28,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":5,"values":{"temp_gpu":28,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":6,"values":{"temp_gpu":29,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":7,"values":{"temp_gpu":29,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}}]'
      },
      {
        dtInputTime: '2021-05-03T06:29:08.472Z',
        sNodeId: '192.168.0.31',
        sType: '0001',
        sSignal:
          '[{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":0,"values":{"temp_gpu":27,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":1,"values":{"temp_gpu":28,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":2,"values":{"temp_gpu":25,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":3,"values":{"temp_gpu":28,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":4,"values":{"temp_gpu":29,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":5,"values":{"temp_gpu":28,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":6,"values":{"temp_gpu":27,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":7,"values":{"temp_gpu":26,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}}]'
      }
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
    ]
  }
};
