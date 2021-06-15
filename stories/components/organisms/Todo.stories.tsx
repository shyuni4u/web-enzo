import React from 'react';
import Wrapper from '../../../components/organisms/StorybookWrapper';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Todo, TodoProps } from '../../../components/organisms/Todo';

export default {
  title: 'Component/Organisms/Todo',
  component: Todo
} as Meta;

const Template: Story = (args) => (
  <Wrapper>
    <Todo {...args} />
  </Wrapper>
);

export const Basic = Template.bind({});
Basic.args = {
  title: 'TITLE',
  items: [
    {
      name: 'has link',
      link: 'haslink'
    },
    {
      name: 'no link'
    }
  ]
};
