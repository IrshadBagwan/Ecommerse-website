import { useContext, useRef, useState } from "react";
import CartContext from "../Store/CartContext";

const CartItem = (props) =>{
    const cartctx = useContext(CartContext);


    

    
    return(
        <>
        <tr>
            <div><td>{props.name}</td><div><img style={{width:'50px'}} src={props.image} alt="image"/></div></div>
        
        <td>{props.price}</td>
        <div style={{display:'flex',justifyContent:'space-between',width:'100px'}}><button onClick={props.onAdd}>+</button> <span style={{width:'25px', color:'black'}}>{props.amount}</span><button onClick={props.onRemove}>-</button></div>
      
    </tr>
  
    </>
    );
}

export default CartItem;