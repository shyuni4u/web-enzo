import React, { useState } from 'react';
import Wrapper from '../../../components/organisms/StorybookWrapper';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Switch, { SwitchProps } from '../../../components/atoms/Switch';

export default {
  title: 'Component/Atoms/Switch',
  component: Switch
} as Meta;

const Template: Story<SwitchProps> = (args) => {
  const [on, setOn] = useState<boolean>(false);
  return (
    <Wrapper>
      {/* 'ref' is not required  */}
      <Switch {...args} ref={undefined} checked={on} onChange={() => setOn((next) => !next)} />
    </Wrapper>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  name: 'name of input tag',
  label: 'Swtich',
  value: 'value of input tag'
};
