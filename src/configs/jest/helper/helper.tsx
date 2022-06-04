import React from 'react';

import { render as renderComponent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

export const render = (Component: JSX.Element) => {
  return {
    ...renderComponent(<BrowserRouter>{Component}</BrowserRouter>),
  };
};
