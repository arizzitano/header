import React from 'react';
import { storiesOf } from '@storybook/react';

import Header from './index';
import HeaderItem from '../HeaderItem';

storiesOf('Header', module).add('basic usage', () => (
  <Header userIdentifier={'edx@example.com'}>
    <HeaderItem title={'Courses'}>
      <h4>Tab 1 Contents</h4>
    </HeaderItem>
    <HeaderItem title={'Programs'}>
      <h4>Tab 2 Contents</h4>
    </HeaderItem>
    <HeaderItem title={'About'}>
      <h4>Tab 3 Contents</h4>
    </HeaderItem>
  </Header>
));
