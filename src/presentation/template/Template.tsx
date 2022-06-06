import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyles } from 'configs/styledComponents/GlobalStyles';
import { Header } from 'presentation/components/Header/Header';
import { ButtonCreateCustomer } from 'presentation/components';
import { CustomersProvider } from 'presentation/providers';

import { theme } from 'presentation/utils';

interface IMain {
  children: React.ReactNode;
}

export const Template: React.FC<IMain> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CustomersProvider>
          <GlobalStyles />
          <Header />
          {children}
          <ButtonCreateCustomer />
        </CustomersProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};
