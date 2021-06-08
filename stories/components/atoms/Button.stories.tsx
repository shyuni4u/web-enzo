import React from 'react';
import { BsBoxArrowInUpRight } from 'react-icons/bs';
import Wrapper from '../../../components/organisms/StorybookWrapper';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps } from '../../../components/atoms/Button';

export default {
  title: 'Component/Atoms/Button'
} as Meta;

const BasicTemplate: Story<ButtonProps> = (args) => (
  <Wrapper>
    <Button>default</Button>
  </Wrapper>
);
export const Basic = BasicTemplate.bind({});

const SizeTemplate: Story<ButtonProps> = () => (
  <Wrapper>
    <Button size={'large'} style={{ marginRight: '10px' }}>
      large
    </Button>
    <Button size={'medium'} style={{ marginRight: '10px' }}>
      medium
    </Button>
    <Button size={'small'}>small</Button>
  </Wrapper>
);
export const Size = SizeTemplate.bind({});

const VariantTemplate: Story<ButtonProps> = () => (
  <Wrapper>
    <Button variant={'fill'} style={{ marginRight: '10px' }}>
      fill
    </Button>
    <Button variant={'outline'} style={{ marginRight: '10px' }}>
      outline
    </Button>
    <Button variant={'ghost'}>ghost</Button>
  </Wrapper>
);
export const Variant = VariantTemplate.bind({});

const DisabledTemplate: Story<ButtonProps> = () => (
  <Wrapper>
    <Button onClick={() => alert('click !')} style={{ marginRight: '10px' }}>
      Enabled
    </Button>
    <Button onClick={() => alert('click !')} disabled>
      Disabled
    </Button>
  </Wrapper>
);
export const Disabled = DisabledTemplate.bind({});

const WithIconTemplate: Story<ButtonProps> = () => (
  <Wrapper>
    <Button leadingIcon={<BsBoxArrowInUpRight />}>Enabled</Button>
  </Wrapper>
);
export const WithIcon = WithIconTemplate.bind({});

const WithClassNameTemplate: Story<ButtonProps> = () => (
  <Wrapper>
    <Button className={'primary'}>primary</Button>
  </Wrapper>
);
export const WithClassName = WithClassNameTemplate.bind({});
