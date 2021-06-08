import React from 'react';
import Wrapper from '../../../components/organisms/StorybookWrapper';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Breadcrumbs, { BreadcrumbsProps } from '../../../components/atoms/Breadcrumbs';

export default {
  title: 'Component/Atoms/Breadcrumbs',
  component: Breadcrumbs
} as Meta;

const Template: Story<BreadcrumbsProps> = () => {
  return (
    <Wrapper>
      <Breadcrumbs>
        <Breadcrumbs.Item target={'blank'}>Home</Breadcrumbs.Item>
        <Breadcrumbs.Item target={'blank'}>Database</Breadcrumbs.Item>
        <Breadcrumbs.Item target={'blank'}>Data</Breadcrumbs.Item>
        <Breadcrumbs.Item active>Column</Breadcrumbs.Item>
      </Breadcrumbs>
    </Wrapper>
  );
};

export const Basic = Template.bind({});
