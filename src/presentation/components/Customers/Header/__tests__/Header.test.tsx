/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable prefer-const */
import React from 'react';
import { fireEvent } from '@testing-library/react';

import { render } from 'configs/jest/helper/helper';
import { CustomersContext } from 'presentation/providers';

import customersData from './mock.json';

import { Header } from '../Header';

describe('Testing Page <Header />', () => {
  it('Should render customers', () => {
    const { getAllByTestId } = render(
      <CustomersContext.Provider
        value={{ customers: customersData, setCustomers: jest.fn() }}
      >
        <Header />
      </CustomersContext.Provider>,
    );

    const customers = getAllByTestId('customer');

    expect(customers).toHaveLength(2);
  });

  it('Should toggle render details', () => {
    const { getAllByTestId } = render(
      <CustomersContext.Provider
        value={{ customers: customersData, setCustomers: jest.fn() }}
      >
        <Header />
      </CustomersContext.Provider>,
    );

    const details = getAllByTestId('details')[0];
    expect(details).toHaveStyle('height: 0');

    const open = getAllByTestId('open-button')[0];
    fireEvent.click(open);

    expect(details).toHaveStyle('height: 200px');

    fireEvent.click(open);

    expect(details).toHaveStyle('height: 0');
  });

  it('Should not render details', () => {
    const { queryAllByTestId } = render(
      <CustomersContext.Provider
        value={{ customers: [], setCustomers: jest.fn() }}
      >
        <Header />
      </CustomersContext.Provider>,
    );

    const customers = queryAllByTestId('customer');
    expect(customers).toHaveLength(0);
  });
});
