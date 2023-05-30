import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";


const Screen = props =>{

    const productsArr = [

        {
        
        title: 'Colors',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        
        },
        
        {
        
        title: 'Black and white Colors',
        
        price: 50,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        
        },
        
        {
        
        title: 'Yellow and Black Colors',
        
        price: 70,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        
        },
        
        {
        
        title: 'Blue Color',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        
        }
        
        ]
        
        

    return(<>
        <Container className="mt-3">
        <Row md={3}>
            {productsArr.map((e)=>{
                return (
                    <Col sm={4}>
                        <div className="holder" style={{margin:'10px'}}>
                <Card>
                <Card.Img src={e.imageUrl} alt="hel"></Card.Img>
                <Card.Body>
                    <Card.Title>{e.title}</Card.Title>
                <p>{e.price}</p>
                </Card.Body>
                </Card>
                </div>
                </Col>)
            })}
            </Row>
            </Container>
       
        </>
    );
}

export default Screen;