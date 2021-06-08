import React from 'react';
import Wrapper from '../../../components/organisms/StorybookWrapper';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Checkbox, { CheckboxProps } from '../../../components/atoms/Checkbox';

export default {
  title: 'Component/Atoms/Checkbox',
  component: Checkbox
  // argTypes: {
  //   color: { control: 'color' }
  // }
} as Meta;

const Template: Story<CheckboxProps> = (args) => (
  <Wrapper>
    {/* 'ref' is not required  */}
    <Checkbox {...args} ref={undefined} />
  </Wrapper>
);

export const Basic = Template.bind({});
Basic.args = {
  name: 'name of input tag',
  label: 'Checkbox',
  value: 'value of input tag'
};

export const Radio = Template.bind({});
Radio.args = {
  name: 'name of input tag',
  label: 'Checkbox',
  value: 'value of input tag',
  radio: true
};

export const Checked = Template.bind({});
Checked.args = {
  name: 'name of input tag',
  label: 'Checkbox',
  value: 'value of input tag',
  checked: true
};

export const Disabled = Template.bind({});
Disabled.args = {
  name: 'name of input tag',
  label: 'Checkbox',
  value: 'value of input tag',
  disabled: true
};
