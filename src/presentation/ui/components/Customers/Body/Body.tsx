import React from 'react';

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
      <a href={website} target="_blank" rel="noreferrer">
        {website}
      </a>
    ),
    Empresa: company.name,
  };

  return (
    <Container id="details">
      {Object.entries(infos).map((info) => {
        const field = info[0];
        const value = info[1];

        return (
          <>
            <Field>{field}:</Field>
            <Value>{value}</Value>
          </>
        );
      })}
    </Container>
  );
};
