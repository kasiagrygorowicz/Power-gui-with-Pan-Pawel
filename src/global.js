import { createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

  html {
    position: relative;
    min-height: 100%;
  }
  
  body {
    background: ${({ theme }) => theme.backgroundColor};
    font-family: "Roboto", sans-serif;
    margin-bottom: 43px;
  }`