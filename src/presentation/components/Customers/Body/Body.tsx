import React, { Fragment } from 'react';

import { IAddress, ICompany } from 'domain/models/customer';

import { Container, Field, Value } from './styles';

export interface IBody {
  address: IAddress;
  website: string;
  company: ICompany;
}

export const Body: React.FC<IBody> = ({ address, company, website }) => {
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
