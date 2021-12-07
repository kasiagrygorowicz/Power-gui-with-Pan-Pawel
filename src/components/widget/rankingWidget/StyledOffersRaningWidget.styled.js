import styled from "styled-components";
import {Card} from "react-bootstrap";

export const StyledOffersRankingWitget = styled(Card) `
  background-color: ${({ theme }) => theme.widget.backgroundColor};
  width: 420px;
  border-radius: 40px;
  border-width: 3px;
  border-color: ${({ theme }) => theme.widget.borderedColor};
    
  .card {
    color: ${({ theme }) => theme.color };
  }
`