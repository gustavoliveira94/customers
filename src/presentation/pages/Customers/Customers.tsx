import React from 'react';

import { Customers as CustomersData } from 'presentation/components';

import { Container } from './styles';

export const Customers: React.FC = () => {
  return (
    <Container>
      <CustomersData />
    </Container>
  );
};
