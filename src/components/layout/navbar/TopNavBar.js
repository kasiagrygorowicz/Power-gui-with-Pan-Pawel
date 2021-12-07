import { Component, useEffect, useState } from "react";
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
    const { t, i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage]=useState(()=>{
        if(localStorage.getItem('i18nextLng')=="pl"){
                return languages[1]
        }
        return languages[0]
    })
   

    function setAppLanguage(e){
        setSelectedLanguage(e);
        if(selectedLanguage=='English'){
            localStorage.setItem('i18nextLng','eng');
            i18n.changeLanguage(localStorage.getItem(JSON.stringify('i18nextLng')))
           
        }
        if(selectedLanguage=='Polski'){
            localStorage.setItem('i18nextLng', 'pl');
            i18n.changeLanguage(localStorage.getItem(JSON.stringify('i18nextLng')))
            
        }
        
        

        
        
    }
    const accounts = 
    [
        "Megan Thee Stalion",
        "Magda Gesler",
        "Harry Potter"
    ]

    return(
        <StyledNavbar expand={false}>
            <Container fluid>
                <Navbar.Brand className={classes.logo} href="#">{t('dashboardName')}</Navbar.Brand>
                {/* <LanguageController changeLanguage={props.i18n}/> */}
                <div className={classes.userUtils}>
                    <div className={`rounded-circle ${classes.circle}`}>
                        <MoonFill size={20} className={classes.moonIcon} onClick={props.toggleTheme}  />
                    </div>
                    <Dropdown className={classes.changeLanguage} align="start" onSelect={setAppLanguage}>
                        <Dropdown.Toggle  className={classes.utilDropdown} id="dropdown-basic"
                        >
                        {selectedLanguage}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {languages.map(l => 
                                <Dropdown.Item eventKey={l}  active={l===selectedLanguage}>{l}</Dropdown.Item>
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
                            <Offcanvas.Title id="offcanvasNavbarLabel">{t('settings')}</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">

                                <Nav.Link href="#action1">{t('accountDetails')}</Nav.Link>



                                <NavDropdown title={t('switchAccount')} id="offcanvasNavbarDropdown">
                                    { accounts.map((item) => {
                                        return <NavDropdown.Item className={"p-2"} href="#account">{item}</NavDropdown.Item>
                                    })}



                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">
                                        <div className={classes.addAccountStyle}>
                                            <PlusCircle />
                                            <div className={"p-2"}>{t('addAccount')}</div>
                                        </div>
                                    </NavDropdown.Item>

                                </NavDropdown>

                                <Nav.Link href="#LogOut" style={{color:"red"}}>{t('logout')}</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </div>







            </Container>

        </StyledNavbar>
    );
}

export default TopNavBar;