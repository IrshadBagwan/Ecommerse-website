

import { FaLeaf } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const Message = () =>{

    return(
        <>
        <section style={{height:'100%',marginTop:'200px'}}>
            
        <div style={{textAlign:'center',fontSize:100}}> Please Login First To By Products...</div>
        <div style={{display:"flex",alignItems:'center',justifyContent:'center',paddingTop:'50px'}}>
        <button style={{fontSize:40,textDecoration:'none',backgroundColor:'red',color:'black',border:'1px solid black',borderRadius:'10px'}}><NavLink to="/login">LOGIN</NavLink></button>
        </div>
        </section>

</>
    );
}

export default Message;