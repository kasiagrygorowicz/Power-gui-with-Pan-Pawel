import { Component } from "react";
import Button from "react-bootstrap/Button";
import { Container, Nav, Navbar, NavDropdown, Form, FormControl,Footer } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas"
import { PlusCircle, BoxArrowUpRight } from "react-bootstrap-icons";
import classes from './TopNavBar.module.css'
import { changeLanguage } from "i18next";
import LanguageController from "./LanguageController";

function TopNavBar(props){
    const accounts = 
    [
        "Megan Thee Stalion",
        "Magda Gesler",
        "Pan Paweł"
    ]
    
    

    return(
        <Navbar bg="light" expand={false}>
        <Container fluid>
          <Navbar.Brand href="#">{props.lt('dashboardName')}</Navbar.Brand>
          {/* <LanguageController changeLanguage={props.i18n}/> */}
            <Button onClick={props.toggleTheme}>Toggle theme</Button>
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
        </Container>
      </Navbar>
    );
}

export default TopNavBar;