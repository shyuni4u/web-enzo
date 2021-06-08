import React, { useState, useEffect } from 'react';
import Wrapper from '../../../components/organisms/StorybookWrapper';
import moment from 'moment';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Table, TableProps, TableHeaderProps } from '../../../components/atoms/Table';
import { PaginationProps } from '../../../components/atoms/Pagination';

export default {
  title: 'Component/Atoms/Table',
  component: Table
} as Meta;

const BasicTemplate: Story<TableProps> = (args) => {
  return (
    <Wrapper>
      <Table {...args} ref={undefined}>
        <caption style={{ captionSide: 'bottom', textAlign: 'right' }}>Test table</caption>
        <thead>
          <tr>
            <th>#</th>
            <th>Class</th>
            <th>Talent</th>
            <th>Content</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>abc</td>
            <td>ㄷ파멸</td>
            <td>딜러</td>
            <td>2021.01.04</td>
          </tr>
          <tr>
            <td>2</td>
            <td>bac</td>
            <td>ㄴ수호</td>
            <td>탱커</td>
            <td>2021.01.31</td>
          </tr>
          <tr>
            <td>3</td>
            <td>cab</td>
            <td>ㄱ양조</td>
            <td>탱커</td>
            <td>2021.01.06</td>
          </tr>
          <tr>
            <td>4</td>
            <td>dfsd</td>
            <td>ㄹ보기</td>
            <td>딜러</td>
            <td>2021.01.05</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={4}>Total</td>
            <td>321,231</td>
          </tr>
        </tfoot>
      </Table>
    </Wrapper>
  );
};
export const Basic = BasicTemplate.bind({});
Basic.args = {
  size: 'medium',
  bordered: false,
  borderless: false,
  hover: true,
  striped: true
};

