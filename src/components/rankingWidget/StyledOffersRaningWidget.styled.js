import styled from "styled-components";
import { Container } from "react-bootstrap";

export const StyledOffersRankingWitget = styled(Container) `
  .card {
    color: ${({ theme }) => theme.color };
    background-color: ${({ theme }) => theme.inputColor };
  }
`