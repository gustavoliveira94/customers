import React, { Fragment } from 'react';

import { ICustomer } from 'domain/models/customer';

import { Container, Field, Value } from './styles';

export const Body: React.FC<
  Pick<ICustomer, 'address' | 'company' | 'website'>
> = ({ address, company, website }) => {
  const infos = {
    Endereço: `Rua: ${address.street}, Complemento ${address.suite} - Cidade: ${address.city} - CEP: ${address.zipcode}`,
    Site: (
      <a href={`https://${website}`} target="_blank" rel="noreferrer">
        {website}
      </a>
    ),
    Empresa: company.name,
  };

  return (
    <Container id="details" data-testid="details">
      {Object.entries(infos).map((info) => {
        const field = info[0];
        const value = info[1];

        return (
          <Fragment key={website + address.zipcode}>
            <Field>{field}:</Field>
            <Value>{value}</Value>
          </Fragment>
        );
      })}
    </Container>
  );
};
