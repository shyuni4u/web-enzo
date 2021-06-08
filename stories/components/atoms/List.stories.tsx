import React, { useState } from 'react';
import Wrapper from '../../../components/organisms/StorybookWrapper';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import List, { ListProps } from '../../../components/atoms/List';

export default {
  title: 'Component/Atoms/List',
  component: List
} as Meta;

const Template: Story<ListProps> = () => {
  const [key, setKey] = useState<string>('ex1');
  return (
    <Wrapper>
      <List activeKey={key} onSelect={(e) => setKey(e)}>
        <List.Item eventKey={'ex1'}>Example 1</List.Item>
        <List.Item eventKey={'ex2'}>Example 2</List.Item>
        <List.Item eventKey={'ex3'}>Example 3</List.Item>
        <List.Item eventKey={'ex4'}>Example 4</List.Item>
        <List.Item eventKey={'ex5'}>Example 5</List.Item>
        <List.Item eventKey={'ex6'}>Example 6</List.Item>
        <List.Item eventKey={'ex7'}>Example 7</List.Item>
      </List>
      {key}
    </Wrapper>
  );
};

export const Basic = Template.bind({});
