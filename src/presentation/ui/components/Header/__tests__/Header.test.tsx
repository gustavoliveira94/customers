/* eslint-disable prefer-const */
import React from 'react';

import { render } from 'configs/jest/helper/helper';

import { Header } from '../Header';

describe('Testing Page <Header />', () => {
  it('Should render text: Clientes', () => {
    const { getByText } = render(<Header />);

    const customers = getByText('Clientes');

    expect(customers).toBeInTheDocument();
  });
});
