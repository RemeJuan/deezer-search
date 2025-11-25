import React from 'react';
import { createTheme, useMediaQuery, ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import AppRoutes from './core/routes';
import { ViewportProvider } from './context/use-viewport';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
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
              <AppRoutes />
            </div>
          </ViewportProvider>
        </main>
      </Router>
    </ThemeProvider>
  );
}

export default App;
