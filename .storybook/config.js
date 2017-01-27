import React from 'react';
import { configure, addDecorator } from '@kadira/storybook';
import { ThemeProvider } from 'styled-components';

// import theme from 'components/themes/default';
const req = require.context('components', true, /.stories.tsx$/);

function loadStories() {
  require('../src/components/App.stories.tsx');
}

addDecorator(story => {
  story();
});

configure(loadStories, module);
