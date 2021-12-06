import styled from "styled-components";
import { Container } from "react-bootstrap";

export const StyledSalesQualityWitget = styled(Container) `
  .card {
    color: ${({ theme }) => theme.color };
    background-color: ${({ theme }) => theme.inputColor };
  }
`