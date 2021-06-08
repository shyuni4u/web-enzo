import React, { useState } from 'react';
import Wrapper from '../../../components/organisms/StorybookWrapper';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Select, { SelectProps, SelectItemProps } from '../../../components/atoms/Select';

export default {
  title: 'Component/Atoms/Select',
  component: Select
} as Meta;

const dummy: SelectItemProps[] = [
  { label: 'Test ABCD', value: 'A' },
  { label: 'Test BCD', value: 'B' },
  { label: 'Test CD', value: 'C' },
  { label: 'Test D', value: 'D' },
  { label: 'Temp ABCD', value: 'TA' },
  { label: 'Temp BCD', value: 'TB' },
  { label: 'Temp CD', value: 'TC' },
  { label: 'Temp D', value: 'TD' }
];

const Template: Story<SelectProps> = (args) => {
  const [test, setTest] = useState<SelectItemProps>(undefined);
  return (
    <Wrapper>
      <Select {...args} onChange={(e) => setTest(e)} />
      <br />
      {test && test.label}
    </Wrapper>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  items: dummy,
  defaultValue: dummy[1]
};

export const Searching = Template.bind({});
Searching.args = {
  items: dummy,
  defaultValue: dummy[0],
  searching: true
};
