import React from 'react';
import Wrapper from '../../../components/organisms/Wrapper';

import { Story, Meta } from '@storybook/react/types-6-0';

import HardwareWorkerChart from '../../../components/organisms/HardwareWorkerChart';

export default {
  title: 'Component/Organisms/HardwareWorkerChart',
  component: HardwareWorkerChart
} as Meta;

const dummyData = [
  {
    sNodeId: '192.168.0.30',
    sType: '0001',
    values: [
      {
        dtInputTime: '2021-05-03T06:38:48.400Z',
        sNodeId: '192.168.0.30',
        sType: '0001',
        sSignal:
          '[{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":0,"values":{"temp_gpu":29,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":1,"values":{"temp_gpu":28,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":2,"values":{"temp_gpu":30,"temp_mem":0,"util_gpu":92,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":3,"values":{"temp_gpu":26,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":40}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":4,"values":{"temp_gpu":75,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":5,"values":{"temp_gpu":28,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":6,"values":{"temp_gpu":29,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":7,"values":{"temp_gpu":91,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}}]'
      },
      {
        dtInputTime: '2021-05-03T06:38:49.401Z',
        sNodeId: '192.168.0.30',
        sType: '0001',
        sSignal:
          '[{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":0,"values":{"temp_gpu":29,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":1,"values":{"temp_gpu":28,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":2,"values":{"temp_gpu":30,"temp_mem":0,"util_gpu":97,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":3,"values":{"temp_gpu":27,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":35}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":4,"values":{"temp_gpu":76,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":5,"values":{"temp_gpu":28,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":6,"values":{"temp_gpu":29,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":7,"values":{"temp_gpu":92,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}}]'
      }
    ],
    cards: [
      {
        name: 'Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT] (0)',
        label: 'Navi 10 [Radeon RX 5600 ... (0)',
        orderId: 0,
        temp_gpu: [29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29],
        temp_mem: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        util_gpu: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        util_mem: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        usaged: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        name: 'Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT] (1)',
        label: 'Navi 10 [Radeon RX 5600 ... (1)',
        orderId: 1,
        temp_gpu: [28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 29, 28, 29, 28, 29, 28, 28, 28, 28],
        temp_mem: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        util_gpu: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        util_mem: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        usaged: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        name: 'Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT] (2)',
        label: 'Navi 10 [Radeon RX 5600 ... (2)',
        orderId: 2,
        temp_gpu: [29, 30, 30, 30, 30, 30, 30, 30, 30, 29, 30, 29, 30, 30, 29, 30, 30, 30, 30, 30],
        temp_mem: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        util_gpu: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 90, 97, 94, 98, 0, 92, 97],
        util_mem: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        usaged: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        name: 'Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT] (3)',
        label: 'Navi 10 [Radeon RX 5600 ... (3)',
        orderId: 3,
        temp_gpu: [27, 27, 27, 27, 27, 27, 27, 27, 26, 27, 27, 27, 26, 27, 27, 27, 27, 27, 26, 27],
        temp_mem: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        util_gpu: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        util_mem: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 14, 38, 24, 7, 0, 0, 0],
        usaged: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 51, 39, 36, 32, 30, 30, 40, 35]
      },
      {
        name: 'Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT] (4)',
        label: 'Navi 10 [Radeon RX 5600 ... (4)',
        orderId: 4,
        temp_gpu: [27, 27, 27, 27, 28, 27, 27, 28, 28, 28, 27, 27, 27, 27, 27, 28, 65, 71, 75, 76],
        temp_mem: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        util_gpu: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        util_mem: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        usaged: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        name: 'Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT] (5)',
        label: 'Navi 10 [Radeon RX 5600 ... (5)',
        orderId: 5,
        temp_gpu: [28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28],
        temp_mem: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        util_gpu: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        util_mem: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        usaged: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        name: 'Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT] (6)',
        label: 'Navi 10 [Radeon RX 5600 ... (6)',
        orderId: 6,
        temp_gpu: [29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29],
        temp_mem: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        util_gpu: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        util_mem: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        usaged: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        name: 'Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT] (7)',
        label: 'Navi 10 [Radeon RX 5600 ... (7)',
        orderId: 7,
        temp_gpu: [29, 29, 28, 29, 29, 28, 29, 28, 28, 28, 29, 29, 28, 28, 29, 28, 92, 91, 91, 92],
        temp_mem: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        util_gpu: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        util_mem: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        usaged: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ],
    times: [
      '2021-05-03T06:38:30.381Z',
      '2021-05-03T06:38:31.339Z',
      '2021-05-03T06:38:32.385Z',
      '2021-05-03T06:38:33.385Z',
      '2021-05-03T06:38:34.383Z',
      '2021-05-03T06:38:35.344Z',
      '2021-05-03T06:38:36.390Z',
      '2021-05-03T06:38:37.390Z',
      '2021-05-03T06:38:38.388Z',
      '2021-05-03T06:38:39.348Z',
      '2021-05-03T06:38:40.392Z',
      '2021-05-03T06:38:41.393Z',
      '2021-05-03T06:38:42.392Z',
      '2021-05-03T06:38:43.352Z',
      '2021-05-03T06:38:44.396Z',
      '2021-05-03T06:38:45.396Z',
      '2021-05-03T06:38:46.396Z',
      '2021-05-03T06:38:47.355Z',
      '2021-05-03T06:38:48.400Z',
      '2021-05-03T06:38:49.401Z'
    ]
  }
];

const Template: Story = (args) => (
  <Wrapper>
    <div
      style={{
        display: 'flex',
        flex: '0 0 100%',
        flexWrap: 'wrap'
      }}
    >
      <HardwareWorkerChart data={dummyData} dataType={'util_gpu'} interval={'second'} {...args} />
    </div>
  </Wrapper>
);

export const Basic = Template.bind({});
Basic.args = {
  data: dummyData,
  dataType: 'temp_gpu',
  interval: 'second'
};
