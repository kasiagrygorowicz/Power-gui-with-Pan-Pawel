import styled from "styled-components";
import { Navbar, NavbarBrand } from "react-bootstrap";

export const StyledNavbar = styled(Navbar)`
      background-color: ${({ theme }) => theme.navbar.backgroundColor};
      color: ${({ theme }) => theme.color};
  
      div:first-child > div > *:first-child {
        color: ${({ theme }) => theme.color};
        background-color: ${({ theme }) => theme.navbar.utilColor};
      }
    
      .language-menu {
          background-color: ${({ theme }) => theme.languageColor };
          color: ${({ theme }) => theme.color };
          border-color: ${({ theme }) => theme.navbar.borderColor };
      }
  
      .languages {
        background-color: ${({ theme }) => theme.languageColor };
        border-color: ${({ theme }) => theme.navbar.borderColor };
      }
  
      .language-item {
        color: ${({ theme }) => theme.color };
      }

      .Offcanvas.Header {
        color: ${({ theme }) => theme.color};
      }
    `;