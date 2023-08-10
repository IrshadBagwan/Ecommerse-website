
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import '../Components/SingleProductsPage.css';
import { productsArr } from "./AvailableItems";
import AvailableItems from "./AvailableItems";
import CartContext from '../Store/CartContext';


const Singleproductpage = ()=>{

  const {id} = useParams();

  const cartctx = useContext(CartContext);

  const addtocart = ()=>{
      const amount = 1;
      console.log(id)
      cartctx.addItem({
            id: productsArr[id-1].id,
            name: productsArr[id-1].title,
            amount:amount,
            price: productsArr[id-1].price,
            image:productsArr[id-1].imageUrl
            
            
          });
  }

  


    return(
          <>
       
               
       
       <div class="containerr">
    <div class="cardd">
        <div class="top-row">
          
            <span></span>
            {/* "https://i.imgur.com/6eTQOgK.jpg" */}
            <img src={productsArr[id-1].imageUrl}/>
        </div>
        <div class="medium-row">
            <div class="dollor">
                <p>Rs: {productsArr[id-1].price}</p>
            </div>
            <div class="circle">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="letters" style={{paddingLeft:'30px'}}>
                <p>S</p>
                <p>M</p>
                <p class="L">L</p>
                <p>XL</p>
                <p>XXL</p>
            </div>
        </div>
        <div style={{marginTop:'40px',paddingLeft:'80px'}}>
              {productsArr[id-1].title}
              
        </div>
       
        <button class="buttons" onClick={addtocart}>Add to Cart</button>
        
       
    </div>
</div>
          
          </>
          
         
          
    );

}

export default Singleproductpage;