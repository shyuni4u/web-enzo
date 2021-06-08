import React from 'react';
import Wrapper from '../../../components/organisms/Wrapper';

import { Story, Meta } from '@storybook/react/types-6-0';

import PerformanceDashboardChart from '../../../components/organisms/PerformanceDashboardChart';

export default {
  title: 'Component/Organisms/PerformanceDashboardChart',
  component: PerformanceDashboardChart
} as Meta;

const Template: Story = (args) => (
  <Wrapper>
    <PerformanceDashboardChart group={'MOREH1'} dataName={'IMAGES/SEC'} {...args} />
  </Wrapper>
);

export const Basic = Template.bind({});
Basic.args = {
  group: 'MOREH1',
  dataName: 'IMAGES/SEC',
  dataTime: '2021-04-21 14:00:10',
  test: {
    modnnData: [
      {
        dtInputTime: '2021-04-21T14:47:52.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 175.271
      },
      {
        dtInputTime: '2021-04-21T14:48:01.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 174.506
      },
      {
        dtInputTime: '2021-04-21T14:48:10.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 172.936
      },
      {
        dtInputTime: '2021-04-21T14:48:15.000Z',
        sNodeId: '192.168.0.11',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 58.465
      },
      {
        dtInputTime: '2021-04-21T14:48:19.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 172.42
      },
      {
        dtInputTime: '2021-04-21T14:48:28.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 178.3
      },
      {
        dtInputTime: '2021-04-21T14:48:38.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 173.584
      },
      {
        dtInputTime: '2021-04-21T14:48:43.000Z',
        sNodeId: '192.168.0.11',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 57.236
      },
      {
        dtInputTime: '2021-04-21T14:48:47.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 177.51
      },
      {
        dtInputTime: '2021-04-21T14:49:03.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 175.247
      },
      {
        dtInputTime: '2021-04-21T14:49:11.000Z',
        sNodeId: '192.168.0.11',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 57.369
      },
      {
        dtInputTime: '2021-04-21T14:49:12.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 175.773
      },
      {
        dtInputTime: '2021-04-21T14:49:21.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 176.074
      },
      {
        dtInputTime: '2021-04-21T14:49:30.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 176.571
      },
      {
        dtInputTime: '2021-04-21T14:49:38.000Z',
        sNodeId: '192.168.0.11',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 58.451
      },
      {
        dtInputTime: '2021-04-21T14:49:39.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 177.032
      },
      {
        dtInputTime: '2021-04-21T14:49:49.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 175.001
      },
      {
        dtInputTime: '2021-04-21T14:49:58.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 175.872
      },
      {
        dtInputTime: '2021-04-21T14:50:07.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 179.805
      },
      {
        dtInputTime: '2021-04-21T14:50:08.000Z',
        sNodeId: '192.168.0.11',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 54.13
      },
      {
        dtInputTime: '2021-04-21T14:50:23.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 177.488
      },
      {
        dtInputTime: '2021-04-21T14:50:32.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 178.477
      },
      {
        dtInputTime: '2021-04-21T14:50:41.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 175.224
      },
      {
        dtInputTime: '2021-04-21T14:50:50.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 178.141
      },
      {
        dtInputTime: '2021-04-21T14:50:51.000Z',
        sNodeId: '192.168.0.11',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 58.257
      },
      {
        dtInputTime: '2021-04-21T14:50:59.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 175.507
      },
      {
        dtInputTime: '2021-04-21T14:51:08.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 174.729
      },
      {
        dtInputTime: '2021-04-21T14:51:17.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 174.484
      },
      {
        dtInputTime: '2021-04-21T14:51:18.000Z',
        sNodeId: '192.168.0.11',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 59.687
      },
      {
        dtInputTime: '2021-04-21T14:51:26.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 175.908
      },
      {
        dtInputTime: '2021-04-21T14:51:43.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 174.795
      },
      {
        dtInputTime: '2021-04-21T14:51:49.000Z',
        sNodeId: '192.168.0.11',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 51.976
      },
      {
        dtInputTime: '2021-04-21T14:51:52.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 172.664
      },
      {
        dtInputTime: '2021-04-21T14:52:01.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 173.855
      },
      {
        dtInputTime: '2021-04-21T14:52:10.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 173.972
      },
      {
        dtInputTime: '2021-04-21T14:52:18.000Z',
        sNodeId: '192.168.0.11',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 54.791
      },
      {
        dtInputTime: '2021-04-21T14:52:19.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 174.186
      },
      {
        dtInputTime: '2021-04-21T14:52:29.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 173.717
      },
      {
        dtInputTime: '2021-04-21T14:52:38.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 174.608
      },
      {
        dtInputTime: '2021-04-21T14:52:45.000Z',
        sNodeId: '192.168.0.11',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 58.907
      },
      {
        dtInputTime: '2021-04-21T14:52:47.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 178.907
      },
      {
        dtInputTime: '2021-04-21T14:53:03.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 176.12
      },
      {
        dtInputTime: '2021-04-21T14:53:12.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 177.862
      },
      {
        dtInputTime: '2021-04-21T14:53:21.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 177.541
      },
      {
        dtInputTime: '2021-04-21T14:53:30.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 173.535
      },
      {
        dtInputTime: '2021-04-21T14:53:39.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 174.841
      },
      {
        dtInputTime: '2021-04-21T14:53:48.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 175.611
      },
      {
        dtInputTime: '2021-04-21T14:53:50.000Z',
        sNodeId: '192.168.0.11',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 55.976
      },
      {
        dtInputTime: '2021-04-21T14:53:58.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 175.212
      },
      {
        dtInputTime: '2021-04-21T14:54:07.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 173.165
      },
      {
        dtInputTime: '2021-04-21T14:54:18.000Z',
        sNodeId: '192.168.0.11',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 57.802
      },
      {
        dtInputTime: '2021-04-21T14:54:23.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 176.802
      },
      {
        dtInputTime: '2021-04-21T14:54:32.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 173.014
      },
      {
        dtInputTime: '2021-04-21T14:54:41.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 173.687
      },
      {
        dtInputTime: '2021-04-21T14:54:49.000Z',
        sNodeId: '192.168.0.11',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 50.849
      },
      {
        dtInputTime: '2021-04-21T14:54:50.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 174.665
      },
      {
        dtInputTime: '2021-04-21T14:55:00.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 172.48
      },
      {
        dtInputTime: '2021-04-21T14:55:09.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 174.974
      },
      {
        dtInputTime: '2021-04-21T14:55:17.000Z',
        sNodeId: '192.168.0.11',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 57.585
      },
      {
        dtInputTime: '2021-04-21T14:55:18.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 173.819
      },
      {
        dtInputTime: '2021-04-21T14:55:27.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 173.976
      },
      {
        dtInputTime: '2021-04-21T14:55:44.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 177.523
      },
      {
        dtInputTime: '2021-04-21T14:55:45.000Z',
        sNodeId: '192.168.0.11',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 56.413
      },
      {
        dtInputTime: '2021-04-21T14:55:53.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 176.289
      },
      {
        dtInputTime: '2021-04-21T14:56:02.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 173.096
      },
      {
        dtInputTime: '2021-04-21T14:56:11.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 176.622
      },
      {
        dtInputTime: '2021-04-21T14:56:20.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 176.459
      },
      {
        dtInputTime: '2021-04-21T14:56:25.000Z',
        sNodeId: '192.168.0.11',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 40.105
      },
      {
        dtInputTime: '2021-04-21T14:56:29.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 178.194
      },
      {
        dtInputTime: '2021-04-21T14:56:38.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 174.206
      },
      {
        dtInputTime: '2021-04-21T14:56:47.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 174.672
      },
      {
        dtInputTime: '2021-04-21T14:56:57.000Z',
        sNodeId: '192.168.0.11',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 49.548
      },
      {
        dtInputTime: '2021-04-21T14:57:25.000Z',
        sNodeId: '192.168.0.11',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 56.958
      },
      {
        dtInputTime: '2021-04-21T14:59:25.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 173.908
      },
      {
        dtInputTime: '2021-04-21T14:59:34.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 174.912
      },
      {
        dtInputTime: '2021-04-21T14:59:44.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 175.094
      },
      {
        dtInputTime: '2021-04-21T14:59:53.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 175.913
      },
      {
        dtInputTime: '2021-04-21T15:00:02.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 175.533
      },
      {
        dtInputTime: '2021-04-21T15:00:11.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 175.991
      },
      {
        dtInputTime: '2021-04-21T15:00:20.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 177.834
      },
      {
        dtInputTime: '2021-04-21T15:00:29.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 176.862
      },
      {
        dtInputTime: '2021-04-21T15:00:48.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 135.201
      },
      {
        dtInputTime: '2021-04-21T15:00:56.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 190.19
      },
      {
        dtInputTime: '2021-04-21T15:01:06.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 173.024
      },
      {
        dtInputTime: '2021-04-21T15:01:15.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 169.983
      },
      {
        dtInputTime: '2021-04-21T15:01:24.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 183.784
      },
      {
        dtInputTime: '2021-04-21T15:01:33.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 169.122
      },
      {
        dtInputTime: '2021-04-21T15:01:43.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 171.795
      },
      {
        dtInputTime: '2021-04-21T15:01:52.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 168.231
      },
      {
        dtInputTime: '2021-04-21T15:02:09.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 199.883
      },
      {
        dtInputTime: '2021-04-21T15:02:17.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 196.222
      },
      {
        dtInputTime: '2021-04-21T15:02:26.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 183.343
      },
      {
        dtInputTime: '2021-04-21T15:02:34.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 184.043
      },
      {
        dtInputTime: '2021-04-21T15:02:43.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 179.817
      },
      {
        dtInputTime: '2021-04-21T15:02:52.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 174.783
      },
      {
        dtInputTime: '2021-04-21T15:03:01.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 176.719
      },
      {
        dtInputTime: '2021-04-21T15:03:10.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 185.448
      },
      {
        dtInputTime: '2021-04-21T15:03:27.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 166.549
      },
      {
        dtInputTime: '2021-04-21T15:03:35.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 182.609
      },
      {
        dtInputTime: '2021-04-21T15:03:44.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 195.28
      },
      {
        dtInputTime: '2021-04-21T15:03:52.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 188.742
      },
      {
        dtInputTime: '2021-04-21T15:04:00.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 189.035
      },
      {
        dtInputTime: '2021-04-21T15:04:08.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 212.189
      },
      {
        dtInputTime: '2021-04-21T15:04:16.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 191.52
      },
      {
        dtInputTime: '2021-04-21T15:04:25.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 191.555
      },
      {
        dtInputTime: '2021-04-21T15:04:40.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 198.545
      },
      {
        dtInputTime: '2021-04-21T15:04:48.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 190.907
      },
      {
        dtInputTime: '2021-04-21T15:04:57.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 193.163
      },
      {
        dtInputTime: '2021-04-21T15:05:10.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 119.239
      },
      {
        dtInputTime: '2021-04-21T15:05:25.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 109.971
      },
      {
        dtInputTime: '2021-04-21T15:05:39.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 110.581
      },
      {
        dtInputTime: '2021-04-21T15:05:59.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 79.032
      },
      {
        dtInputTime: '2021-04-21T15:07:23.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 19.203
      },
      {
        dtInputTime: '2021-04-21T15:07:38.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 188.416
      },
      {
        dtInputTime: '2021-04-21T15:08:15.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 43.537
      },
      {
        dtInputTime: '2021-04-21T15:08:24.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 173.162
      },
      {
        dtInputTime: '2021-04-21T15:08:33.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 176.904
      },
      {
        dtInputTime: '2021-04-21T15:08:42.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 172.541
      },
      {
        dtInputTime: '2021-04-21T15:08:52.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 175.671
      },
      {
        dtInputTime: '2021-04-21T15:09:01.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 173.227
      },
      {
        dtInputTime: '2021-04-21T15:09:10.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 174.786
      },
      {
        dtInputTime: '2021-04-21T15:09:32.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 112.914
      },
      {
        dtInputTime: '2021-04-21T15:09:41.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 176.426
      },
      {
        dtInputTime: '2021-04-21T15:09:50.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 174.822
      },
      {
        dtInputTime: '2021-04-21T15:09:59.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 177.393
      },
      {
        dtInputTime: '2021-04-21T15:10:10.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 156.043
      },
      {
        dtInputTime: '2021-04-21T15:10:24.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 108.699
      },
      {
        dtInputTime: '2021-04-21T15:10:40.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 105.214
      },
      {
        dtInputTime: '2021-04-21T15:10:54.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 110.11
      },
      {
        dtInputTime: '2021-04-21T15:11:20.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 109.68
      },
      {
        dtInputTime: '2021-04-21T15:39:20.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 144.536
      },
      {
        dtInputTime: '2021-04-21T15:39:31.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 145.233
      },
      {
        dtInputTime: '2021-04-21T15:39:42.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 145.366
      },
      {
        dtInputTime: '2021-04-21T15:39:53.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 145.41
      },
      {
        dtInputTime: '2021-04-21T15:40:04.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 145.327
      },
      {
        dtInputTime: '2021-04-21T15:40:15.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 145.196
      },
      {
        dtInputTime: '2021-04-21T15:40:26.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 145.745
      },
      {
        dtInputTime: '2021-04-21T15:40:37.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 144.764
      },
      {
        dtInputTime: '2021-04-21T15:40:56.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 145.057
      },
      {
        dtInputTime: '2021-04-21T15:41:07.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 145.326
      },
      {
        dtInputTime: '2021-04-21T15:41:18.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 145.072
      },
      {
        dtInputTime: '2021-04-21T15:41:29.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 145.649
      },
      {
        dtInputTime: '2021-04-21T15:41:40.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 144.831
      },
      {
        dtInputTime: '2021-04-21T15:41:51.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 145.364
      },
      {
        dtInputTime: '2021-04-21T15:42:02.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 145.168
      },
      {
        dtInputTime: '2021-04-21T15:42:13.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 145.142
      },
      {
        dtInputTime: '2021-04-21T15:42:33.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 144.858
      },
      {
        dtInputTime: '2021-04-21T15:42:44.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 145.429
      },
      {
        dtInputTime: '2021-04-21T15:42:55.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 144.807
      },
      {
        dtInputTime: '2021-04-21T15:43:06.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 145.289
      },
      {
        dtInputTime: '2021-04-21T15:43:17.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 145.141
      },
      {
        dtInputTime: '2021-04-21T15:43:28.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 145.017
      },
      {
        dtInputTime: '2021-04-21T15:43:39.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 145.045
      },
      {
        dtInputTime: '2021-04-21T15:43:50.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 145.188
      },
      {
        dtInputTime: '2021-04-21T15:44:09.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 145.697
      },
      {
        dtInputTime: '2021-04-21T15:44:20.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 145.204
      },
      {
        dtInputTime: '2021-04-21T15:44:31.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 145.013
      },
      {
        dtInputTime: '2021-04-21T15:44:42.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 144.451
      },
      {
        dtInputTime: '2021-04-21T15:44:53.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 145.198
      },
      {
        dtInputTime: '2021-04-21T15:45:04.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 145.51
      },
      {
        dtInputTime: '2021-04-21T15:45:15.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 145.204
      },
      {
        dtInputTime: '2021-04-21T15:45:26.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 145.302
      },
      {
        dtInputTime: '2021-04-21T15:45:46.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 144.787
      },
      {
        dtInputTime: '2021-04-21T15:45:57.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 145.219
      },
      {
        dtInputTime: '2021-04-21T15:46:08.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 145.305
      },
      {
        dtInputTime: '2021-04-21T15:46:19.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 145.509
      },
      {
        dtInputTime: '2021-04-21T15:46:30.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 145.519
      },
      {
        dtInputTime: '2021-04-21T15:46:41.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 145.255
      },
      {
        dtInputTime: '2021-04-21T15:46:52.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 145.058
      },
      {
        dtInputTime: '2021-04-21T15:47:03.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 144.49
      },
      {
        dtInputTime: '2021-04-21T15:47:22.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 144.918
      },
      {
        dtInputTime: '2021-04-21T15:47:33.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 144.347
      },
      {
        dtInputTime: '2021-04-21T15:47:44.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 145.022
      },
      {
        dtInputTime: '2021-04-21T15:47:55.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 145.298
      },
      {
        dtInputTime: '2021-04-21T15:48:06.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 144.709
      },
      {
        dtInputTime: '2021-04-21T15:48:17.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 145.486
      },
      {
        dtInputTime: '2021-04-21T15:48:29.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 144.906
      },
      {
        dtInputTime: '2021-04-21T15:48:40.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 145.367
      },
      {
        dtInputTime: '2021-04-21T15:48:59.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 145.003
      },
      {
        dtInputTime: '2021-04-21T15:49:10.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 144.749
      },
      {
        dtInputTime: '2021-04-21T15:49:21.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 145.482
      },
      {
        dtInputTime: '2021-04-21T15:49:32.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 144.86
      },
      {
        dtInputTime: '2021-04-21T15:49:43.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 145.615
      },
      {
        dtInputTime: '2021-04-21T15:49:54.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 145.227
      },
      {
        dtInputTime: '2021-04-21T15:50:05.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 145.605
      },
      {
        dtInputTime: '2021-04-21T15:50:16.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 145.177
      },
      {
        dtInputTime: '2021-04-21T15:50:36.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 145.117
      },
      {
        dtInputTime: '2021-04-21T15:50:47.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 145.307
      },
      {
        dtInputTime: '2021-04-21T15:50:58.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 144.747
      },
      {
        dtInputTime: '2021-04-21T15:51:09.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 145.037
      },
      {
        dtInputTime: '2021-04-21T15:51:20.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 144.617
      },
      {
        dtInputTime: '2021-04-21T15:51:31.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 145.274
      },
      {
        dtInputTime: '2021-04-21T15:51:42.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 145.199
      },
      {
        dtInputTime: '2021-04-21T15:51:53.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 145.654
      },
      {
        dtInputTime: '2021-04-21T15:52:12.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 145.094
      },
      {
        dtInputTime: '2021-04-21T15:52:23.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 145.433
      },
      {
        dtInputTime: '2021-04-21T15:52:34.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 145.152
      },
      {
        dtInputTime: '2021-04-21T15:52:45.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 144.842
      },
      {
        dtInputTime: '2021-04-21T15:52:56.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 145.484
      },
      {
        dtInputTime: '2021-04-21T15:53:07.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 145.46
      },
      {
        dtInputTime: '2021-04-21T15:53:18.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 145.22
      },
      {
        dtInputTime: '2021-04-21T15:53:29.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 144.833
      },
      {
        dtInputTime: '2021-04-21T15:53:49.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 145.053
      },
      {
        dtInputTime: '2021-04-21T15:54:00.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 145.505
      },
      {
        dtInputTime: '2021-04-21T15:54:11.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 145.065
      },
      {
        dtInputTime: '2021-04-21T15:54:22.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 145.703
      },
      {
        dtInputTime: '2021-04-21T15:54:33.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 144.886
      },
      {
        dtInputTime: '2021-04-21T15:54:44.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 145.08
      },
      {
        dtInputTime: '2021-04-21T15:54:55.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 145.165
      },
      {
        dtInputTime: '2021-04-21T15:55:06.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 145.432
      },
      {
        dtInputTime: '2021-04-21T15:55:25.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 145.272
      },
      {
        dtInputTime: '2021-04-21T15:55:36.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 144.909
      },
      {
        dtInputTime: '2021-04-21T15:55:47.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 143.447
      },
      {
        dtInputTime: '2021-04-21T15:56:03.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 101.743
      },
      {
        dtInputTime: '2021-04-21T15:56:05.000Z',
        sNodeId: '192.168.0.20',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 96.9
      },
      {
        dtInputTime: '2021-04-21T15:56:19.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 97.484
      },
      {
        dtInputTime: '2021-04-21T15:56:21.000Z',
        sNodeId: '192.168.0.20',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 97.809
      },
      {
        dtInputTime: '2021-04-21T15:56:36.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 97.789
      },
      {
        dtInputTime: '2021-04-21T15:56:38.000Z',
        sNodeId: '192.168.0.20',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 97.192
      },
      {
        dtInputTime: '2021-04-21T15:56:52.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 97.571
      },
      {
        dtInputTime: '2021-04-21T15:56:54.000Z',
        sNodeId: '192.168.0.20',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 97.44
      },
      {
        dtInputTime: '2021-04-21T15:57:08.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 97.586
      },
      {
        dtInputTime: '2021-04-21T15:57:10.000Z',
        sNodeId: '192.168.0.20',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 99.515
      },
      {
        dtInputTime: '2021-04-21T15:57:25.000Z',
        sNodeId: '192.168.0.20',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 109.252
      },
      {
        dtInputTime: '2021-04-21T15:57:37.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 97.208
      },
      {
        dtInputTime: '2021-04-21T15:57:41.000Z',
        sNodeId: '192.168.0.20',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 97.399
      },
      {
        dtInputTime: '2021-04-21T15:57:53.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 97.334
      },
      {
        dtInputTime: '2021-04-21T15:57:58.000Z',
        sNodeId: '192.168.0.20',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 97.48
      },
      {
        dtInputTime: '2021-04-21T15:58:08.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 108.091
      },
      {
        dtInputTime: '2021-04-21T15:58:24.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 97.9
      },
      {
        dtInputTime: '2021-04-21T15:58:26.000Z',
        sNodeId: '192.168.0.20',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 97.659
      },
      {
        dtInputTime: '2021-04-21T15:58:41.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 97.506
      },
      {
        dtInputTime: '2021-04-21T15:58:42.000Z',
        sNodeId: '192.168.0.20',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 97.545
      },
      {
        dtInputTime: '2021-04-21T15:58:57.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 97.7
      },
      {
        dtInputTime: '2021-04-21T15:58:59.000Z',
        sNodeId: '192.168.0.20',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 97.592
      },
      {
        dtInputTime: '2021-04-21T15:59:13.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 97.747
      },
      {
        dtInputTime: '2021-04-21T15:59:15.000Z',
        sNodeId: '192.168.0.20',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 97.64
      },
      {
        dtInputTime: '2021-04-21T15:59:30.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 97.679
      },
      {
        dtInputTime: '2021-04-21T15:59:31.000Z',
        sNodeId: '192.168.0.20',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 98.839
      },
      {
        dtInputTime: '2021-04-21T15:59:46.000Z',
        sNodeId: '192.168.0.20',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 107.295
      },
      {
        dtInputTime: '2021-04-21T15:59:58.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 97.394
      },
      {
        dtInputTime: '2021-04-21T16:00:03.000Z',
        sNodeId: '192.168.0.20',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 97.492
      },
      {
        dtInputTime: '2021-04-21T16:00:14.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 97.64
      },
      {
        dtInputTime: '2021-04-21T16:00:19.000Z',
        sNodeId: '192.168.0.20',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 97.554
      },
      {
        dtInputTime: '2021-04-21T16:00:29.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 108.1
      },
      {
        dtInputTime: '2021-04-21T16:00:45.000Z',
        sNodeId: '192.168.0.20',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 99.448
      },
      {
        dtInputTime: '2021-04-21T16:00:47.000Z',
        sNodeId: '192.168.0.20',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 97.675
      },
      {
        dtInputTime: '2021-04-21T16:12:59.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 328.111
      },
      {
        dtInputTime: '2021-04-21T16:13:04.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 330.711
      },
      {
        dtInputTime: '2021-04-21T16:13:09.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 328.619
      },
      {
        dtInputTime: '2021-04-21T16:13:14.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 329.212
      },
      {
        dtInputTime: '2021-04-21T16:13:19.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 329.396
      },
      {
        dtInputTime: '2021-04-21T16:13:24.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 329.076
      },
      {
        dtInputTime: '2021-04-21T16:13:28.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 332.628
      },
      {
        dtInputTime: '2021-04-21T16:13:33.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 332.428
      },
      {
        dtInputTime: '2021-04-21T16:13:44.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 252.379
      },
      {
        dtInputTime: '2021-04-21T16:13:52.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 156.428
      },
      {
        dtInputTime: '2021-04-21T16:13:55.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 157.341
      },
      {
        dtInputTime: '2021-04-21T16:14:02.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 156.916
      },
      {
        dtInputTime: '2021-04-21T16:14:05.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 157.583
      },
      {
        dtInputTime: '2021-04-21T16:14:13.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 156.926
      },
      {
        dtInputTime: '2021-04-21T16:14:15.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 157.202
      },
      {
        dtInputTime: '2021-04-21T16:14:23.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 157.015
      },
      {
        dtInputTime: '2021-04-21T16:14:25.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 157.025
      },
      {
        dtInputTime: '2021-04-21T16:14:33.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 156.63
      },
      {
        dtInputTime: '2021-04-21T16:14:35.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 156.893
      },
      {
        dtInputTime: '2021-04-21T16:14:43.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 156.635
      },
      {
        dtInputTime: '2021-04-21T16:14:46.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 157.092
      },
      {
        dtInputTime: '2021-04-21T16:14:53.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 156.614
      },
      {
        dtInputTime: '2021-04-21T16:14:56.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 156.609
      },
      {
        dtInputTime: '2021-04-21T16:15:01.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 214.309
      },
      {
        dtInputTime: '2021-04-21T16:15:11.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 211.206
      },
      {
        dtInputTime: '2021-04-21T16:15:19.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 154.991
      },
      {
        dtInputTime: '2021-04-21T16:15:22.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 158.385
      },
      {
        dtInputTime: '2021-04-21T16:15:30.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 155.365
      },
      {
        dtInputTime: '2021-04-21T16:15:32.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 158.121
      },
      {
        dtInputTime: '2021-04-21T16:15:40.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 155.157
      },
      {
        dtInputTime: '2021-04-21T16:15:42.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 157.093
      },
      {
        dtInputTime: '2021-04-21T16:15:50.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 155.369
      },
      {
        dtInputTime: '2021-04-21T16:15:52.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 158.137
      },
      {
        dtInputTime: '2021-04-21T16:16:01.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 155.079
      },
      {
        dtInputTime: '2021-04-21T16:16:02.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 157.513
      },
      {
        dtInputTime: '2021-04-21T16:16:11.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 154.952
      },
      {
        dtInputTime: '2021-04-21T16:16:12.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 157.742
      },
      {
        dtInputTime: '2021-04-21T16:16:21.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 154.864
      },
      {
        dtInputTime: '2021-04-21T16:16:22.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 157.796
      },
      {
        dtInputTime: '2021-04-21T16:16:28.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 224.747
      },
      {
        dtInputTime: '2021-04-21T16:16:37.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 237.825
      },
      {
        dtInputTime: '2021-04-21T16:16:47.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 155.366
      },
      {
        dtInputTime: '2021-04-21T16:16:48.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 157.257
      },
      {
        dtInputTime: '2021-04-21T16:16:58.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 155.233
      },
      {
        dtInputTime: '2021-04-21T16:16:58.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 157.416
      },
      {
        dtInputTime: '2021-04-21T16:17:08.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 156.528
      },
      {
        dtInputTime: '2021-04-21T16:17:08.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 155.476
      },
      {
        dtInputTime: '2021-04-21T16:17:21.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 125.852
      },
      {
        dtInputTime: '2021-04-21T16:17:21.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 125.44
      },
      {
        dtInputTime: '2021-04-21T16:17:31.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 155.884
      },
      {
        dtInputTime: '2021-04-21T16:17:31.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 151.968
      },
      {
        dtInputTime: '2021-04-21T16:17:41.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 151.856
      },
      {
        dtInputTime: '2021-04-21T16:17:42.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 144.999
      },
      {
        dtInputTime: '2021-04-21T16:17:52.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 152.062
      },
      {
        dtInputTime: '2021-04-21T16:17:52.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 159.11
      },
      {
        dtInputTime: '2021-04-21T16:17:59.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 239.731
      },
      {
        dtInputTime: '2021-04-21T16:18:14.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 197.114
      },
      {
        dtInputTime: '2021-04-21T16:18:24.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 155.793
      },
      {
        dtInputTime: '2021-04-21T16:18:24.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 156.737
      },
      {
        dtInputTime: '2021-04-21T16:18:34.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 156.99
      },
      {
        dtInputTime: '2021-04-21T16:18:34.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 156.124
      },
      {
        dtInputTime: '2021-04-21T16:18:44.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 155.88
      },
      {
        dtInputTime: '2021-04-21T16:18:45.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 146.989
      },
      {
        dtInputTime: '2021-04-21T16:18:55.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 154.005
      },
      {
        dtInputTime: '2021-04-21T16:18:56.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 151.783
      },
      {
        dtInputTime: '2021-04-21T16:19:05.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 149.056
      },
      {
        dtInputTime: '2021-04-21T16:19:06.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 157.103
      },
      {
        dtInputTime: '2021-04-21T16:19:16.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 157.34
      },
      {
        dtInputTime: '2021-04-21T16:19:16.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 155.273
      },
      {
        dtInputTime: '2021-04-21T16:19:26.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 157.183
      },
      {
        dtInputTime: '2021-04-21T16:19:27.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 149.455
      },
      {
        dtInputTime: '2021-04-21T16:19:35.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 172.368
      },
      {
        dtInputTime: '2021-04-21T16:19:48.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 185.395
      },
      {
        dtInputTime: '2021-04-21T16:19:58.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 167.809
      },
      {
        dtInputTime: '2021-04-21T16:20:02.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 156.677
      },
      {
        dtInputTime: '2021-04-21T16:20:08.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 156.95
      },
      {
        dtInputTime: '2021-04-21T16:20:12.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 155.605
      },
      {
        dtInputTime: '2021-04-21T16:20:18.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 157.111
      },
      {
        dtInputTime: '2021-04-21T16:20:23.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 157.73
      },
      {
        dtInputTime: '2021-04-21T16:20:29.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 150.301
      },
      {
        dtInputTime: '2021-04-21T16:20:33.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 152.539
      },
      {
        dtInputTime: '2021-04-21T16:20:39.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 154.685
      },
      {
        dtInputTime: '2021-04-21T16:20:44.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 147.6
      },
      {
        dtInputTime: '2021-04-21T16:20:50.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 156.007
      },
      {
        dtInputTime: '2021-04-21T16:20:54.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 156.582
      },
      {
        dtInputTime: '2021-04-21T16:21:01.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 143.424
      },
      {
        dtInputTime: '2021-04-21T16:21:05.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 152.32
      },
      {
        dtInputTime: '2021-04-21T16:21:16.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 140.877
      },
      {
        dtInputTime: '2021-04-21T16:21:23.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 191.418
      },
      {
        dtInputTime: '2021-04-21T16:21:32.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 184.748
      },
      {
        dtInputTime: '2021-04-21T16:21:40.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 157.478
      },
      {
        dtInputTime: '2021-04-21T16:21:42.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 155.552
      },
      {
        dtInputTime: '2021-04-21T16:21:50.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 147.94
      },
      {
        dtInputTime: '2021-04-21T16:21:52.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 155.523
      },
      {
        dtInputTime: '2021-04-21T16:22:03.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 131.034
      },
      {
        dtInputTime: '2021-04-21T16:22:03.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 144.401
      },
      {
        dtInputTime: '2021-04-21T16:22:13.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 157.3
      },
      {
        dtInputTime: '2021-04-21T16:22:14.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 155.179
      },
      {
        dtInputTime: '2021-04-21T16:22:23.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 156.569
      },
      {
        dtInputTime: '2021-04-21T16:22:24.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 157.274
      },
      {
        dtInputTime: '2021-04-21T16:22:33.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 156.191
      },
      {
        dtInputTime: '2021-04-21T16:22:34.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 155.64
      },
      {
        dtInputTime: '2021-04-21T16:22:43.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 161.66
      },
      {
        dtInputTime: '2021-04-21T16:22:53.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 157.653
      },
      {
        dtInputTime: '2021-04-21T16:22:58.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 158.568
      },
      {
        dtInputTime: '2021-04-21T16:23:07.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 172.951
      },
      {
        dtInputTime: '2021-04-21T16:23:17.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 157.247
      },
      {
        dtInputTime: '2021-04-21T16:23:18.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 156.452
      },
      {
        dtInputTime: '2021-04-21T16:23:27.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 154.316
      },
      {
        dtInputTime: '2021-04-21T16:23:28.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 157.967
      },
      {
        dtInputTime: '2021-04-21T16:23:38.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 150.042
      },
      {
        dtInputTime: '2021-04-21T16:23:40.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 133.773
      },
      {
        dtInputTime: '2021-04-21T16:23:46.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 190.518
      },
      {
        dtInputTime: '2021-04-21T16:23:52.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 131.31
      },
      {
        dtInputTime: '2021-04-21T16:23:59.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 125.636
      },
      {
        dtInputTime: '2021-04-21T16:24:05.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 124.495
      },
      {
        dtInputTime: '2021-04-21T16:24:09.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 161.916
      },
      {
        dtInputTime: '2021-04-21T16:24:16.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 146.14
      },
      {
        dtInputTime: '2021-04-21T16:24:18.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 174.398
      },
      {
        dtInputTime: '2021-04-21T16:24:25.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 229.236
      },
      {
        dtInputTime: '2021-04-21T16:24:32.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 227.129
      },
      {
        dtInputTime: '2021-04-21T16:24:41.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 178.102
      },
      {
        dtInputTime: '2021-04-21T16:24:46.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 140.734
      },
      {
        dtInputTime: '2021-04-21T16:24:53.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 143.183
      },
      {
        dtInputTime: '2021-04-21T16:24:57.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 148.998
      },
      {
        dtInputTime: '2021-04-21T16:25:06.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 120.152
      },
      {
        dtInputTime: '2021-04-21T16:25:10.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 120.758
      },
      {
        dtInputTime: '2021-04-21T16:25:18.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 131.634
      },
      {
        dtInputTime: '2021-04-21T16:25:21.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 145.786
      },
      {
        dtInputTime: '2021-04-21T16:25:28.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 156.57
      },
      {
        dtInputTime: '2021-04-21T16:25:31.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 156.206
      },
      {
        dtInputTime: '2021-04-21T16:25:38.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 155.532
      },
      {
        dtInputTime: '2021-04-21T16:25:41.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 158.194
      },
      {
        dtInputTime: '2021-04-21T16:25:49.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 156.648
      },
      {
        dtInputTime: '2021-04-21T16:25:52.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 157.499
      },
      {
        dtInputTime: '2021-04-21T16:26:02.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 157.54
      },
      {
        dtInputTime: '2021-04-21T16:26:22.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 110.836
      },
      {
        dtInputTime: '2021-04-21T16:26:32.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 159.229
      },
      {
        dtInputTime: '2021-04-21T16:26:33.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 157.177
      },
      {
        dtInputTime: '2021-04-21T16:26:43.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 156.408
      },
      {
        dtInputTime: '2021-04-21T16:26:43.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 157.315
      },
      {
        dtInputTime: '2021-04-21T16:26:53.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 161.743
      },
      {
        dtInputTime: '2021-04-21T16:26:53.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 152.048
      },
      {
        dtInputTime: '2021-04-21T16:27:03.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 159.026
      },
      {
        dtInputTime: '2021-04-21T16:27:05.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 130.882
      },
      {
        dtInputTime: '2021-04-21T16:27:14.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 142.188
      },
      {
        dtInputTime: '2021-04-21T16:27:20.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 109.909
      },
      {
        dtInputTime: '2021-04-21T16:27:25.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 149.444
      },
      {
        dtInputTime: '2021-04-21T16:27:31.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 138.599
      },
      {
        dtInputTime: '2021-04-21T16:27:35.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 154.289
      },
      {
        dtInputTime: '2021-04-21T16:27:42.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 156.574
      },
      {
        dtInputTime: '2021-04-21T16:27:44.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 179.522
      },
      {
        dtInputTime: '2021-04-21T16:39:10.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 320.918
      },
      {
        dtInputTime: '2021-04-21T16:39:16.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 235.415
      },
      {
        dtInputTime: '2021-04-21T16:39:23.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 155.819
      },
      {
        dtInputTime: '2021-04-21T16:39:27.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 157.113
      },
      {
        dtInputTime: '2021-04-21T16:39:34.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 156.329
      },
      {
        dtInputTime: '2021-04-21T16:39:37.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 156.877
      },
      {
        dtInputTime: '2021-04-21T16:39:44.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 156.66
      },
      {
        dtInputTime: '2021-04-21T16:39:47.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 157.366
      },
      {
        dtInputTime: '2021-04-21T16:39:54.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 157.02
      },
      {
        dtInputTime: '2021-04-21T16:39:57.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 157.235
      },
      {
        dtInputTime: '2021-04-21T16:40:04.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 155.586
      },
      {
        dtInputTime: '2021-04-21T16:40:07.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 156.603
      },
      {
        dtInputTime: '2021-04-21T16:40:15.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 156.233
      },
      {
        dtInputTime: '2021-04-21T16:40:18.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 156.483
      },
      {
        dtInputTime: '2021-04-21T16:40:22.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 203.582
      },
      {
        dtInputTime: '2021-04-21T16:40:30.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 202.512
      },
      {
        dtInputTime: '2021-04-21T16:40:35.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 200.67
      },
      {
        dtInputTime: '2021-04-21T16:40:42.000Z',
        sNodeId: '192.168.0.10',
        sType: 'NVIDIA',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 209.641
      },
      {
        dtInputTime: '2021-04-21T16:40:50.000Z',
        sNodeId: '192.168.0.10',
        sType: 'AMD',
        sGroup: 'MOREH1',
        sDataName: 'IMAGE/SEC',
        nDataValue: 156.623
      }
    ]
  }
};
