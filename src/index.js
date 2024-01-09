import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider as ReduxProvider } from 'react-redux';
import store from './redux/store';
import theme from '../src/components/Layout/Theme.js';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

// theme.js

root.render(
  <StrictMode>
    <ReduxProvider store={store}>
      <ChakraProvider theme={theme}>
        <ColorModeScript />
        <App />
      </ChakraProvider>
    </ReduxProvider>
  </StrictMode>
);
