import { Fragment, useState } from 'react';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals'
import Cart from './Components/Cart/Cart';
import CartProvider from './Store/CartProvider';
import CartContext from './Store/CartContext';
import Practise from './Components/MealItem/practise'
import { BrowserRouter as Router,Route,Link,Switch,Routes, BrowserRouter } from 'react-router-dom';
import Aboutus from './Components/Meals/Aboutus';
import Home from './Components/Meals/Home';


function App() {

 

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () =>{
    setCartIsShown(true);
  }

  const hideCartHandler = () =>{
    setCartIsShown(false);
  }

  return (
    <CartProvider>
    
      
      
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler} />
    
      <BrowserRouter>
     <Routes>
       
       
     
        <Route path='/' element={<Meals/>}/>
        <Route path='store' element={<Meals/>}/>
        <Route path="/home" element={<Home/>}/>
       <Route path="aboutus" element={<Aboutus/>}/>
       </Routes>
      </BrowserRouter>
      
      
    </CartProvider>
  );
}

export default App;
