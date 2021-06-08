import React, { useState } from 'react';
import Wrapper from '../../../components/organisms/Wrapper';

import { Story, Meta } from '@storybook/react/types-6-0';

import Tabs from '../../../components/atoms/Tabs';
import Tab from '../../../components/atoms/Tab';
import { Panel } from '../../../components/atoms/Panel';

export default {
  title: 'Component/Atoms/Tabs',
  component: Tabs
} as Meta;

const Template: Story = () => {
  const [key, setKey] = useState('home');
  return (
    <Wrapper>
      <Tabs activeKey={key} onSelect={(k) => setKey(k)}>
        <Tab eventKey={'home'} title={'Home'}>
          <Panel>
            <h3 className={'panel-sub-title'}>Home</h3>
            <h2 className={'panel-title'}>Home title</h2>
            <div className={'panel-content'}>
              SAMPLE TEXT
              <br />
              SAMPLE TEXT
              <br />
              SAMPLE TEXT
              <br />
              SAMPLE TEXT
              <br />
            </div>
          </Panel>
        </Tab>
        <Tab eventKey={'profile'} title={'Profile'}>
          TEST 2 PAGE
        </Tab>
        <Tab eventKey={'dashboard'} title={'Dashboard'}>
          TEST 3 PAGE
        </Tab>
        <Tab eventKey={'contact'} title={'Contact'} disabled>
          TEST 4 PAGE
        </Tab>
      </Tabs>
    </Wrapper>
  );
};

export const Basic = Template.bind({});
