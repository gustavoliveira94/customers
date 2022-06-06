import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render as renderComponent } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import { CustomersProvider } from 'presentation/providers';
import { theme } from 'presentation/utils';

export const render = (Component: JSX.Element) => {
  return {
    ...renderComponent(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <CustomersProvider>{Component}</CustomersProvider>
        </BrowserRouter>
      </ThemeProvider>,
    ),
  };
};
