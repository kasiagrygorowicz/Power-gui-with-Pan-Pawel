import styled from "styled-components";
import { Navbar, NavbarBrand } from "react-bootstrap";

export const StyledNavbar = styled(Navbar)`
      background-color: ${({ theme }) => theme.navbar.backgroundColor};
      color: ${({ theme }) => theme.color};
  
      div:first-child > div > *:first-child {
        color: ${({ theme }) => theme.color};
        background-color: ${({ theme }) => theme.navbar.circleColor};
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
    `;