import styled from "styled-components";
import { Container } from "react-bootstrap";

export const StyledDashboard = styled(Container) `
  .card-body {
    color: ${({ theme }) => theme.color };
  }
`