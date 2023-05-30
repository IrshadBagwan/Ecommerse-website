import React from "react";
import {Container,Button} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Cart from "./Cart/Cart";



const Navbarr = props =>{

   

    return(
       
        
       
        
            <>
              <Navbar bg="dark" variant="dark">
                <Container>
                  <Navbar.Brand href="#home">MY STORE</Navbar.Brand>
                  <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Store</Nav.Link>
                    <Nav.Link href="#pricing">About</Nav.Link>
                    
                  </Nav>
                 
                      <Button onClick={props.onClick}>Cart</Button>
                  
                </Container>
              </Navbar>
              <br />
            
        
            
            </>
          );
        }
        
        

    

export default Navbarr;