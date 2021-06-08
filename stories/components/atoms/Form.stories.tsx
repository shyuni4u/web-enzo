import React, { useState } from 'react';
import Wrapper from '../../../components/organisms/StorybookWrapper';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Form from '../../../components/atoms/Form';

import Button from '../../../components/atoms/Button';
import Input from '../../../components/atoms/InputBase';

export default {
  title: 'Component/Atoms/Form',
  component: Form
} as Meta;

const BasicTemplate: Story = (args) => {
  const [test, setTest] = useState('');
  return (
    <Wrapper>
      <Form isView={args.isView}>
        <Input
          value={test}
          onChange={(e) => setTest(e.target.value)}
          placeholder={'Input text'}
          style={{ marginBottom: '10px' }}
        />
        <Input
          multiline={true}
          value={test}
          onChange={(e) => setTest(e.target.value)}
          placeholder={'Input multiline'}
          style={{ marginBottom: '10px' }}
        />
        <Button>default</Button>
      </Form>
    </Wrapper>
  );
};

export const Basic = BasicTemplate.bind({});
Basic.args = {
  isView: false
};
