import { useState,useReducer } from "react";
import CartContext from "./CartContext";

 

const defaultCartState = {
    items:[],
    totalAmount:0,
    
}

const cartReucer = (state, action) =>{
    if(action.type === 'ADD'){
         const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        //  console.log('Total Amount',state.totalAmount);
        //  console.log('Item price',action.item.price);
        //  console.log('item amount',action.item.amount);

        //  console.log('The total amount is',updatedTotalAmount)
        

         const existigCartItemIndex = state.items.findIndex(
             
             item => item.id === action.item.id
             );
            
             
          const existigCartItem = state.items[existigCartItemIndex];
         
          let updatedItems;
          
          if(existigCartItem){
            const updatedItem = {
                ...existigCartItem,
                amount:existigCartItem.amount + action.item.amount
            };
            updatedItems = [...state.items];
            updatedItems[existigCartItemIndex] = updatedItem;
         }else{
            updatedItems = state.items.concat(action.item);
            
         }

        
        
         return {
             items: updatedItems,
             totalAmount: updatedTotalAmount
         };

        

    }

    if(action.type === 'REMOVE'){

        
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.id
        );

        const existingItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingItem.price;
        let updatedItems;
        if(existingItem.amount === 1){
           updatedItems = state.items.filter(item => item.id !== action.id);
        }else{
            const updatedItem = {...existingItem, amount:existingItem.amount-1};
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    return defaultCartState;
};

const CartProvider = props =>{
 
    const [cartState, diapatchCartAction] = useReducer(cartReucer, defaultCartState);
  

    // const [items,updateItems] = useState([]);
    // const [totalAmount,updatetotalAmount] = useState[0];
  
    
    
   
    const addItemToCartHandler = item =>{
    //    updateItems((i)=>console.log(i));
    //    console.log('This is item id',item.id)
    
    console.log('The Item is',item);

     diapatchCartAction({type: 'ADD', item: item});
     console.log('This is amount',item.amount);
     
      
    
    };

    const remvoeItemFromCartHandler = id =>{
       diapatchCartAction({type:'REMOVE', id: id})
    }

    const cartContext = {
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem: addItemToCartHandler ,
        removeItem: remvoeItemFromCartHandler,
        
       
        
    }
   return (<CartContext.Provider value={cartContext}>
       {props.children}
   </CartContext.Provider>
   )
}

export default CartProvider;