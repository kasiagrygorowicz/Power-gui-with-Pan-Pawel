import styled from "styled-components";
import { Container } from "react-bootstrap";

export const StyledLoginForm = styled(Container) `
  padding-top: 20px;
  
  input {
    background-color: ${({ theme }) => theme.inputColor};
    color: ${({ theme }) => theme.color};
  }

  input:focus {
    background-color: ${({ theme }) => theme.inputColor};
    color: ${({ theme }) => theme.color};
  }
  
  input::placeholder {
    color: ${({ theme }) => theme.color};
  }
`