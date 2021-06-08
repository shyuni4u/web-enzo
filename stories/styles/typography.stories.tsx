import React from 'react';
import Wrapper from '../../components/organisms/StorybookWrapper';

import { Story, Meta } from '@storybook/react/types-6-0';

import Typography from '../../styles/typography';

export default {
  title: 'Styles/Typography',
  component: Typography
} as Meta;

const Template: Story = () => (
  <Wrapper>
    <Typography />
  </Wrapper>
);

export const Base = Template.bind({});
