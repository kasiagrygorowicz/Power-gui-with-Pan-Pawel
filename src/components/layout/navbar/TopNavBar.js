import { Component, useState } from "react";
import Button from "react-bootstrap/Button";
import {Container, Nav, Navbar, NavDropdown, Form, FormControl, Footer, Row, Col, Dropdown} from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas"
import { PlusCircle, BoxArrowUpRight, MoonFill } from "react-bootstrap-icons";
import classes from './TopNavBar.module.css'
import { changeLanguage } from "i18next";
import LanguageController from "../../LanguageController";
import {StyledNavbar} from "./TopNavBar.styled";
import { useTranslation } from "react-i18next";



function TopNavBar(props){
    const languages = ['English','Polski']
    const [selectedLanguage, setSelectedLanguage]=useState(languages[0])
    const { t, i18n } = useTranslation();
    const accounts = 
    [
        "Megan Thee Stalion",
        "Magda Gesler",
        "Pan Paweł"
    ]

    return(
        <StyledNavbar expand={false}>
            <Container fluid>
                <Navbar.Brand className={classes.logo} href="#">{props.lt('dashboardName')}</Navbar.Brand>
                {/* <LanguageController changeLanguage={props.i18n}/> */}
                <div className={classes.userUtils}>
                    <div className={`rounded-circle ${classes.circle}`}>
                        <MoonFill size={20} className={classes.moonIcon} onClick={props.toggleTheme}  />
                    </div>
                    <Dropdown className={classes.changeLanguage} align="start" onSelect={(e)=>setSelectedLanguage(e)}>
                        <Dropdown.Toggle className={classes.utilDropdown} id="dropdown-basic"
                        >
                        {selectedLanguage}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {languages.map(l => 
                                <Dropdown.Item  eventKey={l} >{l}</Dropdown.Item>
                                )}
                            {/* <Dropdown.Item  href="#/action-1">English</Dropdown.Item>
                            <Dropdown.Item  href="#/action-2">Polski</Dropdown.Item> */}
                            
                        </Dropdown.Menu>
                    </Dropdown>
                    <Navbar.Toggle className={classes.toggle} aria-controls="offcanvasNavbar" />
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