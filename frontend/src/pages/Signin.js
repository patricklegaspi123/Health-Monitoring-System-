import { useState } from "react"
import axios from 'axios'
import React from 'react';
import { useHistory } from "react-router-dom";
import logo from './Images/logo.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Signin =() =>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const history=useHistory();

  const signin = async()=>{
    try{
      const response = await axios.post("http://localhost:6900/signin",{ username, password});
      console.log("Succsess")
      console.log("Here's your data :",response)
      
      history.push("/home");
      
    }catch(e){
      console.log("Sorry you can't login")
      console.log(e.response.data)
      toast.error("Sorry you cant login!")
    }
    
  };
    return(
        
         
      
        <div className="cointainer">
          <img class ="mt-4" src={logo} height="72" alt="Logo"/>    
          <div className="formto">        
          <h3 className="log">Login Form</h3> 

            <input className="txt-field"
            onChange ={(e)=> setUsername(e.target.value)}
            value={username} 
            type="text" 
            placeholder="username"
            />

            <br></br>
            <br></br>
            
            <input className="txt-field"
            onChange ={(e)=> setPassword(e.target.value)} 
            value={password} 
            type="password" 
            placeholder="password"
            />

            <br></br>
            <br></br>
         
            <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            />

          <button className="b1" onClick={()=> signin()}>Sign in</button>
          
            
            
          </div>
        </div>
    );

};

export default Signin