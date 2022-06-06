/* eslint-disable prefer-const */
import React from 'react';
import { render } from '@testing-library/react';

import { CustomersProvider } from '../Customers';

describe('Testing Page <Header />', () => {
  const Component: React.FC = () => <h1>Component</h1>;

  it('Should render text: Clientes', () => {
    const { getByText } = render(
      <CustomersProvider>
        <Component />
      </CustomersProvider>,
    );

    const component = getByText('Component');

    expect(component).toBeInTheDocument();
  });
});
