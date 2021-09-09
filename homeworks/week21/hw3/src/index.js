import React from 'react';
import ReactDOM from 'react-dom';
import App from './component';
import GlobalStyle, { theme } from './style/GlobalStyle'
import { ThemeProvider } from 'styled-components'


ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
