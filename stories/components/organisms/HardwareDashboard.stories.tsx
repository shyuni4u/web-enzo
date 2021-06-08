import React from 'react';
import Wrapper from '../../../components/organisms/Wrapper';

import { Story, Meta } from '@storybook/react/types-6-0';

import HardwareDashboard from '../../../components/organisms/HardwareDashboard';

export default {
  title: 'Component/Organisms/HardwareDashboard',
  component: HardwareDashboard
} as Meta;

const Template: Story = (args) => (
  <Wrapper>
    <HardwareDashboard {...args} />
  </Wrapper>
);

export const Basic = Template.bind({});
Basic.args = {
  menu: 'Menu',
  worker: '[SAMPLE] 0.0.0.0',
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
        dtInputTime: '2021-05-03T04:45:27.764Z',
        sNodeId: '이 IP가 기준입니다. (nodeList[idx].sWorkerIP = gpuList[idx].sNodeId)',
        sType: '0001',
        sSignal:
          '[{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":0,"values":{"temp_gpu":30,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":1,"values":{"temp_gpu":28,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":2,"values":{"temp_gpu":29,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":3,"values":{"temp_gpu":28,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":4,"values":{"temp_gpu":28,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":5,"values":{"temp_gpu":30,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":6,"values":{"temp_gpu":31,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":7,"values":{"temp_gpu":32,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}}]'
      },
      {
        dtInputTime: '2021-05-03T04:45:27.375Z',
        sNodeId: '192.168.0.11',
        sType: '0001',
        sSignal:
          '[{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":0,"values":{"temp_gpu":27,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":1,"values":{"temp_gpu":25,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":2,"values":{"temp_gpu":26,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":3,"values":{"temp_gpu":27,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":4,"values":{"temp_gpu":26,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":5,"values":{"temp_gpu":26,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":6,"values":{"temp_gpu":25,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":7,"values":{"temp_gpu":26,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}}]'
      },
      {
        dtInputTime: '2021-05-03T04:45:27.647Z',
        sNodeId: '192.168.0.30',
        sType: '0001',
        sSignal:
          '[{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":0,"values":{"temp_gpu":31,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":1,"values":{"temp_gpu":31,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":2,"values":{"temp_gpu":32,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":3,"values":{"temp_gpu":29,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":4,"values":{"temp_gpu":30,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":5,"values":{"temp_gpu":30,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":6,"values":{"temp_gpu":31,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":7,"values":{"temp_gpu":31,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}}]'
      },
      {
        dtInputTime: '2021-05-03T04:45:27.566Z',
        sNodeId: '192.168.0.31 (nodeList에 없는 경우)',
        sType: '0001',
        sSignal:
          '[{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":0,"values":{"temp_gpu":26,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":1,"values":{"temp_gpu":28,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":2,"values":{"temp_gpu":26,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":3,"values":{"temp_gpu":28,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":4,"values":{"temp_gpu":28,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":5,"values":{"temp_gpu":28,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":6,"values":{"temp_gpu":27,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":7,"values":{"temp_gpu":27,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}}]'
      }
    ]
  }
};
