import React from 'react';
import AppBar from './components/app-bar';
import {createMuiTheme, useMediaQuery, ThemeProvider} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <AppBar />
    </ThemeProvider>
  );
}

export default App;
