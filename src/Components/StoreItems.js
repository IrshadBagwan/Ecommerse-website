
import React,{useContext} from 'react';


import CartContext from '../Store/CartContext';
import { Container,Card,Row,Col,Button } from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';
// import Singleproductpage from '../Singleproductpage/Singleproductpage';
import { Link, NavLink, useNavigate } from 'react-router-dom';


const StoreItems = (props) => {

    const navigate = useNavigate();
    const cartctx = useContext(CartContext);
    
    const price = `$${props.price.toFixed(2)}`;

    const addCarthandler = () =>{
      const amount = 1;
   
          
          console.log(props.name)
          cartctx.addItem({
            id: props.id,
            name: props.name,
            amount:amount,
            price: props.price,
            image:props.image
            
            
          });
         
          for(let i=0;i<=cartctx.items.length;i++){
            console.log(cartctx.items[i]);
          }
    
    
     
      
    };

  

    
  return (

 
    
      <Col  sm={4}>
           {/* <NavLink to={`product/${props.id}/${props.name}/${props.image}`} key={props.id}>
          */}
        <div style={{margin:'10px'}}>
        
          <Card onClick={()=>{navigate(`product/${props.id}`)}}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
       
        </Card.Text>
        <Button variant="primary" onClick={addCarthandler}>Add To Cart</Button>
      </Card.Body>
    </Card>
    
    </div>
   
    
    {/* </NavLink> */}
    </Col>
   
    
   
    
 
  );
};

export default StoreItems;


