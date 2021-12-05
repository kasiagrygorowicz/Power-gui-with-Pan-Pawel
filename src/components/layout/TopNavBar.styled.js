import styled from "styled-components";
import { Navbar } from "react-bootstrap";

export const StyledNavbar = styled(Navbar)`
      background-color: ${({ theme }) => theme.backgroundColorNavbar};
      color: ${({ theme }) => theme.color};
      
    
  
      & .Brand {
        background-color: ${({ theme }) => theme.toggleColor};
        color: ${({ theme }) => theme.toggleColor};
      }
  
      & .Toggle {
        background-color: ${({ theme }) => theme.toggleColor};
        color: ${({ theme }) => theme.toggleColor};
      }
    `;