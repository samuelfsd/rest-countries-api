import { Header } from 'components/Header';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { usePersistedState } from 'utils/usePersistedState';

import GlobalStyles from './globalStyles/global';
import dark from './globalStyles/themes/dark';
import light from './globalStyles/themes/light';
import Routes from './routes';

function App() {
  const [theme, setTheme] = usePersistedState('theme', light);

  function toggleTheme() {
    setTheme(theme.title === 'light' ? dark : light);
  }
  return (
    <ThemeProvider theme={theme}>
      <Header toggleTheme={toggleTheme} />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
