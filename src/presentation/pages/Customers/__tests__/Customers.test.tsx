/* eslint-disable prefer-const */
import React from 'react';

import { render } from 'configs/jest/helper/helper';

import { ICustomer } from 'domain/models/customer';
import customersData from './mock.json';

import { Customers } from '../Customers';

let data: ICustomer[] = [];

jest.mock('presentation/hooks/useCustomers', () => ({
  useCustomers: () => ({
    data,
  }),
}));

describe('Testing Page <Customers />', () => {
  it('Should render customers', () => {
    data = customersData;

    const { getAllByTestId } = render(<Customers />);

    const customers = getAllByTestId('customer');

    expect(customers).toHaveLength(2);
  });

  it('Should not render customers', () => {
    data = [];

    const { queryByTestId } = render(<Customers />);

    const customers = queryByTestId('customer');

    expect(customers).not.toBeInTheDocument();
  });
});
