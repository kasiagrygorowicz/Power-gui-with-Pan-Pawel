import { Component } from "react";
import Button from "react-bootstrap/Button";
import {Container, Nav, Navbar, NavDropdown, Form, FormControl, Footer, Row, Col, Dropdown} from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas"
import { PlusCircle, BoxArrowUpRight, MoonFill } from "react-bootstrap-icons";
import classes from './TopNavBar.module.css'
import { changeLanguage } from "i18next";
import LanguageController from "../LanguageController";
import {StyledNavbar, StyledTopNavBar} from "./TopNavBar.styled";
import {darkTheme, lightTheme} from "../../theme";
import 'bootstrap/dist/css/bootstrap.min.css'


function TopNavBar(props){
    const accounts = 
    [
        "Megan Thee Stalion",
        "Magda Gesler",
        "Pan Paweł"
    ]

    return(
        <StyledNavbar expand={false}>
            <Container fluid>
                <Navbar.Brand href="#">{props.lt('dashboardName')}</Navbar.Brand>
                {/* <LanguageController changeLanguage={props.i18n}/> */}
                <div className={classes.userUtils}>
                    <div className={`rounded-circle ${classes.circle}`}>
                        <MoonFill size={20} className={classes.moonIcon} onClick={props.toggleTheme}  />
                    </div>
                    <Dropdown align="start">
                        <Dropdown.Toggle className={classes.utilDropdown} id="dropdown-basic">
                            Language
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >

                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">{props.lt('settings')}</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">

                                <Nav.Link href="#action1">{props.lt('accountDetails')}</Nav.Link>



                                <NavDropdown title={props.lt('switchAccount')} id="offcanvasNavbarDropdown">
                                    { accounts.map((item) => {
                                        return <NavDropdown.Item className={"p-2"} href="#account">{item}</NavDropdown.Item>
                                    })}



                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">
                                        <div className={classes.addAccountStyle}>
                                            <PlusCircle />
                                            <div className={"p-2"}>{props.lt('addAccount')}</div>
                                        </div>
                                    </NavDropdown.Item>

                                </NavDropdown>

                                <Nav.Link href="#LogOut" style={{color:"red"}}>{props.lt('logout')}</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </div>







            </Container>

        </StyledNavbar>
    );
}

export default TopNavBar;