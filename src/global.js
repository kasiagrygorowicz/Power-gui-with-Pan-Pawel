import { createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  
  body {
    background: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.color};
    font-family: "Roboto", sans-serif;
  }`