import styled from "styled-components";
import { Container } from "react-bootstrap";

export const StyledDailyTipsWitget = styled(Container) `
  .card {
    color: ${({ theme }) => theme.color };
  }
`