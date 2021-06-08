import React from 'react';
import Wrapper from '../../../components/organisms/StorybookWrapper';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { BsExclamationCircle } from 'react-icons/bs';

import { Badge, BadgeProps } from '../../../components/atoms/Badge';

export default {
  title: 'Component/Atoms/Badge',
  component: Badge
  // argTypes: {
  //   color: { control: 'color' }
  // }
} as Meta;

const Template: Story<BadgeProps> = () => (
  <Wrapper>
    <div>
      <Badge variant={'main'}>Main</Badge>
      <Badge variant={'purple'}>purple</Badge>
      <Badge variant={'green'}>Green</Badge>
      <Badge variant={'red'}>Red</Badge>
      <Badge variant={'yellow'}>Yellow</Badge>
      <Badge variant={'blue'}>blue</Badge>
      <Badge variant={'cornflowerblue'}>cornflowerblue</Badge>
      <Badge variant={'black'}>Black</Badge>
      <Badge variant={'white'}>White</Badge>
      <Badge variant={'gray8'}>Gray8</Badge>
    </div>
  </Wrapper>
);

export const Basic = Template.bind({});

const PillTemplate: Story<BadgeProps> = () => (
  <Wrapper>
    <div>
      <Badge pill variant={'main'}>
        Main
      </Badge>
      <Badge pill variant={'purple'}>
        purple
      </Badge>
      <Badge pill variant={'green'}>
        Green
      </Badge>
      <Badge pill variant={'red'}>
        Red
      </Badge>
      <Badge pill variant={'yellow'}>
        Yellow
      </Badge>
      <Badge pill variant={'blue'}>
        blue
      </Badge>
      <Badge pill variant={'cornflowerblue'}>
        cornflowerblue
      </Badge>
      <Badge pill variant={'black'}>
        Black
      </Badge>
      <Badge pill variant={'white'}>
        White
      </Badge>
      <Badge pill variant={'gray8'}>
        Gray8
      </Badge>
    </div>
  </Wrapper>
);

export const Pill = PillTemplate.bind({});

const WithOtherTemplate: Story<BadgeProps> = () => (
  <Wrapper>
    <div>
      <h1>
        H1 TITLE EXAMPLE
        <Badge pill variant={'green'}>
          Inner H1
        </Badge>
      </h1>
      <Badge pill variant={'main'}>
        <BsExclamationCircle style={{ marginRight: '4px', verticalAlign: 'middle' }} />
        With Icon
      </Badge>
    </div>
  </Wrapper>
);

export const WithOther = WithOtherTemplate.bind({});