const dummy = [
  {
    dtInputTime: '2021-02-03T04:23:00.000Z',
    sNodeId: '10.10.16.70',
    sType: '0001',
    sSignal:
      '[{"card": "Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]", "values": {"usaged": 0.000, "temp_gpu": 33.021, "temp_mem": 44.000, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 0}, {"card": "Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]", "values": {"usaged": 0.000, "temp_gpu": 32.915, "temp_mem": 43.830, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 1}, {"card": "Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]", "values": {"usaged": 0.000, "temp_gpu": 31.638, "temp_mem": 44.000, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 2}, {"card": "Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]", "values": {"usaged": 0.000, "temp_gpu": 31.617, "temp_mem": 45.915, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 3}, {"card": "Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]", "values": {"usaged": 0.000, "temp_gpu": 33.000, "temp_mem": 44.000, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 4}, {"card": "Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]", "values": {"usaged": 0.000, "temp_gpu": 31.277, "temp_mem": 44.000, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 5}, {"card": "Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]", "values": {"usaged": 0.000, "temp_gpu": 32.043, "temp_mem": 44.000, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 6}, {"card": "Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]", "values": {"usaged": 0.000, "temp_gpu": 30.404, "temp_mem": 44.426, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 7}]'
  },
  {
    dtInputTime: '2021-02-03T04:24:00.000Z',
    sNodeId: '10.10.16.70',
    sType: '0001',
    sSignal:
      '[{"card": "Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]", "values": {"usaged": 0.000, "temp_gpu": 33.020, "temp_mem": 44.000, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 0}, {"card": "Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]", "values": {"usaged": 0.000, "temp_gpu": 32.980, "temp_mem": 43.959, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 1}, {"card": "Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]", "values": {"usaged": 0.000, "temp_gpu": 31.816, "temp_mem": 44.000, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 2}, {"card": "Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]", "values": {"usaged": 0.000, "temp_gpu": 31.837, "temp_mem": 46.000, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 3}, {"card": "Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]", "values": {"usaged": 0.000, "temp_gpu": 33.041, "temp_mem": 44.000, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 4}, {"card": "Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]", "values": {"usaged": 0.000, "temp_gpu": 31.633, "temp_mem": 44.000, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 5}, {"card": "Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]", "values": {"usaged": 0.000, "temp_gpu": 32.143, "temp_mem": 44.000, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 6}, {"card": "Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]", "values": {"usaged": 0.000, "temp_gpu": 30.592, "temp_mem": 45.061, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 7}]'
  },
  {
    dtInputTime: '2021-02-03T04:25:00.000Z',
    sNodeId: '10.10.16.70',
    sType: '0001',
    sSignal:
      '[{"card": "Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]", "values": {"usaged": 0.000, "temp_gpu": 33.100, "temp_mem": 44.000, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 0}, {"card": "Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]", "values": {"usaged": 0.000, "temp_gpu": 33.000, "temp_mem": 44.000, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 1}, {"card": "Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]", "values": {"usaged": 0.000, "temp_gpu": 31.983, "temp_mem": 44.000, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 2}, {"card": "Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]", "values": {"usaged": 0.000, "temp_gpu": 31.967, "temp_mem": 46.000, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 3}, {"card": "Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]", "values": {"usaged": 0.000, "temp_gpu": 33.117, "temp_mem": 44.000, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 4}, {"card": "Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]", "values": {"usaged": 0.000, "temp_gpu": 31.900, "temp_mem": 44.033, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 5}, {"card": "Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]", "values": {"usaged": 0.000, "temp_gpu": 32.317, "temp_mem": 44.067, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 6}, {"card": "Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]", "values": {"usaged": 0.000, "temp_gpu": 30.833, "temp_mem": 45.733, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 7}]'
  },
  {
    dtInputTime: '2021-02-03T04:26:00.000Z',
    sNodeId: '10.10.16.70',
    sType: '0001',
    sSignal:
      '[{"card": "Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]", "values": {"usaged": 0.000, "temp_gpu": 33.167, "temp_mem": 44.000, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 0}, {"card": "Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]", "values": {"usaged": 0.000, "temp_gpu": 33.000, "temp_mem": 44.000, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 1}, {"card": "Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]", "values": {"usaged": 0.000, "temp_gpu": 32.000, "temp_mem": 44.067, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 2}, {"card": "Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]", "values": {"usaged": 0.000, "temp_gpu": 31.983, "temp_mem": 46.000, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 3}, {"card": "Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]", "values": {"usaged": 0.000, "temp_gpu": 33.200, "temp_mem": 44.633, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 4}, {"card": "Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]", "values": {"usaged": 0.000, "temp_gpu": 31.867, "temp_mem": 44.533, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 5}, {"card": "Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]", "values": {"usaged": 0.000, "temp_gpu": 32.600, "temp_mem": 44.400, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 6}, {"card": "Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]", "values": {"usaged": 0.000, "temp_gpu": 30.967, "temp_mem": 45.967, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 7}]'
  },
  {
    dtInputTime: '2021-02-03T04:26:59.000Z',
    sNodeId: '10.10.16.70',
    sType: '0001',
    sSignal:
      '[{"card": "Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]", "values": {"usaged": 0.000, "temp_gpu": 33.373, "temp_mem": 44.000, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 0}, {"card": "Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]", "values": {"usaged": 0.000, "temp_gpu": 33.000, "temp_mem": 44.000, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 1}, {"card": "Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]", "values": {"usaged": 0.000, "temp_gpu": 32.000, "temp_mem": 44.102, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 2}, {"card": "Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]", "values": {"usaged": 0.000, "temp_gpu": 32.000, "temp_mem": 46.000, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 3}, {"card": "Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]", "values": {"usaged": 0.000, "temp_gpu": 33.237, "temp_mem": 45.017, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 4}, {"card": "Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]", "values": {"usaged": 0.000, "temp_gpu": 31.915, "temp_mem": 45.424, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 5}, {"card": "Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]", "values": {"usaged": 0.000, "temp_gpu": 32.661, "temp_mem": 45.153, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 6}, {"card": "Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]", "values": {"usaged": 0.000, "temp_gpu": 30.898, "temp_mem": 46.000, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 7}]'
  },
  {
    dtInputTime: '2021-02-03T04:27:59.000Z',
    sNodeId: '10.10.16.70',
    sType: '0001',
    sSignal:
      '[{"card": "Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]", "values": {"usaged": 0.000, "temp_gpu": 33.305, "temp_mem": 44.000, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 0}, {"card": "Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]", "values": {"usaged": 0.000, "temp_gpu": 33.000, "temp_mem": 44.000, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 1}, {"card": "Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]", "values": {"usaged": 0.000, "temp_gpu": 32.000, "temp_mem": 44.136, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 2}, {"card": "Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]", "values": {"usaged": 0.000, "temp_gpu": 32.017, "temp_mem": 46.000, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 3}, {"card": "Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]", "values": {"usaged": 0.000, "temp_gpu": 33.169, "temp_mem": 45.322, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 4}, {"card": "Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]", "values": {"usaged": 0.000, "temp_gpu": 31.915, "temp_mem": 45.356, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 5}, {"card": "Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]", "values": {"usaged": 0.000, "temp_gpu": 32.661, "temp_mem": 45.017, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 6}, {"card": "Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]", "values": {"usaged": 0.000, "temp_gpu": 30.966, "temp_mem": 46.000, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 7}]'
  },
  {
    dtInputTime: '2021-02-03T04:28:59.000Z',
    sNodeId: '10.10.16.70',
    sType: '0001',
    sSignal:
      '[{"card": "Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]", "values": {"usaged": 0.000, "temp_gpu": 33.339, "temp_mem": 44.000, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 0}, {"card": "Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]", "values": {"usaged": 0.000, "temp_gpu": 33.000, "temp_mem": 44.000, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 1}, {"card": "Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]", "values": {"usaged": 0.000, "temp_gpu": 32.000, "temp_mem": 44.034, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 2}, {"card": "Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]", "values": {"usaged": 0.000, "temp_gpu": 32.000, "temp_mem": 46.000, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 3}, {"card": "Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]", "values": {"usaged": 0.000, "temp_gpu": 33.153, "temp_mem": 44.881, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 4}, {"card": "Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]", "values": {"usaged": 0.000, "temp_gpu": 31.847, "temp_mem": 44.678, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 5}, {"card": "Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]", "values": {"usaged": 0.000, "temp_gpu": 32.627, "temp_mem": 44.678, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 6}, {"card": "Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]", "values": {"usaged": 0.000, "temp_gpu": 30.983, "temp_mem": 46.000, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 7}]'
  },
  {
    dtInputTime: '2021-02-03T04:23:00.000Z',
    sNodeId: '10.10.16.71',
    sType: '0002',
    sSignal:
      '[{"card": "Tesla V100S-PCIE-32GB", "values": {"usaged": 0.000, "temp_gpu": 25.000, "temp_mem": 23.000, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 0}, {"card": "Tesla V100S-PCIE-32GB", "values": {"usaged": 0.000, "temp_gpu": 24.191, "temp_mem": 22.021, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 1}, {"card": "Tesla V100S-PCIE-32GB", "values": {"usaged": 0.000, "temp_gpu": 25.000, "temp_mem": 22.128, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 2}, {"card": "Tesla V100S-PCIE-32GB", "values": {"usaged": 0.000, "temp_gpu": 27.000, "temp_mem": 24.000, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 3}]'
  },
  {
    dtInputTime: '2021-02-03T04:23:59.000Z',
    sNodeId: '10.10.16.71',
    sType: '0002',
    sSignal:
      '[{"card": "Tesla V100S-PCIE-32GB", "values": {"usaged": 0.000, "temp_gpu": 25.000, "temp_mem": 23.041, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 0}, {"card": "Tesla V100S-PCIE-32GB", "values": {"usaged": 0.000, "temp_gpu": 25.000, "temp_mem": 22.204, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 1}, {"card": "Tesla V100S-PCIE-32GB", "values": {"usaged": 0.000, "temp_gpu": 25.000, "temp_mem": 22.755, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 2}, {"card": "Tesla V100S-PCIE-32GB", "values": {"usaged": 0.000, "temp_gpu": 27.000, "temp_mem": 24.000, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 3}]'
  },
  {
    dtInputTime: '2021-02-03T04:24:59.000Z',
    sNodeId: '10.10.16.71',
    sType: '0002',
    sSignal:
      '[{"card": "Tesla V100S-PCIE-32GB", "values": {"usaged": 0.000, "temp_gpu": 25.000, "temp_mem": 23.034, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 0}, {"card": "Tesla V100S-PCIE-32GB", "values": {"usaged": 0.000, "temp_gpu": 25.000, "temp_mem": 22.831, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 1}, {"card": "Tesla V100S-PCIE-32GB", "values": {"usaged": 0.000, "temp_gpu": 25.000, "temp_mem": 22.831, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 2}, {"card": "Tesla V100S-PCIE-32GB", "values": {"usaged": 0.000, "temp_gpu": 27.000, "temp_mem": 24.000, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 3}]'
  },
  {
    dtInputTime: '2021-02-03T04:25:59.000Z',
    sNodeId: '10.10.16.71',
    sType: '0002',
    sSignal:
      '[{"card": "Tesla V100S-PCIE-32GB", "values": {"usaged": 0.000, "temp_gpu": 25.492, "temp_mem": 23.305, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 0}, {"card": "Tesla V100S-PCIE-32GB", "values": {"usaged": 0.000, "temp_gpu": 25.000, "temp_mem": 23.000, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 1}, {"card": "Tesla V100S-PCIE-32GB", "values": {"usaged": 0.000, "temp_gpu": 25.000, "temp_mem": 23.000, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 2}, {"card": "Tesla V100S-PCIE-32GB", "values": {"usaged": 0.000, "temp_gpu": 27.000, "temp_mem": 24.288, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 3}]'
  },
  {
    dtInputTime: '2021-02-03T04:26:59.000Z',
    sNodeId: '10.10.16.71',
    sType: '0002',
    sSignal:
      '[{"card": "Tesla V100S-PCIE-32GB", "values": {"usaged": 0.000, "temp_gpu": 25.610, "temp_mem": 23.542, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 0}, {"card": "Tesla V100S-PCIE-32GB", "values": {"usaged": 0.000, "temp_gpu": 25.000, "temp_mem": 23.000, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 1}, {"card": "Tesla V100S-PCIE-32GB", "values": {"usaged": 0.000, "temp_gpu": 25.000, "temp_mem": 23.000, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 2}, {"card": "Tesla V100S-PCIE-32GB", "values": {"usaged": 0.000, "temp_gpu": 27.000, "temp_mem": 24.949, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 3}]'
  },
  {
    dtInputTime: '2021-02-03T04:27:59.000Z',
    sNodeId: '10.10.16.71',
    sType: '0002',
    sSignal:
      '[{"card": "Tesla V100S-PCIE-32GB", "values": {"usaged": 0.000, "temp_gpu": 25.034, "temp_mem": 23.102, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 0}, {"card": "Tesla V100S-PCIE-32GB", "values": {"usaged": 0.000, "temp_gpu": 25.000, "temp_mem": 23.000, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 1}, {"card": "Tesla V100S-PCIE-32GB", "values": {"usaged": 0.000, "temp_gpu": 25.000, "temp_mem": 23.000, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 2}, {"card": "Tesla V100S-PCIE-32GB", "values": {"usaged": 0.000, "temp_gpu": 27.000, "temp_mem": 24.932, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 3}]'
  },
  {
    dtInputTime: '2021-02-03T04:28:59.000Z',
    sNodeId: '10.10.16.71',
    sType: '0002',
    sSignal:
      '[{"card": "Tesla V100S-PCIE-32GB", "values": {"usaged": 0.000, "temp_gpu": 25.000, "temp_mem": 23.017, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 0}, {"card": "Tesla V100S-PCIE-32GB", "values": {"usaged": 0.000, "temp_gpu": 25.000, "temp_mem": 22.966, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 1}, {"card": "Tesla V100S-PCIE-32GB", "values": {"usaged": 0.000, "temp_gpu": 25.000, "temp_mem": 23.000, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 2}, {"card": "Tesla V100S-PCIE-32GB", "values": {"usaged": 0.000, "temp_gpu": 27.000, "temp_mem": 24.237, "util_gpu": 0.000, "util_mem": 0.000}, "orderId": 3}]'
  }
];

