import React, { useState, useEffect } from 'react';
import Wrapper from '../../../components/organisms/StorybookWrapper';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Pagination, PaginationProps } from '../../../components/atoms/Pagination';

export default {
  title: 'Component/Atoms/Pagination',
  component: Pagination
} as Meta;

const BasicTemplate: Story<PaginationProps> = (args) => {
  const [pageTest, setPageTest] = useState(1);
  return (
    <Wrapper>
      <Pagination {...args} onPageMove={(n) => setPageTest(n)} ref={undefined} />
      Page {pageTest}
    </Wrapper>
  );
};
export const Basic = BasicTemplate.bind({});

const SizeTemplate: Story<PaginationProps> = () => {
  const [pageTest, setPageTest] = useState(1);
  return (
    <Wrapper>
      <Pagination
        size={'large'}
        current={pageTest}
        per={5}
        totalItems={50}
        onPageMove={(n) => setPageTest(n)}
        style={{ marginBottom: '10px' }}
      />
      <Pagination
        size={'medium'}
        current={pageTest}
        per={5}
        totalItems={50}
        onPageMove={(n) => setPageTest(n)}
        style={{ marginBottom: '10px' }}
      />
      <Pagination
        size={'small'}
        current={pageTest}
        per={5}
        totalItems={50}
        onPageMove={(n) => setPageTest(n)}
        style={{ marginBottom: '10px' }}
      />
    </Wrapper>
  );
};
export const Size = SizeTemplate.bind({});

const CompactTemplate: Story<PaginationProps> = () => {
  const [pageTest, setPageTest] = useState(1);
  return (
    <Wrapper>
      <Pagination
        align={'center'}
        current={pageTest}
        per={5}
        totalItems={50}
        compact
        onPageMove={(n) => setPageTest(n)}
      />
    </Wrapper>
  );
};
export const Compact = CompactTemplate.bind({});
