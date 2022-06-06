/* eslint-disable prefer-const */
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

// import { render } from 'configs/jest/helper/helper';
import { ROUTES } from 'domain/models/routes';

import { ButtonCreateCustomer } from '../ButtonCreateCustomer';

describe('Testing Page <ButtonCreateCustomer />', () => {
  it('Should render Button', () => {
    const { getByTestId } = render(
      <MemoryRouter initialEntries={[{ pathname: ROUTES.HOME }]}>
        <ButtonCreateCustomer />
      </MemoryRouter>,
    );

    expect(getByTestId('button')).toBeInTheDocument();
  });

  it('Should click Button', () => {
    const { getByTestId, queryByTestId } = render(
      <MemoryRouter initialEntries={[{ pathname: ROUTES.HOME }]}>
        <ButtonCreateCustomer />
      </MemoryRouter>,
    );

    const click = jest.fn();
    const button = getByTestId('button');
    button.onclick = click;
    fireEvent.click(button);

    expect(queryByTestId('button')).not.toBeInTheDocument();
  });

  it('Should not render Button', () => {
    const { queryByTestId } = render(
      <MemoryRouter initialEntries={[{ pathname: ROUTES.CREATE_CUSTOMER }]}>
        <ButtonCreateCustomer />
      </MemoryRouter>,
    );

    expect(queryByTestId('button')).not.toBeInTheDocument();
  });
});
