import React from 'react';
import { useLocation } from 'react-router-dom';

import { ROUTES } from 'domain/models/routes';

import { Container } from './styles';

export const ButtonCreateCustomer: React.FC = () => {
  const { pathname } = useLocation();
  const shouldRender = pathname !== ROUTES.CREATE_CUSTOMER;

  return shouldRender ? (
    <Container to={ROUTES.CREATE_CUSTOMER} data-testid="button">
      +
    </Container>
  ) : null;
};
