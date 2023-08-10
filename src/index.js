import ReactDOM from 'react-dom/client';


import './index.css';
import App from './App';

// React Bootstarp Configuration
import '../node_modules/react-bootstrap/dist/react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import CartProvider from './Store/CartProvider';
import { AuthContextProvider } from './Components/Store/auth-context.js';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AuthContextProvider><CartProvider><App /></CartProvider></AuthContextProvider>);
