import React, { useState } from 'react'
import './signup.css'
import { useForm } from "react-hook-form";
import axios from 'axios';
import { API } from "../config/API";
import LeftImage from "../assests/Login/left-photo.jpg";
import Logo from "../assests/Login/logo.png";
import {Link, NavLink, useNavigate} from 'react-router-dom';

import { FaExclamationCircle } from "react-icons/fa";
import { Sucesssignup } from '../popupsignupsucess/Sucesssignup';

export const Signup = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const closePopup = () => {
    // Close the popup when the user clicks "Close" or perform any other desired actions.
    setIsPopupOpen(false);
  };
  const navigate = useNavigate();
  const [fname, setName] = useState('');
const [lname, setLname] = useState('');
const [mail, setMail] = useState('');


const [password, setPassword] = useState('');
const [confrimpass, setConfirmpass] = useState('');

const handlePassword = (e) => {
  setPassword(e.target.value);
}
const handleConfirmPassword =(e) => {
  setConfirmpass(e.target.value);


}

const handleName = (e) => {
  setName(e.target.value);
}
const handleLname =(e) => {
  setLname(e.target.value);

}
const handleEmail =(e) => {
  setMail(e.target.value);

}



  const { register, formState: { errors }, handleSubmit } = useForm();
 const onSubmit = (event) => {
  if (password !== confrimpass) {
    alert("Passwords don't match");

}
else{
  axios.post(API.BASE_URL + '/users/user_signup', {
    f_name:fname,
    l_name:lname,
    email: mail,
    password: password,
     


  }, {
      headers: {
          'Content-Type': 'application/json',
      }
  }, {
  })
  
      .then(function (response) {

        if (response.data.code == 400) {
         alert("email already exists")
      } else {
        console.log("ss API", response);
        setIsPopupOpen(true);
      }
         
        
      })

      .catch(function (error, message) {
        console.log(error);
        if(error.data.code=400){
           alert("email already used");
        }
        

          console.log(error, "klnklnklnknnnnnnnnnnnn");
      })
  }
 

}
  return (
    
<div>
<div className="Login-background">
         {/* login signup code */}
        <div className='inner-div'>
<div className='left_image'>
 
<img src={LeftImage} />

</div>

<div className='right-content'>
<form onSubmit={handleSubmit(onSubmit)}>
<div className="input-container">
  
  <div className='first-name'>
  
      <input placeholder='Frist Name'
        {...register("fname", { required: true })} 
        aria-invalid={errors.fname ? "true" : "false"} 
        onChange={handleName} />
      {errors.fname?.type === 'required' && <p role="alert" className='errors-div'><span><FaExclamationCircle/></span><span>required</span></p>}
</div>
<div className='last-name'>
 
<input placeholder='last Name'
        {...register("lname", { required: false })} 
        aria-invalid={errors.lname ? "true" : "false"} 
        onChange={handleLname} />
   
  

  </div>
  </div>
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

      <div className="input-container">
      <input placeholder='Password'
        {...register("password", { required: "Set password" })} 
        aria-invalid={errors.password ? "true" : "false"} 
        value={password} onChange={handlePassword}/>
     {errors.password?.type === 'required' && <p role="alert" className='errors-div'><span><FaExclamationCircle/></span><span>required</span></p>}
      </div>

      <div className="input-container">
      <input placeholder='Confirm Password'
        {...register("confrimpass", { required: "Set password" })} 
        aria-invalid={errors.confrimpass ? "true" : "false"} 
        value={confrimpass} onChange={handleConfirmPassword}/>
     {errors.confrimpass?.type === 'required' && <p role="alert" className='errors-div'><span><FaExclamationCircle/></span><span>required</span></p>}
     
      </div>
      <div className="button-container">
 
       <div className='signup'>     <input type="submit"  className='signup' value="Sign Up"/></div>
        <div  className='gray Login'><NavLink className="" to="/login">Login</NavLink></div>
      
         
       </div>
      
   
    </form>

</div>

        </div>
        <Sucesssignup isOpen={isPopupOpen} onClose={closePopup} />
          {/* end login signup code */}

            {/* forgot Pass code */}

              {/*  End forgot Pass code */}
    </div>
</div>
   
  )
}

