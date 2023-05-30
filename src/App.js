import React,{useState} from 'react';
import Screen from './Components/Layout/Screen';
import Navbarr from './Components/Navbar';
import Cart from './Components/Cart/Cart';



function App() {
 
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () =>{
    setCartIsShown(true);
  }

  const hideCartHandler = () =>{
    setCartIsShown(false);
  }

 

  return (
    <>
     {cartIsShown && <Cart onClose={hideCartHandler}/>}
    <Navbarr onClick={showCartHandler} />
   <Screen />

   </>
  );
}

export default App;
