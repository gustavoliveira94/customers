/* eslint-disable prefer-const */
import React from 'react';

import { render } from 'configs/jest/helper/helper';

import customersData from './mock.json';

import { Body } from '../Body';

describe('Testing Page <Header />', () => {
  it('Should render details', () => {
    const { getByText } = render(
      <Body
        address={customersData[0].address}
        company={customersData[0].company}
        website={customersData[0].website}
      />,
    );

    expect(getByText('Endereço:')).toBeInTheDocument();
    expect(
      getByText(
        'Rua: Kulas Light, Complemento Apt. 556 - Cidade: Gwenborough - CEP: 92998-3874',
      ),
    ).toBeInTheDocument();

    expect(getByText('Site:')).toBeInTheDocument();
    expect(getByText('hildegard.org')).toBeInTheDocument();

    expect(getByText('Empresa:')).toBeInTheDocument();
    expect(getByText('Romaguera-Crona')).toBeInTheDocument();
  });
});
