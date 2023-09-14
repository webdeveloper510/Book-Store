import React, { useState } from 'react'
import './Login.css'
import LeftImage from "../assests/Login/left-photo.jpg";
import Logo from "../assests/Login/logo.png";
import {Link, NavLink, useNavigate} from 'react-router-dom';
export const Login = () => {
    const [action,setAction] = useState("Login")
  return (
    

    <div className="Login-background">
         {/* login signup code */}
        <div className='inner-div'>
<div className='left_image'>
 
<img src={LeftImage} />

</div>

<div className='right-content'>
    <div className='logo-top'>
        
    <img src={Logo} />
    <div className='heading-login'>{action} to your account </div>
    </div>
<form>

    {action==="Login"?<div></div>:<div className="input-container">
        
        <input type="text" name="uname" placeholder='Name' / >
       
      </div>}

       <div className="input-container">
        
         <input type="text" name="uname" placeholder='Email' / >
        
       </div>
       <div className="input-container">
         
         <input type="password" name="pass" placeholder='Password' />
       
       </div>
	   {action==="Login"?<div></div>:<div className="input-container">
        <input type="password" name="pass" placeholder='Confirm Password' />
       
      </div>}
	  
       {action==="Sign Up"?<div></div>:
       <div className="for-reset">
        <div className="forget"><a href=""  onClick={()=>{setAction("Forgot your password?")}}><NavLink className="links" to="/forgotPassword">Forgot your password?</NavLink></a></div>
        <div className="reset"><a href="">Reset your password?</a></div>
       </div>
}
       <div className="button-container">
        <div className= {action==="Sign Up"?"Login gray":"Login"} onClick={()=>{setAction("Login")}}>Login</div>
        <div className= {action==="Login"?" signup gray":"signup"}onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
         
       </div>
     </form>
</div>
        </div>
          {/* end login signup code */}

            {/* forgot Pass code */}

              {/*  End forgot Pass code */}
    </div>
  )
}
