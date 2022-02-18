import { Countries } from 'components/Countries';
import { Filter } from 'components/Filter';
import { Header } from 'components/Header';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { usePersistedState } from 'utils/usePersistedState';

import GlobalStyles from '././globalStyles/global';
import dark from './globalStyles/themes/dark';
import light from './globalStyles/themes/light';

function App() {
  const [theme, setTheme] = usePersistedState('theme', light);

  function toggleTheme() {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header toggleTheme={toggleTheme} />
      <Filter />
      <Countries />
    </ThemeProvider>
  );
}

export default App;
