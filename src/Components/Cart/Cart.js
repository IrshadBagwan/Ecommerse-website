import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../Store/CartContext";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartcntx = useContext(CartContext);
{console.log('So amount is',cartcntx.totalAmount)}
  const hasItem = cartcntx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartcntx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    console.log('The item is here',item)
    cartcntx.addItem({...item, amount:1})
  };

  const cartItems = (
  
      cartcntx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          image={item.image}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))
  
  );
  return (
    <Modal onClose={props.onClose}>
       <section style={{margin:'0', padding:'0',maxHeight:'20rem', overflow: 'auto'}}>
    <table class="table" style={{maxHeight:'20rem'}}>
        <thead>
            <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                
            </tr>
        </thead>
        <tbody>
        {cartItems}
        </tbody>
        </table>
        </section>
       
     

      <div className={classes.total}>
        <span>Total Amount{cartcntx.str}</span>
        <span>{cartcntx.totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItem && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;

// margin: 0;
// padding: 0;
// max-height: 20rem;
// overflow: auto;