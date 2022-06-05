import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from 'configs/styledComponents/GlobalStyles';
import { Header } from 'presentation/ui/components/Header/Header';

import { theme } from '../utils/theme';

interface IMain {
  children: React.ReactNode;
}

export const Template: React.FC<IMain> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      {children}
    </ThemeProvider>
  );
};
