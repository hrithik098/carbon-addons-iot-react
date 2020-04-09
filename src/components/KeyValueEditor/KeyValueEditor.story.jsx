import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import KeyValueEditor from './KeyValueEditor';

storiesOf('Watson IoT Experimental/KeyValueEditor', module).add('Base', () => {
  return <KeyValueEditor />;
});
