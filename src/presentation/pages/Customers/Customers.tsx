import React from 'react';

import { useCustomers } from 'presentation/hooks/useCustomers';

export const Customers: React.FC = () => {
  const { data } = useCustomers();

  return (
    <div>
      <header>
        <h1>Clientes</h1>
        <p>
          {data?.length
            ? data.map(({ name }) => <p data-testid="customer">{name}</p>)
            : null}
        </p>
      </header>
    </div>
  );
};
