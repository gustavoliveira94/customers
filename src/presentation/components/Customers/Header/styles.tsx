import styled from 'styled-components';

export const Container = styled.div<{ open: boolean }>`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  width: 100%;
  filter: drop-shadow(rgba(0, 0, 0, 0.1) 0px 4px 10px);
  background-color: ${({ theme }) => theme.white};
  padding: 20px 25px;
  margin-bottom: 20px;
  transition: 0.5s;

  #details {
    width: 100%;
    height: ${({ open }) => (open ? '200px' : '0')};
    padding: ${({ open }) => (open ? '10px' : '0')};
    background-color: ${({ theme }) => theme.grey};
    transition: 0.5s;
  }

  svg {
    margin-right: 20px;

    :first-child {
      min-width: 30px;
      min-height: 30px;
    }

    :last-child {
      position: absolute;
      right: 20px;
    }
  }
`;

export const Content = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 20px 0;
`;

export const Field = styled.p`
  font-weight: 600;
  margin-right: 10px;
  white-space: nowrap;
`;

export const Value = styled.p`
  width: 200px;
  margin-right: 60px;
  white-space: nowrap;
`;
