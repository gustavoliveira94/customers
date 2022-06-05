import React from 'react';

import { Customer } from 'domain/models/customer';

import { Header } from '.';

export interface ICustomers {
  data: Customer[];
}

export const Customers: React.FC<ICustomers> = ({ data }) => {
  return <Header data={data} />;
};
