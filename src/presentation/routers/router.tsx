import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Customers, CreateCustomer } from 'presentation/pages';

import { ROUTES } from 'domain/models/routes';

export const Routers: React.FC = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Customers />} />
      <Route path={ROUTES.CREATE_CUSTOMER} element={<CreateCustomer />} />
    </Routes>
  );
};
