import React from 'react';

import { ROUTES } from 'domain/models/routes';

import { useLocation } from 'react-router-dom';
import { Container, Back } from './styles';

export const Header: React.FC = () => {
  const { pathname } = useLocation();
  const shouldRenderBack = pathname !== ROUTES.HOME;

  return (
    <Container>
      {shouldRenderBack ? <Back to={ROUTES.HOME}>Voltar</Back> : null}
      <h2>Clientes</h2>
    </Container>
  );
};