const WithItemsTemplate: Story<TableProps> = (args) => {
  return (
    <Wrapper>
      <Table {...args} ref={undefined}></Table>
    </Wrapper>
  );
};
export const WithItems = WithItemsTemplate.bind({});
WithItems.args = {
  items: dummy
};

const WithItemsHeaderTemplate: Story<TableProps> = () => {
  const headers: TableHeaderProps[] = [
    {
      key: 'dtInputTime',
      type: 'format',
      format: (val: string) => <span>{moment(val).format('YYYY.MM.DD HH:mm:ss')}</span>,
      label: 'Date',
      width: '150px',
      sorted: true
    },
    {
      key: 'sNodeId',
      type: 'string',
      label: 'IP',
      sorted: true
    },
    {
      key: 'sType',
      type: 'number',
      label: 'Node Type',
      width: '150px',
      sorted: true
    },
    {
      key: 'sSignal',
      type: 'string',
      label: 'Signal'
    }
  ];

  return (
    <Wrapper>
      <Table sorted striped bordered items={dummy} headers={headers} />
    </Wrapper>
  );
};
export const WithItemsHeader = WithItemsHeaderTemplate.bind({});

const WithPaginationTemplate: Story<TableProps> = () => {
  const headers: TableHeaderProps[] = [
    {
      key: 'dtInputTime',
      type: 'format',
      format: (val: string) => <span>{moment(val).format('YYYY.MM.DD HH:mm:ss')}</span>,
      label: 'Date',
      width: '150px',
      sorted: true
    },
    {
      key: 'sNodeId',
      type: 'string',
      label: 'IP',
      sorted: true
    },
    {
      key: 'sType',
      type: 'number',
      label: 'Node Type',
      width: '150px'
    },
    {
      key: 'sSignal',
      type: 'string',
      label: 'Signal'
    }
  ];

  const pagination: PaginationProps = {
    per: 5
  };

  return (
    <Wrapper>
      <Table striped items={dummy} headers={headers} pagination={pagination} />
    </Wrapper>
  );
};
export const WithPagination = WithPaginationTemplate.bind({});
