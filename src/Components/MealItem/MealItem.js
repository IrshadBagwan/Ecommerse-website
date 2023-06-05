
import React,{useContext} from 'react';
// import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../Store/CartContext';
import { Container,Card,Row,Col,Button } from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';

const MealItem = (props) => {

  
    const cartctx = useContext(CartContext);
    
    const price = `$${props.price.toFixed(2)}`;

    const addCarthandler = () =>{
   
    
          // console.log(props.id)
          cartctx.addItem({
            id: props.id,
            name: props.name,
            amount:props.amount,
            price: props.price,
            image:props.image
            
            
          });
         
      
    
    
     
      
    };


    
  return (

  
    
      <Col  sm={4}>
        <div style={{margin:'10px'}}>
          <Card>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
        
        </Card.Text>
        <Button variant="primary" onClick={addCarthandler}>Add To Cart</Button>
      </Card.Body>
    </Card>
    </div>
    

    </Col>
   
    
   
    
 
  );
};

export default MealItem;


