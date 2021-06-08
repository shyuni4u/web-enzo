import React, { useRef, useState } from 'react';
import Wrapper from '../../../components/organisms/StorybookWrapper';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Button from '../../../components/atoms/Button';
import Popover, { PopoverProps } from '../../../components/atoms/Popover';

export default {
  title: 'Component/Atoms/Popover',
  component: Popover
} as Meta;

const Template: Story<PopoverProps> = (args) => {
  const [show, setShow] = useState<boolean>(true);
  const target = useRef(null);
  return (
    <Wrapper>
      <Button ref={target} onClick={() => setShow(!show)}>
        TEST
      </Button>
      <Popover target={target.current} show={show} placement={'bottom'}>
        <ul>
          <li>TEST 1</li>
          <li>TEST 2</li>
          <li>TEST 3</li>
          <li>TEST 4</li>
        </ul>
      </Popover>
    </Wrapper>
  );
};

export const Basic = Template.bind({});

export const Show = Template.bind({});
Show.args = {
  target: undefined, //  useRef
  show: true,
  placement: 'left',
  overlay: <></>
};
