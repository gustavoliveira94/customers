import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Quicksand', sans-serif;
  }
  
  html, body, #root {
    width: 100%;
    height: 100%;
    overflow-y: hidden;
  }
  
`;
