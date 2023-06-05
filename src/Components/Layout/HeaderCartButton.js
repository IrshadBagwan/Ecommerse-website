import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css';
import CartContext from '../../Store/CartContext';
import { Button } from "react-bootstrap";


const HeaderCartButton = (props) =>{


    const cartctx = useContext(CartContext);

    const numberincartitems = cartctx.items.length;

    // const numberofCartItems  = cartctx.items.reduce((curNumber, item)=>{
    //     return curNumber + item.amount;
    // }, 0)
  
    

    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberincartitems}</span>
        </button>
    )
}

export default HeaderCartButton;