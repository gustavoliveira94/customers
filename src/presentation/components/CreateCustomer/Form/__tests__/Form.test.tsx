/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable prefer-const */
import React from 'react';
import { fireEvent } from '@testing-library/react';

import { CustomersContext } from 'presentation/providers';
import { render } from 'configs/jest/helper/helper';

import { Form } from '../Form';

describe('Testing Component <Form />', () => {
  it('Should send onSubmit', () => {
    const { getByTestId, getByPlaceholderText } = render(
      <CustomersContext.Provider
        value={{ customers: [], setCustomers: jest.fn() }}
      >
        <Form />
      </CustomersContext.Provider>,
    );

    const name = getByPlaceholderText('Nome');
    fireEvent.change(name, { target: { value: 'Teste' } });

    const email = getByPlaceholderText('E-mail');
    fireEvent.change(email, { target: { value: 'teste@teste.com' } });

    const phone = getByPlaceholderText('Telefone');
    fireEvent.change(phone, { target: { value: 'Teste' } });

    const website = getByPlaceholderText('Site');
    fireEvent.change(website, { target: { value: 'Teste' } });

    const company = getByPlaceholderText('Empresa');
    fireEvent.change(company, { target: { value: 'Teste' } });

    const street = getByPlaceholderText('Rua');
    fireEvent.change(street, { target: { value: 'Teste' } });

    const suite = getByPlaceholderText('Complemento');
    fireEvent.change(suite, { target: { value: 'Teste' } });

    const city = getByPlaceholderText('Cidade');
    fireEvent.change(city, { target: { value: 'Teste' } });

    const zipcode = getByPlaceholderText('CEP');
    fireEvent.change(zipcode, { target: { value: 'Teste' } });

    const onSubmit = jest.fn();
    const form = getByTestId('form');
    form.onsubmit = onSubmit;

    const button = getByTestId('button-form');
    fireEvent.click(button);

    expect(onSubmit).toBeCalledTimes(1);
  });

  it('Should not send onSubmit', () => {
    const { getByTestId, getByPlaceholderText } = render(
      <CustomersContext.Provider
        value={{ customers: [], setCustomers: jest.fn() }}
      >
        <Form />
      </CustomersContext.Provider>,
    );

    const name = getByPlaceholderText('Nome');
    fireEvent.change(name, { target: { value: '' } });

    const email = getByPlaceholderText('E-mail');
    fireEvent.change(email, { target: { value: '' } });

    const phone = getByPlaceholderText('Telefone');
    fireEvent.change(phone, { target: { value: '' } });

    const website = getByPlaceholderText('Site');
    fireEvent.change(website, { target: { value: '' } });

    const company = getByPlaceholderText('Empresa');
    fireEvent.change(company, { target: { value: '' } });

    const street = getByPlaceholderText('Rua');
    fireEvent.change(street, { target: { value: '' } });

    const suite = getByPlaceholderText('Complemento');
    fireEvent.change(suite, { target: { value: '' } });

    const city = getByPlaceholderText('Cidade');
    fireEvent.change(city, { target: { value: '' } });

    const zipcode = getByPlaceholderText('CEP');
    fireEvent.change(zipcode, { target: { value: '' } });

    const onSubmit = jest.fn();
    const form = getByTestId('form');
    form.onsubmit = onSubmit;

    const button = getByTestId('button-form');
    fireEvent.click(button);

    expect(onSubmit).toBeCalledTimes(0);
  });
});
