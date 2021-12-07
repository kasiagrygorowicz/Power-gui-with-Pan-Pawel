import styled from "styled-components";
import Widget from "../widget/Widget";
import { Card } from "react-bootstrap";

export const ClientsOpinionsStyled = styled(Card) `
    background-color: ${({ theme }) => theme.widget.backgroundColor};
    width: 420px;
    border-radius: 40px;
    border-width: 3px;
    border-color: ${({ theme }) => theme.widget.borderedColor};
`