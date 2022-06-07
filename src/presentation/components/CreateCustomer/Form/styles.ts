import styled from 'styled-components';

export const Container = styled.form`
  width: 800px;
  height: 500px;
  background-color: ${({ theme }) => theme.grey};
  margin: 60px auto;

  @media (max-width: 820px) {
    width: 90%;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.main};
  padding: 0 20px;

  h3 {
    color: ${({ theme }) => theme.white};
    font-size: 18px;
  }
`;

export const Content = styled.div`
  display: flex;
  padding: 20px 0 0;
`;

export const Column = styled.div`
  width: 50%;
  padding: 0 15px;
`;

export const Create = styled.button`
  width: 150px;
  height: 40px;
  background-color: ${({ theme }) => theme.main};
  margin: 0 20px 20px 16px;
  border: 0;
  font-size: 22px;
  color: ${({ theme }) => theme.white};
  cursor: pointer;
`;
