import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios';
import { API } from "../config/API";
import './ForgotPassword.css'
import resetpass from "../assests/ForgotPassword/reset-password.png";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FaExclamationCircle } from "react-icons/fa";
import { NavLink, Link, useNavigate } from "react-router-dom";
export const SetPassword = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [showConfirmPassword, setshowConfirmPassword] = useState(false);
  const [password, setPassword] = useState('');
const [confrimpass, setConfirmpass] = useState('');
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const togglePassword= () => {
    setshowConfirmPassword(!showConfirmPassword);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  }
  const handleConfirmPassword =(e) => {
    setConfirmpass(e.target.value);
  
  
  }
  const mail = localStorage.getItem("signup_email");
  const onSubmit = (event) => {
    if (password !== confrimpass) {
      setActive(true);
 
    
    
      
  
  }
  else{
    setActive(false)

  
      console.log(mail);
      axios.post(API.BASE_URL + '/users/forgot_password', {
       email: mail,
       password:password,
         
    
    
      }, {
          headers: {
              'Content-Type': 'application/json',
          }
      }, {
      })
           .then(function (response) {
            console.log(response);
          navigate("/login")
          
 
            })
  }
}
  return (
    <div>   <div className="Login-background">
      <div class="set-pass">
      <form onSubmit={handleSubmit(onSubmit)}>
        <img src={resetpass}>

        </img>
      <h5 class="Sign-heading">Change Password</h5>
<div className="input-container">
      <input placeholder='Password'
       type={showPassword ? 'text' : 'password'}
        {...register("password", { required: "Set password" })} 
        aria-invalid={errors.password ? "true" : "false"} 
        value={password} onChange={handlePassword}/>
     {errors.password?.type === 'required' && <p role="alert" className='errors-div'><span><FaExclamationCircle/></span><span>required</span></p>}
     <span className="pass_icons" type="button" onClick={togglePasswordVisibility}>
                                                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                                                    </span>
      </div>

      <div className="input-container">
      <input placeholder='Confirm Password'
       type={showConfirmPassword ? 'text' : 'password'}
        {...register("confrimpass", { required: "Set password" })} 
        aria-invalid={errors.confrimpass ? "true" : "false"} 
        value={confrimpass} onChange={handleConfirmPassword}/>
     {errors.confrimpass?.type === 'required' && <p role="alert" className='errors-div'><span><FaExclamationCircle/></span><span>required</span></p>}
     <span className="pass_icons" type="button" onClick={togglePassword}>
{showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                                           </span>

      </div>
      <span className={active == true ? 'not_match' : 'hide'}>
  <p className='errors-div'>Password do not match</p></span>
      <div className='signup'>     <input type="submit"  className='signup' value="Submit"/></div>
</form>
      </div>
      </div>
    </div>
  )
}
