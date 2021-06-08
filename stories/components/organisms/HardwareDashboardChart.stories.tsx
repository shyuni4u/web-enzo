import React from 'react';
import Wrapper from '../../../components/organisms/Wrapper';

import { Story, Meta } from '@storybook/react/types-6-0';

import HardwareDashboardChart from '../../../components/organisms/HardwareDashboardChart';

export default {
  title: 'Component/Organisms/HardwareDashboardChart',
  component: HardwareDashboardChart
} as Meta;

const dummyData = [
  {
    sNodeId: '192.168.0.10',
    values: [
      {
        dtInputTime: '2021-05-03T05:28:42.309Z',
        sNodeId: '192.168.0.10',
        sType: '0001',
        sSignal:
          '[{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":0,"values":{"temp_gpu":31,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":1,"values":{"temp_gpu":30,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":2,"values":{"temp_gpu":31,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":3,"values":{"temp_gpu":30,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":4,"values":{"temp_gpu":30,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":5,"values":{"temp_gpu":32,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":6,"values":{"temp_gpu":33,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":7,"values":{"temp_gpu":33,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}}]'
      }
    ],
    cards: [
      {
        name: 'Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT] (0)',
        label: 'Navi 10 [Radeon RX 5600 ... (0)',
        type: '0001',
        orderId: 0,
        temp_gpu: 31,
        temp_mem: 0,
        util_gpu: 0,
        util_mem: 0,
        usaged: 0
      },
      {
        name: 'Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT] (1)',
        label: 'Navi 10 [Radeon RX 5600 ... (1)',
        type: '0001',
        orderId: 1,
        temp_gpu: 30,
        temp_mem: 0,
        util_gpu: 0,
        util_mem: 0,
        usaged: 0
      },
      {
        name: 'Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT] (2)',
        label: 'Navi 10 [Radeon RX 5600 ... (2)',
        type: '0001',
        orderId: 2,
        temp_gpu: 31,
        temp_mem: 0,
        util_gpu: 0,
        util_mem: 0,
        usaged: 0
      },
      {
        name: 'Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT] (3)',
        label: 'Navi 10 [Radeon RX 5600 ... (3)',
        type: '0001',
        orderId: 3,
        temp_gpu: 30,
        temp_mem: 0,
        util_gpu: 0,
        util_mem: 0,
        usaged: 0
      },
      {
        name: 'Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT] (4)',
        label: 'Navi 10 [Radeon RX 5600 ... (4)',
        type: '0001',
        orderId: 4,
        temp_gpu: 30,
        temp_mem: 0,
        util_gpu: 0,
        util_mem: 0,
        usaged: 0
      },
      {
        name: 'Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT] (5)',
        label: 'Navi 10 [Radeon RX 5600 ... (5)',
        type: '0001',
        orderId: 5,
        temp_gpu: 32,
        temp_mem: 0,
        util_gpu: 0,
        util_mem: 0,
        usaged: 0
      },
      {
        name: 'Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT] (6)',
        label: 'Navi 10 [Radeon RX 5600 ... (6)',
        type: '0001',
        orderId: 6,
        temp_gpu: 33,
        temp_mem: 0,
        util_gpu: 0,
        util_mem: 0,
        usaged: 0
      },
      {
        name: 'Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT] (7)',
        label: 'Navi 10 [Radeon RX 5600 ... (7)',
        type: '0001',
        orderId: 7,
        temp_gpu: 33,
        temp_mem: 0,
        util_gpu: 0,
        util_mem: 0,
        usaged: 0
      }
    ]
  },
  {
    sNodeId: '192.168.0.11',
    values: [
      {
        dtInputTime: '2021-05-03T05:28:42.749Z',
        sNodeId: '192.168.0.11',
        sType: '0001',
        sSignal:
          '[{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":0,"values":{"temp_gpu":27,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":1,"values":{"temp_gpu":26,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":2,"values":{"temp_gpu":27,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":3,"values":{"temp_gpu":28,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":4,"values":{"temp_gpu":27,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":5,"values":{"temp_gpu":28,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":6,"values":{"temp_gpu":26,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":7,"values":{"temp_gpu":26,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}}]'
      }
    ],
    cards: [
      {
        name: 'Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT] (0)',
        label: 'Navi 10 [Radeon RX 5600 ... (0)',
        type: '0001',
        orderId: 0,
        temp_gpu: 27,
        temp_mem: 0,
        util_gpu: 0,
        util_mem: 0,
        usaged: 0
      },
      {
        name: 'Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT] (1)',
        label: 'Navi 10 [Radeon RX 5600 ... (1)',
        type: '0001',
        orderId: 1,
        temp_gpu: 26,
        temp_mem: 0,
        util_gpu: 0,
        util_mem: 0,
        usaged: 0
      },
      {
        name: 'Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT] (2)',
        label: 'Navi 10 [Radeon RX 5600 ... (2)',
        type: '0001',
        orderId: 2,
        temp_gpu: 27,
        temp_mem: 0,
        util_gpu: 0,
        util_mem: 0,
        usaged: 0
      },
      {
        name: 'Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT] (3)',
        label: 'Navi 10 [Radeon RX 5600 ... (3)',
        type: '0001',
        orderId: 3,
        temp_gpu: 28,
        temp_mem: 0,
        util_gpu: 0,
        util_mem: 0,
        usaged: 0
      },
      {
        name: 'Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT] (4)',
        label: 'Navi 10 [Radeon RX 5600 ... (4)',
        type: '0001',
        orderId: 4,
        temp_gpu: 27,
        temp_mem: 0,
        util_gpu: 0,
        util_mem: 0,
        usaged: 0
      },
      {
        name: 'Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT] (5)',
        label: 'Navi 10 [Radeon RX 5600 ... (5)',
        type: '0001',
        orderId: 5,
        temp_gpu: 28,
        temp_mem: 0,
        util_gpu: 0,
        util_mem: 0,
        usaged: 0
      },
      {
        name: 'Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT] (6)',
        label: 'Navi 10 [Radeon RX 5600 ... (6)',
        type: '0001',
        orderId: 6,
        temp_gpu: 26,
        temp_mem: 0,
        util_gpu: 0,
        util_mem: 0,
        usaged: 0
      },
      {
        name: 'Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT] (7)',
        label: 'Navi 10 [Radeon RX 5600 ... (7)',
        type: '0001',
        orderId: 7,
        temp_gpu: 26,
        temp_mem: 0,
        util_gpu: 0,
        util_mem: 0,
        usaged: 0
      }
    ]
  },
  {
    sNodeId: '192.168.0.30',
    values: [
      {
        dtInputTime: '2021-05-03T05:28:42.482Z',
        sNodeId: '192.168.0.30',
        sType: '0001',
        sSignal:
          '[{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":0,"values":{"temp_gpu":31,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":1,"values":{"temp_gpu":30,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":2,"values":{"temp_gpu":32,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":3,"values":{"temp_gpu":29,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":4,"values":{"temp_gpu":30,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":5,"values":{"temp_gpu":30,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":6,"values":{"temp_gpu":31,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":7,"values":{"temp_gpu":31,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}}]'
      }
    ],
    cards: [
      {
        name: 'Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT] (0)',
        label: 'Navi 10 [Radeon RX 5600 ... (0)',
        type: '0001',
        orderId: 0,
        temp_gpu: 31,
        temp_mem: 0,
        util_gpu: 0,
        util_mem: 0,
        usaged: 0
      },
      {
        name: 'Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT] (1)',
        label: 'Navi 10 [Radeon RX 5600 ... (1)',
        type: '0001',
        orderId: 1,
        temp_gpu: 30,
        temp_mem: 0,
        util_gpu: 0,
        util_mem: 0,
        usaged: 0
      },
      {
        name: 'Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT] (2)',
        label: 'Navi 10 [Radeon RX 5600 ... (2)',
        type: '0001',
        orderId: 2,
        temp_gpu: 32,
        temp_mem: 0,
        util_gpu: 0,
        util_mem: 0,
        usaged: 0
      },
      {
        name: 'Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT] (3)',
        label: 'Navi 10 [Radeon RX 5600 ... (3)',
        type: '0001',
        orderId: 3,
        temp_gpu: 29,
        temp_mem: 0,
        util_gpu: 0,
        util_mem: 0,
        usaged: 0
      },
      {
        name: 'Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT] (4)',
        label: 'Navi 10 [Radeon RX 5600 ... (4)',
        type: '0001',
        orderId: 4,
        temp_gpu: 30,
        temp_mem: 0,
        util_gpu: 0,
        util_mem: 0,
        usaged: 0
      },
      {
        name: 'Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT] (5)',
        label: 'Navi 10 [Radeon RX 5600 ... (5)',
        type: '0001',
        orderId: 5,
        temp_gpu: 30,
        temp_mem: 0,
        util_gpu: 0,
        util_mem: 0,
        usaged: 0
      },
      {
        name: 'Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT] (6)',
        label: 'Navi 10 [Radeon RX 5600 ... (6)',
        type: '0001',
        orderId: 6,
        temp_gpu: 31,
        temp_mem: 0,
        util_gpu: 0,
        util_mem: 0,
        usaged: 0
      },
      {
        name: 'Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT] (7)',
        label: 'Navi 10 [Radeon RX 5600 ... (7)',
        type: '0001',
        orderId: 7,
        temp_gpu: 31,
        temp_mem: 0,
        util_gpu: 0,
        util_mem: 0,
        usaged: 0
      }
    ]
  },
  {
    sNodeId: '192.168.0.31',
    values: [
      {
        dtInputTime: '2021-05-03T05:28:42.051Z',
        sNodeId: '192.168.0.31',
        sType: '0001',
        sSignal:
          '[{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":0,"values":{"temp_gpu":26,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":1,"values":{"temp_gpu":28,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":2,"values":{"temp_gpu":25,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":3,"values":{"temp_gpu":28,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":4,"values":{"temp_gpu":28,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":5,"values":{"temp_gpu":28,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":6,"values":{"temp_gpu":27,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}},{"card":"Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]","orderId":7,"values":{"temp_gpu":27,"temp_mem":0,"util_gpu":0,"util_mem":0,"usage_used":0,"usage_total":0,"usaged":0}}]'
      }
    ],
    cards: [
      {
        name: 'Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT] (0)',
        label: 'Navi 10 [Radeon RX 5600 ... (0)',
        type: '0001',
        orderId: 0,
        temp_gpu: 26,
        temp_mem: 0,
        util_gpu: 0,
        util_mem: 0,
        usaged: 0
      },
      {
        name: 'Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT] (1)',
        label: 'Navi 10 [Radeon RX 5600 ... (1)',
        type: '0001',
        orderId: 1,
        temp_gpu: 28,
        temp_mem: 0,
        util_gpu: 0,
        util_mem: 0,
        usaged: 0
      },
      {
        name: 'Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT] (2)',
        label: 'Navi 10 [Radeon RX 5600 ... (2)',
        type: '0001',
        orderId: 2,
        temp_gpu: 25,
        temp_mem: 0,
        util_gpu: 0,
        util_mem: 0,
        usaged: 0
      },
      {
        name: 'Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT] (3)',
        label: 'Navi 10 [Radeon RX 5600 ... (3)',
        type: '0001',
        orderId: 3,
        temp_gpu: 28,
        temp_mem: 0,
        util_gpu: 0,
        util_mem: 0,
        usaged: 0
      },
      {
        name: 'Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT] (4)',
        label: 'Navi 10 [Radeon RX 5600 ... (4)',
        type: '0001',
        orderId: 4,
        temp_gpu: 28,
        temp_mem: 0,
        util_gpu: 0,
        util_mem: 0,
        usaged: 0
      },
      {
        name: 'Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT] (5)',
        label: 'Navi 10 [Radeon RX 5600 ... (5)',
        type: '0001',
        orderId: 5,
        temp_gpu: 28,
        temp_mem: 0,
        util_gpu: 0,
        util_mem: 0,
        usaged: 0
      },
      {
        name: 'Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT] (6)',
        label: 'Navi 10 [Radeon RX 5600 ... (6)',
        type: '0001',
        orderId: 6,
        temp_gpu: 27,
        temp_mem: 0,
        util_gpu: 0,
        util_mem: 0,
        usaged: 0
      },
      {
        name: 'Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT] (7)',
        label: 'Navi 10 [Radeon RX 5600 ... (7)',
        type: '0001',
        orderId: 7,
        temp_gpu: 27,
        temp_mem: 0,
        util_gpu: 0,
        util_mem: 0,
        usaged: 0
      }
    ]
  }
];
const dummyWorkerList = [
  { sNodeId: '192.168.1.10', sLabel: 'login0', sWorkerIP: '192.168.0.10', bStatus: 1 },
  { sNodeId: '192.168.1.11', sLabel: 'login1', sWorkerIP: '192.168.0.11', bStatus: 1 },
  { sNodeId: '192.168.1.20', sLabel: 'v100-0', sWorkerIP: '192.168.0.20', bStatus: 1 },
  { sNodeId: '192.168.1.21', sLabel: 'v100-1', sWorkerIP: '192.168.0.21', bStatus: 1 },
  { sNodeId: '192.168.1.30', sLabel: 'rx5700-0', sWorkerIP: '192.168.0.30', bStatus: 1 },
  { sNodeId: '192.168.1.31', sLabel: 'rx5700-1', sWorkerIP: '192.168.0.31', bStatus: 1 },
  { sNodeId: '192.168.1.32', sLabel: 'rx5700-2', sWorkerIP: '192.168.0.32', bStatus: 1 },
  { sNodeId: '192.168.1.33', sLabel: 'rx5700-3', sWorkerIP: '192.168.0.33', bStatus: 0 }
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
      <HardwareDashboardChart data={dummyData} workerList={dummyWorkerList} tab={'temp_gpu'} {...args} />
    </div>
  </Wrapper>
);

export const Basic = Template.bind({});
Basic.args = {
  data: dummyData,
  workerList: dummyWorkerList,
  tab: 'temp_gpu'
};
