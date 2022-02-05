import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';

// Import react redux store
import store from './redux/store'

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { amber, deepOrange, green, grey, purple, red } from '@mui/material/colors';
import { color, getThemeProps } from '@mui/system';
import { CssBaseline, PaletteMode } from '@mui/material';


const userSelectedThemeMode = 'dark'

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: {main: amber[800]},
          secondary: {main: amber[400]},
          divider: amber[200],
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
          background: {
            default: amber[100],
          }
        }
      : {
          // palette values for dark mode
          primary: {main: '#FB3435'},
          divider: {main: deepOrange[700]},
          text: {
            primary: '#fff',
            secondary: grey[500],
          },
          background: {
            default: '#161118',
            paper: '#161118'
          }
        }),
  },
});

// override mui theme colors
const theme = createTheme(getDesignTokens(userSelectedThemeMode));


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
          <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
