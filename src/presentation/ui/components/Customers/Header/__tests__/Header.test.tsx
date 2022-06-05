/* eslint-disable prefer-const */
import React from 'react';
import { fireEvent } from '@testing-library/react';

import { render } from 'configs/jest/helper/helper';

import customersData from './mock.json';

import { Header } from '../Header';

describe('Testing Page <Header />', () => {
  it('Should render customers', () => {
    const { getAllByTestId } = render(<Header data={customersData} />);

    const customers = getAllByTestId('customer');

    expect(customers).toHaveLength(2);
  });

  it('Should toggle render details', () => {
    const { getAllByTestId } = render(<Header data={customersData} />);

    const details = getAllByTestId('details')[0];
    expect(details).toHaveStyle('height: 0');

    const open = getAllByTestId('open-button')[0];
    fireEvent.click(open);

    expect(details).toHaveStyle('height: 200px');

    fireEvent.click(open);

    expect(details).toHaveStyle('height: 0');
  });

  it('Should not render details', () => {
    const { queryAllByTestId } = render(<Header data={[]} />);

    const customers = queryAllByTestId('customer');
    expect(customers).toHaveLength(0);
  });
});
