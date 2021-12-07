import styled from "styled-components";
import { Container } from "react-bootstrap";

export const StyledOrdersWitget = styled(Container) `
  .card {
    color: ${({ theme }) => theme.color };
    height: 256px;
  }
`