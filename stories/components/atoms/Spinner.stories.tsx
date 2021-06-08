import React from 'react';
import Wrapper from '../../../components/organisms/StorybookWrapper';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Spinner, SpinnerProps } from '../../../components/atoms/Spinner';

export default {
  title: 'Component/Atoms/Spinner',
  component: Spinner
} as Meta;

const Template: Story<SpinnerProps> = (args) => {
  return (
    <Wrapper>
      <Spinner {...args} ref={undefined} />
    </Wrapper>
  );
};
export const Basic = Template.bind({});
Basic.args = {
  title: 'Loading',
  color: 'red',
  backgroundColor: 'blue'
};
