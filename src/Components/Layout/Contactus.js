import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import  Button  from 'react-bootstrap/Button';
import { useRef } from 'react';
import classes from './Contactus.module.css';

const Contactus = ()=>{

    const NameRef = useRef('');
    const EmailRef =  useRef('');
    const NumberRef = useRef('');



  
   
 
   
    const submitHandler = async (e)=>{
      e.preventDefault();

      const data = {
        name: NameRef.current.value,
        email:  EmailRef.current.value,
        phone: NumberRef.current.value
    }
       const response = await fetch('https://contactusecomerse-default-rtdb.firebaseio.com/contact.json', {
         method: 'POST',
         body: JSON.stringify(data),
         headers: {
           'Content-Type':'application/json'
         }
       });
       const dt = await response.json();
       console.log(dt);

         NameRef.current.value='';
         EmailRef.current.value='';
         NumberRef.current.value='';
    }
   
    return (

      <form onSubmit={submitHandler} >
        
      <div className={classes.control}>
        <label htmlFor='username'>Name</label>
        <input type='text' id='name' ref={NameRef} required />
      </div>
      <div className={classes.control}>
        <label htmlFor='email'>Email</label>
        <input type='text' rows='5' id='email' ref={EmailRef} required/>
      </div>
      <div className={classes.control}>
        <label htmlFor='number'>Number</label>
        <input type='number' id='number' ref={NumberRef} required />
      </div>
      <div className={classes.button}>
      <button>Submit</button>
        </div>
        
    </form>
        
      
          
          );
        }
        
        
  

export default Contactus;
