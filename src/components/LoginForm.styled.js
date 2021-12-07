import styled from "styled-components";
import {Container, FormGroup} from "react-bootstrap";

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

export const ButtonStructure = styled(FormGroup)`
display: flex;
  justify-content: space-between;
  align-items: center;
`

export const QuestionLabel = styled(FormGroup)`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  //line-height: 19px;
`