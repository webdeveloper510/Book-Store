import React, { useState } from 'react'
import './ForgotPassword.css'
import LeftImage from "../assests/ForgotPassword/forgot-password.png";
import Logo from "../assests/Login/logo.png";

export const ForgotPassword = () => {
    const [action,setAction] = useState("Forgot Password")
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
    <div className='heading-login'>{action} </div>
    <p>Enter the email  address associated with  your account  </p>  </div>
<form>

    

       <div className="input-container">
        
         <input type="text" name="uname" placeholder='Email' / >
        
       </div>
    
       <div className="button-container">
        <div className="Login">Submit</div>
        
         
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
