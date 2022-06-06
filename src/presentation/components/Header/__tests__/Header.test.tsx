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
    const { getByText } = render(
      <MemoryRouter initialEntries={[{ pathname: ROUTES.CREATE_CUSTOMER }]}>
        <Header />
      </MemoryRouter>,
    );

    const back = getByText('Voltar');

    expect(back).toBeInTheDocument();
  });

  it('Should not render Back', () => {
    const { queryByText } = render(
      <MemoryRouter initialEntries={[{ pathname: ROUTES.HOME }]}>
        <Header />
      </MemoryRouter>,
    );

    const back = queryByText('Voltar');

    expect(back).not.toBeInTheDocument();
  });
});
