import React from 'react';
import Wrapper from '../../components/organisms/StorybookWrapper';

import { Story, Meta } from '@storybook/react/types-6-0';

import Readme from '../../pages/readme';

export default {
  title: 'Views/Readme',
  component: Readme
} as Meta;

const Template: Story = (args) => 
<Wrapper>
  <Readme {...args} />
</Wrapper>;

export const ReadmeView = Template.bind({});
