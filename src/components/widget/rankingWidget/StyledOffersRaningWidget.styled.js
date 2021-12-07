import styled from "styled-components";
import {Card} from "react-bootstrap";

export const StyledOffersRankingWitget = styled(Card) `
  background-color: ${({ theme }) => theme.widget.backgroundColor};
  width: 420px;
  border-radius: 40px;
  border-width: 3px;
  border-color: ${({ theme }) => theme.widget.borderedColor};

  .container > *:first-child {
    color: ${({ theme }) => theme.widget.title};
  }
    
  .card {
    color: ${({ theme }) => theme.color };
  }
`