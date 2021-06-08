import React from 'react';
import Wrapper from '../../../components/organisms/StorybookWrapper';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Box, BoxProps } from '../../../components/atoms/Box';

export default {
  title: 'Component/Atoms/Box',
  component: Box
  // argTypes: {
  //   color: { control: 'color' }
  // }
} as Meta;

const Template: Story<BoxProps> = () => (
  <Wrapper>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <Box title={'GPU'} wrapperClassName={'col-sm-12 col-md-6 col-lg-6'}>
        <h3>H3 BOX SUB TITLE</h3>
        <h2>H2 BOX TITLE</h2>
        <div>
          DIV BOX TEXT
          <br />
          DIV BOX TEXT
          <br />
          DIV BOX TEXT
          <br />
          DIV BOX TEXT
          <br />
        </div>
      </Box>
      <Box title={'MEMORY'} wrapperClassName={'col-sm-12 col-md-6 col-lg-6'}>
        <h3>H3 BOX SUB TITLE</h3>
        <h2>H2 BOX TITLE</h2>
        <div>
          DIV BOX TEXT
          <br />
          DIV BOX TEXT
          <br />
          DIV BOX TEXT
          <br />
          DIV BOX TEXT
          <br />
        </div>
      </Box>
      <Box title={'USAGE'} wrapperClassName={'col-sm-12 col-md-12 col-lg-12'}>
        <h3>H3 BOX SUB TITLE</h3>
        <h2>H2 BOX TITLE</h2>
        <div>
          DIV BOX TEXT
          <br />
          DIV BOX TEXT
          <br />
          DIV BOX TEXT
          <br />
          DIV BOX TEXT
          <br />
        </div>
      </Box>
    </div>
  </Wrapper>
);

export const Basic = Template.bind({});
