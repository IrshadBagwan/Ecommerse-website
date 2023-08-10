import { useContext } from 'react';
import '../Components/Cart.css';
import CartContext from '../Store/CartContext';
import CartItem from './CartItem';

const Cart = () =>{
  
  
    const cartctx = useContext(CartContext);

    
  
  {console.log('So amount is',cartctx.totalAmount)}
    const hasItem = cartctx.items.length > 0;
  
    const cartItemRemoveHandler = (id) => {
      cartctx.removeItem(id);
    };
  
    const cartItemAddHandler = (item) => {
      console.log('The item is here',item)
      cartctx.addItem({...item, amount:1})
      console.log(item.amount);
    };

    const items = (cartctx.items.map((item)=>(
          <CartItem  name={item.name}
            image={item.image}
            price={item.price}
            amount={item.amount}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}    
         
          
          
          />
    ))
    )

    
    

    return (
      <>
      <section className='sec'>
          <table className="table">
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    
                </tr>
            </thead>
           
                
 <tbody id="expenseTable">
 {items}

</tbody>
                
           
           
        </table>
      </section>
     
      <section className='total'>
<div style={{width:'500px',border:'2px solid black',display:'flex',justifyContent:'space-around'}}><h1>Total Amount:</h1><h1>Rs.{cartctx.totalAmount}</h1></div>
</section>

     
      </>
    );
}


export default Cart;