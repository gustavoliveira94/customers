import styled from 'styled-components';

export const Container = styled.input<{ validate?: boolean }>`
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.white};
  border: 0;
  margin-bottom: 20px;
  padding: 0 10px;

  ${({ validate }) =>
    validate &&
    `
    border-bottom-width: 1px;
    border-bottom-color: #f21212;
    border-bottom-style: solid;
  `}
`;
