import {BrowserRouter,Routes,Route} from 'react-router-dom';
import About from './Components/About';
import Cart from './Components/Cart';
import Contact from './Components/Contact';
import Login from './Components/Login';
import Store from './Components/Store';
import Home from './Components/Home';
import SingleProduct from './Components/SingleProduct';
import Error from './Components/Error';
import Header from './Components/header/Header.js';
import Fotter from './Components/Fotter';
import AuthContext from './Components/Store/auth-context';
import { useContext } from 'react';
import Message from './Components/Message';


function App() {

 const autctx = useContext(AuthContext);

return (
   <BrowserRouter>
   <Header />

   <Routes>
     <Route path="/" element={<Home/> }/>
     {!autctx.isLoggedIn && <Route path="/store" element={<Login/>}/>}
     {autctx.isLoggedIn && <Route path="/store" element={<Store/>}/>}
     <Route path="/contact" element={<Contact/> }/>
     <Route path="/about" element={<About/> }/>
     <Route path="/login" element={<Login/> }/>
     {!autctx.isLoggedIn && <Route path="/cart" element={<Message/>}/>}
     {autctx.isLoggedIn && <Route path="/cart" element={<Cart/>}/>}
     <Route path="/store/product/:id" element={<SingleProduct/> }/>
     <Route path="*" element={<Error/> }/>
   </Routes>
  
   <Fotter />
   
   </BrowserRouter>
   
  );
}

export default App;
