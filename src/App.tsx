import React from 'react';
import {createMuiTheme, useMediaQuery, ThemeProvider} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import routes from './core/routes';
import {ViewportProvider} from './context/use-viewport';

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
      <Router>
        <main>
          <ViewportProvider>
            <div>
              {routes()}
            </div>
          </ViewportProvider>
        </main>
      </Router>
    </ThemeProvider>
  );
}

export default App;
