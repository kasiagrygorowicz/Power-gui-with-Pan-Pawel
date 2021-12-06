import styled from "styled-components";
import {Card} from "react-bootstrap";

export const WidgetStyled = styled(Card) `
    background-color: ${({ theme }) => theme.widget.backgroundColor};
    width: 420px;
    height: 220px;
    border-radius: 40px;
    border-width: 3px;
`