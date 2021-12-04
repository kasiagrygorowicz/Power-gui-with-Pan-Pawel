import styled from "styled-components";
import { Navbar } from "react-bootstrap";
import TopNavBar from "./TopNavBar";

export const StyledNavbar = styled(Navbar)`
    background-color: ${({ theme }) => theme.backgroundColorNavbar};
    
    
    `;