import React, { useState } from 'react'
import './ForgotPassword.css'
import {Link, NavLink, useNavigate} from 'react-router-dom';
import LeftImage from "../assests/ForgotPassword/forgot-password.png";
import Logo from "../assests/Login/logo.png";
import axios from 'axios';
import { FaExclamationCircle } from "react-icons/fa";
import { API } from "../config/API";
import { useForm } from "react-hook-form";
import { Verification } from '../verification/Verification';

export const ForgotPassword = ({ showOneDiv }) => {
  const [showComponentA, setShowComponentA] = useState(true);
  const [mail, setMail] = useState('');
  const handleEmail =(e) => {
    setMail(e.target.value);
  
  }
  
  const { register, formState: { errors }, handleSubmit } = useForm();
    const [action,setAction] = useState("Forgot Password")
    const navigate = useNavigate();
    const handleForgotpass = (event) => {
      event.preventDefault();
   localStorage.setItem("signup_email",mail);
      axios.put(API.BASE_URL + '/users/resend_otp', {
  
        email: mail,
       
         
    
    
      }, {
          headers: {
              'Content-Type': 'application/json',
          }
      }, {
      })
           .then(function (resend_otp) {
            console.log(resend_otp);
            localStorage.setItem("verifiaction_otp", resend_otp.data.result
            .otp);
            

            setShowComponentA(!showComponentA);
 
            })
    }
  return (
    

    <div >
         {/* login signup code */}


         {showOneDiv ? (
        <div>
          <h2>Rendered Div</h2>
          <p>This is the content of the rendered div.</p>
        </div>
      ) : (
        <div>
         {showComponentA && (
          <div className="Login-background">
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
        
       <div className="input-container">
      <input placeholder='Email'
        {...register("mail", { required: true ,
          pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
        })} 
        aria-invalid={errors.mail ? "true" : "false"} 
        onChange={handleEmail} />
      {errors.mail?.type === 'required' && <p role="alert" className='errors-div'><span><FaExclamationCircle/></span><span>required</span></p>}
      {errors.mail?.type === 'pattern' && <p role="alert" className='errors-div'><span><FaExclamationCircle/></span><span>Enter Valid Email</span></p>}
      </div>
        
       </div>
    
       <div className="button-container">
        <div className="Login" onClick={handleForgotpass}>Submit</div>
        
         
       </div>
     </form>
</div>
        </div>
        </div>
              )}
              {!showComponentA && <Verification></Verification>}
              </div>
           
              )}
    </div>
  )
}
export default ForgotPassword ;