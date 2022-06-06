/* eslint-disable prefer-const */
import React from 'react';

import { render } from 'configs/jest/helper/helper';

import { CreateCustomer } from '../CreateCustomer';

describe('Testing Page <CreateCustomer />', () => {
  it('Should render form', () => {
    const { getByTestId } = render(<CreateCustomer />);

    expect(getByTestId('form')).toBeInTheDocument();
  });
});
