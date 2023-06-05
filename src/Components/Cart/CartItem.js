import { Button } from 'react-bootstrap';
import classes from './CartItem.module.css';



const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  

  return (
   
   
      
      <tr>
        
        <td>{props.price}
        <div><img style={{width:'50px'}} src={props.image}></img></div>
        </td>
        
       <td><p>{props.name}</p></td> 
       <td> <input type="number" style={{width:'30px'}}></input>
        <Button variant='danger' style={{margin:'10px'}}>Remove</Button></td>
      </tr>
     
 
    
    
  );
};

export default CartItem;
