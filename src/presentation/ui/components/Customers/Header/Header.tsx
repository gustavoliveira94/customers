import React, { useState, Fragment } from 'react';

import { UserIcon, ArrowDown, ArrowUp } from 'presentation/assets';
import { ICustomers } from '../Customers';

import { Body } from '../Body/Body';

import { Container, Field, Value, Content } from './styles';

export const Header: React.FC<ICustomers> = ({ data: customers }) => {
  const [open, setOpen] = useState<number | null>();

  const openDetails = (index: number) => {
    if (index === open) {
      return setOpen(null);
    }

    setOpen(index);
  };

  const infos = (index: number) => ({
    Nome: customers[index].name,
    'E-mail': customers[index].email,
    Telefone: customers[index].phone,
  });

  return (
    <>
      {customers.length
        ? customers.map(({ id, address, company, website }, index) => {
            const isOpen = index === open;

            return (
              <Container
                data-testid="customer"
                key={id + address.geo.lat}
                open={isOpen}
              >
                <>
                  <Content
                    data-testid="open-button"
                    onClick={() => openDetails(index)}
                  >
                    <UserIcon />
                    {Object.entries(infos(index)).map((info) => {
                      const field = info[0];
                      const value = info[1];

                      return (
                        <Fragment key={field + value}>
                          <Field>{field}:</Field>
                          <Value>{value}</Value>
                        </Fragment>
                      );
                    })}
                    {isOpen ? <ArrowDown /> : <ArrowUp />}
                  </Content>
                  <Body address={address} company={company} website={website} />
                </>
              </Container>
            );
          })
        : null}
    </>
  );
};
