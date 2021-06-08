import React from 'react';
import Wrapper from '../../../components/organisms/StorybookWrapper';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Tree, { TreeProps } from '../../../components/atoms/Tree';
import { TreeItemProps } from '../../../components/atoms/TreeItem';

export default {
  title: 'Component/Atoms/Tree',
  component: Tree
} as Meta;

const Template: Story<TreeProps> = () => {
  const items: TreeItemProps[] = [
    {
      text: 'test A',
      onClick: (e) => console.log(e),
      sub: [
        { text: 'A - 1', onClick: () => alert('A - 1') },
        { text: 'A - 2', onClick: () => alert('A - 2') },
        { text: 'A - 3', onClick: () => alert('A - 3') },
        { text: 'A - 4', onClick: () => alert('A - 4') },
        { text: 'A - 5', onClick: () => alert('A - 5') }
      ]
    },
    {
      text: 'test B',
      onClick: (e) => console.log(e),
      sub: [
        { text: 'B - 1', onClick: () => alert('B - 1') },
        { text: 'B - 2', onClick: () => alert('B - 2') },
        { text: 'B - 3', onClick: () => alert('B - 3') }
      ]
    },
    {
      text: 'test C',
      onClick: (e) => console.log(e)
    },
    {
      text: 'test D',
      onClick: (e) => console.log(e),
      sub: [
        { text: 'D - 1', onClick: () => alert('D - 1') },
        { text: 'D - 2', onClick: () => alert('D - 2') },
        {
          text: 'D - 3',
          onClick: () => alert('D - 3'),
          sub: [{ text: 'D - 1 - 1' }, { text: 'D - 1 - 2', onClick: () => alert('D - 1 - 2') }]
        }
      ]
    },
    {
      text: 'test E',
      onClick: (e) => console.log(e),
      sub: []
    }
  ];
  return (
    <Wrapper>
      <div>
        <Tree items={items} />
      </div>
    </Wrapper>
  );
};

export const Basic = Template.bind({});
