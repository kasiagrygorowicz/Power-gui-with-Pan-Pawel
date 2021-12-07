import styled from "styled-components";
import { Navbar, NavbarBrand } from "react-bootstrap";

export const StyledNavbar = styled(Navbar)`
      background-color: ${({ theme }) => theme.navbar.backgroundColor};
      color: ${({ theme }) => theme.color};
  
      div:first-child > div > *:first-child {
        color: ${({ theme }) => theme.color};
        background-color: ${({ theme }) => theme.navbar.utilColor};
      }

      *[align="start"] {
        color: ${({ theme }) => theme.color};
        background-color: ${({ theme }) => theme.navbar.utilColor};
      }
      
      Toggle {
        background-color: ${({ theme }) => theme.toggleColor};
        color: ${({ theme }) => theme.toggleColor};
      }
  
      .Toggle {
        background-color: ${({ theme }) => theme.toggleColor};
        color: ${({ theme }) => theme.toggleColor};
      }

      Brand {
        background-color: ${({ theme }) => theme.toggleColor};
        color: ${({ theme }) => theme.toggleColor};
      }
  
      .Brand {
        background-color: ${({ theme }) => theme.toggleColor};
        color: ${({ theme }) => theme.toggleColor};
      }
  
      & .Brand {
        background-color: ${({ theme }) => theme.toggleColor};
        color: ${({ theme }) => theme.toggleColor};
      }
  
      & .Toggle {
        background-color: ${({ theme }) => theme.toggleColor};
        color: ${({ theme }) => theme.toggleColor};
      }
    
      .language-menu {
          background-color: ${({ theme }) => theme.languageColor };
          color: ${({ theme }) => theme.color };
          border-color: ${({ theme }) => theme.navbar.borderColor };
      }
    `;