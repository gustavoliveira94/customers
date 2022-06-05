import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.grey};
  padding: 50px;
  overflow-y: scroll;
`;
