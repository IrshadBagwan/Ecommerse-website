import React,{ Fragment } from 'react';
// import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = props =>{
   
     return <Fragment>
         <header>
         <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"><h1>MyStore</h1></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <HeaderCartButton onClick={props.onShowCart}/>
        </Container>
      </Navbar>
            
            
         </header>
        
     </Fragment>
};

export default Header;