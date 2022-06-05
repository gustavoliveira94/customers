import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.grey};
  transition: 0.5s;
  overflow: hidden;
  padding: 10px;
`;

export const Field = styled.p`
  font-weight: 600;
`;

export const Value = styled.p`
  margin-bottom: 15px;
`;
