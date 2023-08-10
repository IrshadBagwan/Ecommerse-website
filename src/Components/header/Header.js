
import React,{useRef,useContext, useState} from "react";
import { NavLink } from "react-router-dom";
import '../header/Header.css';
import {FaBars,FaTimes} from 'react-icons/fa';
import {BsCart4} from 'react-icons/bs';
import CartContext from "../../Store/CartContext";
import AuthContext from "../Store/auth-context";

const Header =() =>{

  const [showMediaIcons, setMediaIcons] = useState(false);

  const authctx = useContext(AuthContext);
   
  const navRef = useRef();

  

  const cartctx = useContext(CartContext);

  const numberofCartItems  = cartctx.items.reduce((curNumber, item)=>{
      return curNumber + item.amount;
  }, 0)
 

  const logoutHandler = () =>{
    authctx.logout();
  }
  
 

    return(
        <header>
          
         
        <div className="logo" style={{display:'flex'}}><span>I</span><div style={{color:'white'}}>rshad.</div></div>
        <ul className={showMediaIcons ? "mobile-menu-link" : "navlist"} id="navlist" ref={navRef}>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/store">Store</NavLink></li>
        {!authctx.isLoggedIn && <li><NavLink to="/login">login</NavLink></li>}
        {authctx.isLoggedIn && 
          <li>
            <button onClick={logoutHandler} style={{border:'none',color:'white',backgroundColor:'black',fontSize:'18px',marginTop:'7px',fontWeight:'500'}}>Logout</button>
          </li>}
        <li><NavLink to="/cart">Cart <BsCart4 style={{marginBottom:'10px',fontSize:'20px'}}/><span>{numberofCartItems}</span></NavLink></li>
        </ul>
   
      
       <a href="#" className="menu-icon" onClick={() => setMediaIcons(!showMediaIcons)}> 
         {!showMediaIcons && <FaBars />}
         {showMediaIcons && <FaTimes/>}
       </a>
      </header>
    );
}

export default Header;