import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 25px;
  bottom: 15px;
  width: 60px;
  height: 60px;
  background-color: ${({ theme }) => theme.main};
  border-radius: 50%;
  text-decoration: none;
  color: ${({ theme }) => theme.white};
  font-size: 40px;
`;
