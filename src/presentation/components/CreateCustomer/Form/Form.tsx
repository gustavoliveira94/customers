import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';

import { CustomersContext } from 'presentation/providers';
import { IAddress, ICompany, ICustomer } from 'domain/models/customer';
import { validate } from 'presentation/utils/validateForm';
import { ROUTES } from 'domain/models/routes';
import { Input } from '../Input/Input';

import { Container, Header, Content, Column, Create } from './styles';

export const Form: React.FC = () => {
  const redirect = useNavigate();

  const { customers, setCustomers } = useContext(CustomersContext);

  const [submit, setSubmit] = useState(false);
  const [data, setData] = useState<ICustomer>({} as ICustomer);

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setCustomers([...customers, data]);
    redirect(ROUTES.HOME);
  };

  return (
    <Container onSubmit={onSubmit} data-testid="form">
      <Header>
        <h3>Criar cliente:</h3>
      </Header>
      <Content>
        <Column>
          <Input
            data-testid="name"
            placeholder="Nome"
            required
            onChange={(e) => setData({ ...data, name: e.target.value })}
            validate={submit && validate(data.name).required}
          />
          <Input
            data-testid="email"
            placeholder="E-mail"
            required
            type="email"
            onChange={(e) => setData({ ...data, email: e.target.value })}
            validate={submit && validate(data.email).required}
          />
          <Input
            data-testid="phone"
            placeholder="Telefone"
            required
            onChange={(e) => setData({ ...data, phone: e.target.value })}
            validate={submit && validate(data.phone).required}
          />
          <Input
            data-testid="website"
            placeholder="Site"
            required
            onChange={(e) => setData({ ...data, website: e.target.value })}
            validate={submit && validate(data.website).required}
          />
          <Input
            data-testid="company"
            placeholder="Empresa"
            required
            onChange={(e) =>
              setData({
                ...data,
                company: { name: e.target.value } as ICompany,
              })
            }
            validate={submit && validate(data.company?.name).required}
          />
        </Column>
        <Column>
          <Input
            data-testid="street"
            placeholder="Rua"
            required
            onChange={(e) =>
              setData({
                ...data,
                address: {
                  ...data.address,
                  street: e.target.value,
                } as IAddress,
              })
            }
            validate={submit && validate(data.address?.street).required}
          />
          <Input
            data-testid="suite"
            placeholder="Complemento"
            required
            onChange={(e) =>
              setData({
                ...data,
                address: { ...data.address, suite: e.target.value } as IAddress,
              })
            }
            validate={submit && validate(data.address?.suite).required}
          />
          <Input
            data-testid="city"
            placeholder="Cidade"
            required
            onChange={(e) =>
              setData({
                ...data,
                address: { ...data.address, city: e.target.value } as IAddress,
              })
            }
            validate={submit && validate(data.address?.city).required}
          />
          <Input
            data-testid="zipcode"
            placeholder="CEP"
            required
            onChange={(e) =>
              setData({
                ...data,
                address: {
                  ...data.address,
                  zipcode: e.target.value,
                } as IAddress,
              })
            }
            validate={submit && validate(data.address?.zipcode).required}
          />
        </Column>
      </Content>
      <Create
        type="submit"
        data-testid="button-form"
        onClick={() => setSubmit(true)}
      >
        Criar
      </Create>
    </Container>
  );
};
