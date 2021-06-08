import React, { useState } from 'react';
import { BsBoxArrowInUpRight } from 'react-icons/bs';
import Wrapper from '../../../components/organisms/StorybookWrapper';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { InputBase, InputBaseProps, TextArea } from '../../../components/atoms/InputBase';

export default {
  title: 'Component/Atoms/InputBase',
  component: InputBase
} as Meta;

const BasicTemplate: Story<InputBaseProps> = (args) => {
  const [test, setTest] = useState('');
  return (
    <Wrapper>
      <InputBase {...args} value={test} onChange={(e) => setTest(e.target.value)} ref={undefined} />
      <br />
      {test}
    </Wrapper>
  );
};
export const Basic = BasicTemplate.bind({});
Basic.args = {
  type: 'text'
};

const VariantTemplate: Story<InputBaseProps> = () => {
  const [test1, setTest1] = useState('');
  const [test2, setTest2] = useState('');
  return (
    <Wrapper>
      <InputBase
        variant={'outline'}
        value={test1}
        onChange={(e) => setTest1(e.target.value)}
        style={{ marginBottom: '10px' }}
      />
      <InputBase variant={'ghost'} value={test2} onChange={(e) => setTest2(e.target.value)} />
    </Wrapper>
  );
};
export const Variant = VariantTemplate.bind({});

const SizeTemplate: Story<InputBaseProps> = () => (
  <Wrapper>
    <InputBase sizeMoreh={'large'} value={'large'} style={{ marginBottom: '10px' }} />
    <InputBase sizeMoreh={'medium'} value={'medium'} />
  </Wrapper>
);
export const Size = SizeTemplate.bind({});

const DisabledTemplate: Story<InputBaseProps> = () => {
  const [testEnabled, setTestEnabled] = useState('Enabled');
  const [testDisabled, setTestDisabled] = useState('Disabled');
  return (
    <Wrapper>
      <InputBase
        value={testEnabled}
        onChange={(e) => setTestEnabled(e.target.value)}
        style={{ marginBottom: '10px' }}
      />
      <InputBase
        value={testDisabled}
        onChange={(e) => setTestDisabled(e.target.value)}
        disabled={true}
        style={{ marginBottom: '10px' }}
      />
      <TextArea disabled={true} placeholder={'Multiline'}>
        asdf
      </TextArea>
    </Wrapper>
  );
};
export const Disabled = DisabledTemplate.bind({});

const ReadOnlyTemplate: Story<InputBaseProps> = () => {
  const [testEnabled, setTestEnabled] = useState('Editable');
  const [testDisabled, setTestDisabled] = useState('ReadOnly');
  return (
    <Wrapper>
      <InputBase
        value={testEnabled}
        onChange={(e) => setTestEnabled(e.target.value)}
        style={{ marginBottom: '10px' }}
      />
      <InputBase
        value={testDisabled}
        onChange={(e) => setTestDisabled(e.target.value)}
        readOnly={true}
        style={{ marginBottom: '10px' }}
      />
      <TextArea readOnly={true} value={'Multiline Readonly'} />
    </Wrapper>
  );
};
export const ReadOnly = ReadOnlyTemplate.bind({});

const WithIconTemplate: Story<InputBaseProps> = () => (
  <Wrapper>
    <InputBase leadingIcon={<BsBoxArrowInUpRight />} value={'Leading Icon'} style={{ marginBottom: '10px' }} />
    <InputBase trailingIcon={<BsBoxArrowInUpRight />} value={'Trailing Icon'} style={{ marginBottom: '10px' }} />
    <TextArea trailingIcon={<BsBoxArrowInUpRight />} value={'Trailing Icon'} style={{ marginBottom: '10px' }} />
    <TextArea
      trailingIcon={<BsBoxArrowInUpRight />}
      value={'Multiline with Icon'}
      rows={10}
      style={{ marginBottom: '10px' }}
    />{' '}
    <InputBase leadingIcon={<BsBoxArrowInUpRight />} trailingIcon={<BsBoxArrowInUpRight />} value={'Both Icon'} />
  </Wrapper>
);
export const WithIcon = WithIconTemplate.bind({});

const WithLabelTemplate: Story<InputBaseProps> = () => {
  const [test1, setTest1] = useState('');
  const [test2, setTest2] = useState('');
  return (
    <Wrapper>
      <InputBase
        variant={'outline'}
        label={'Label'}
        value={test1}
        onChange={(e) => setTest1(e.target.value)}
        style={{ marginBottom: '10px' }}
      />
      <TextArea
        variant={'ghost'}
        label={'Label'}
        value={test2}
        onChange={(e) => setTest2(e.target.value)}
        style={{ marginBottom: '10px' }}
      />
    </Wrapper>
  );
};
export const WithLabel = WithLabelTemplate.bind({});

const WithMessageTemplate: Story<InputBaseProps> = () => {
  const [test1, setTest1] = useState('');
  const [test2, setTest2] = useState('');
  return (
    <Wrapper>
      <InputBase
        variant={'outline'}
        label={'Label'}
        value={test1}
        message={'Optional helper text goes here'}
        error={false}
        onChange={(e) => setTest1(e.target.value)}
        style={{ marginBottom: '10px' }}
      />
      <TextArea
        variant={'ghost'}
        label={'Label'}
        value={test2}
        message={'Optional helper text goes here'}
        error={false}
        onChange={(e) => setTest2(e.target.value)}
        style={{ marginBottom: '10px' }}
      />
    </Wrapper>
  );
};
export const WithMessage = WithMessageTemplate.bind({});

const WithErrorTemplate: Story<InputBaseProps> = () => {
  const [test1, setTest1] = useState('');
  const [test2, setTest2] = useState('');
  return (
    <Wrapper>
      <InputBase
        variant={'outline'}
        label={'Label'}
        value={test1}
        error={true}
        message={'Optional helper text goes here'}
        onChange={(e) => setTest1(e.target.value)}
        style={{ marginBottom: '10px' }}
      />
      <TextArea
        variant={'ghost'}
        label={'Label'}
        value={test2}
        message={'Optional helper text goes here'}
        error={true}
        onChange={(e) => setTest2(e.target.value)}
        style={{ marginBottom: '10px' }}
      />
    </Wrapper>
  );
};
export const WithError = WithErrorTemplate.bind({});
