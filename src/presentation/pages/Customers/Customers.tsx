import React from 'react';

import { useCustomers } from 'presentation/hooks/useCustomers';

import { Customers as CustomersData } from 'presentation/ui/components';

import { Container } from './styles';

export const Customers: React.FC = () => {
  const { data } = useCustomers();

  return (
    <Container>
      <CustomersData data={data} />
    </Container>
  );
};
