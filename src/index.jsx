import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import { theme } from './styles/theme';
import Home from './templates/Home';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
