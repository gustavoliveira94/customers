/* eslint-disable prefer-const */
import React from 'react';
import { render } from '@testing-library/react';

import { ROUTES } from 'domain/models/routes';

import { MemoryRouter } from 'react-router-dom';
import { Header } from '../Header';

describe('Testing Page <Header />', () => {
  it('Should render text: Clientes', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={[{ pathname: ROUTES.HOME }]}>
        <Header />
      </MemoryRouter>,
    );

    const customers = getByText('Clientes');

    expect(customers).toBeInTheDocument();
  });

  it('Should render Back', () => {
    const { getByTestId } = render(
      <MemoryRouter initialEntries={[{ pathname: ROUTES.CREATE_CUSTOMER }]}>
        <Header />
      </MemoryRouter>,
    );

    const back = getByTestId('voltar');

    expect(back).toBeInTheDocument();
  });

  it('Should not render Back', () => {
    const { queryByTestId } = render(
      <MemoryRouter initialEntries={[{ pathname: ROUTES.HOME }]}>
        <Header />
      </MemoryRouter>,
    );

    const back = queryByTestId('voltar');

    expect(back).not.toBeInTheDocument();
  });
});
