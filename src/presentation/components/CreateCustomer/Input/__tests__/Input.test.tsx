/* eslint-disable prefer-const */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { validate } from 'presentation/utils';

import { Input } from '../Input';

describe('Testing Page <Input />', () => {
  it('Should render css warning', () => {
    const { getByPlaceholderText } = render(
      <Input placeholder="Digite seu nome" validate={validate('').required} />,
    );

    const input = getByPlaceholderText('Digite seu nome');
    fireEvent.change(input, { target: { value: 'Gustavo Oliveira' } });

    expect(input).toHaveStyle(
      'border-bottom-width: 1px; border-bottom-color: #f21212; border-bottom-style: solid;',
    );
  });

  it('Should render text onChange', () => {
    const { getByPlaceholderText } = render(
      <Input placeholder="Digite seu nome" validate={validate('').required} />,
    );

    const input = getByPlaceholderText('Digite seu nome');
    fireEvent.change(input, { target: { value: 'Gustavo Oliveira' } });

    expect(input).toHaveValue('Gustavo Oliveira');
  });

  it('Should type equal number', () => {
    const { getByPlaceholderText } = render(
      <Input placeholder="Digite um número" type="number" />,
    );

    const input = getByPlaceholderText('Digite um número');

    expect(input).toHaveProperty('type', 'number');
  });
});
