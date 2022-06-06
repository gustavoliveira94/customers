import React, { createContext, useEffect, useState, useMemo } from 'react';

import { ICustomer } from 'domain/models/customer';
import { useCustomers } from 'presentation/hooks/useCustomers';

interface ICustomersProvider {
  children: React.ReactNode;
}

interface ICustomerContext {
  customers: ICustomer[];
  setCustomers: React.Dispatch<React.SetStateAction<ICustomer[]>>;
}

export const CustomersContext = createContext({} as ICustomerContext);

export const CustomersProvider: React.FC<ICustomersProvider> = ({
  children,
}) => {
  const [customers, setCustomers] = useState<ICustomer[]>([]);
  const { data } = useCustomers();

  useEffect(() => {
    if (data.length) {
      setCustomers(data);
    }
  }, [data]);

  const value = useMemo(
    () => ({ customers, setCustomers }),
    [customers, setCustomers],
  );

  return (
    <CustomersContext.Provider value={value}>
      {children}
    </CustomersContext.Provider>
  );
};
