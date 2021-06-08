import React, { useState } from 'react';
import Wrapper from '../../../components/organisms/StorybookWrapper';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import SelectMulti, { SelectMultiProps, SelectMultiItemProps } from '../../../components/atoms/SelectMulti';

export default {
  title: 'Component/Atoms/SelectMulti',
  component: SelectMulti
} as Meta;

const dummy: SelectMultiItemProps[] = [
  { label: 'Test ABCD', value: 'A' },
  { label: 'Test BCD', value: 'B' },
  { label: 'Test CD', value: 'C' },
  { label: 'Test D', value: 'D' },
  { label: 'Temp ABCD', value: 'TA' },
  { label: 'Temp BCD', value: 'TB' },
  { label: 'Temp CD', value: 'TC' },
  { label: 'Temp D', value: 'TD' }
];

const Template: Story<SelectMultiProps> = (args) => {
  const [test, setTest] = useState<SelectMultiItemProps[]>([]);
  return (
    <Wrapper>
      <SelectMulti {...args} onChange={(e) => setTest(e)} />
      {JSON.stringify(test)}
      <br />
      LENGTH: {test.length}
    </Wrapper>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  items: dummy,
  clearable: true,
  maxHeight: 100,
  defaultValue: [dummy[0], dummy[3]]
};
