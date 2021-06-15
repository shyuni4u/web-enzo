import React from 'react';
import Wrapper from '../../../components/organisms/StorybookWrapper';

import { Story, Meta } from '@storybook/react/types-6-0';

import Container from '../../../components/organisms/Container';

import dummy from '../../../docs/test';

export default {
  title: 'Component/Organisms/Container',
  component: Container
} as Meta;

const Template: Story = () => {
  return (
    <Wrapper>
      <Container>
        <Container.Aside>Aside</Container.Aside>
        <Container.Main>Main</Container.Main>
      </Container>
    </Wrapper>
  );
};

export const Basic = Template.bind({});

const LongMainTemplate: Story = () => {
  return (
    <Wrapper>
      <Container>
        <Container.Aside>Aside</Container.Aside>
        <Container.Main>{dummy}</Container.Main>
      </Container>
    </Wrapper>
  );
};

export const LongMain = LongMainTemplate.bind({});
