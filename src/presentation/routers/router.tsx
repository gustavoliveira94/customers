import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Customers } from 'presentation/pages';

export const Routers: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Customers />} />
      </Routes>
    </BrowserRouter>
  );
};
