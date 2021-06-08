import React from 'react';
import Wrapper from '../../../components/organisms/StorybookWrapper';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Modal, ModalProps } from '../../../components/atoms/Modal';

export default {
  title: 'Component/Atoms/Modal',
  component: Modal
} as Meta;

const Template: Story<ModalProps> = (args) => (
  <Wrapper>
    <Modal {...args}>DEFAULT BUTTON</Modal>
  </Wrapper>
);

export const Basic = Template.bind({});

export const Show = Template.bind({});
Show.args = {
  show: true
};
