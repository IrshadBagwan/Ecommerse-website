import React from "react";
import { Container,Row,Col,Card, Button } from "react-bootstrap";


const Practise = () =>{

  
    const DUMMY_MEALS = [
      {
        id: "m1",
        name: "Sushi",
        description: "Finest fish and veggies",
        price: 20,
      },
      {
        id: "m2",
        name: "Vadapav",
        description: "Finest fish and veggies",
        price: 15,
      },
      {
        id: "m2",
        name: "Vadapav",
        description: "Finest fish and veggies",
        price: 15,
      },
      {
        id: "m2",
        name: "Vadapav",
        description: "Finest fish and veggies",
        price: 15,
      },
      {
        id: "m2",
        name: "Vadapav",
        description: "Finest fish and veggies",
        price: 15,
      }
    ]

    return(
        <Container style={{margin:'10px'}}>
            <Row>
               {DUMMY_MEALS.map((item)=>{
                   return(
                    <Col sm={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>
                                {item.name}
                            </Card.Title>
                            <Card.Text>
                               {item.description}
      
                            </Card.Text>
                            <Button>Heelo</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                   );
               })}
           
            </Row>

        </Container>
    );
}

export default Practise;