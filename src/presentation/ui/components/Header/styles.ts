import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80px;
  filter: drop-shadow(rgba(0, 0, 0, 0.1) 0px 4px 10px);
  background-color: #fff;

  h2 {
    color: ${({ theme }) => theme.main};
    font-weight: 600;
    text-transform: uppercase;
  }
`;
