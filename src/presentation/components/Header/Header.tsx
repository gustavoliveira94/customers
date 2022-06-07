import React from 'react';
import { useLocation } from 'react-router-dom';

import { ROUTES } from 'domain/models/routes';
import { ArrowLeft } from 'presentation/assets/ArrowLeft';

import { Container, Back } from './styles';

export const Header: React.FC = () => {
  const { pathname } = useLocation();
  const shouldRenderBack = pathname !== ROUTES.HOME;

  return (
    <Container>
      {shouldRenderBack ? (
        <Back data-testid="voltar" to={ROUTES.HOME}>
          <ArrowLeft height="14px" width="14px" />
        </Back>
      ) : null}
      <h2>Clientes</h2>
    </Container>
  );
};
