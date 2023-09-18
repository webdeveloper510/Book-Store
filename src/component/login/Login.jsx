import React, { useState } from 'react'
import './Login.css'
import { useForm } from "react-hook-form";
import axios from 'axios';
import { API } from "../config/API";
import LeftImage from "../assests/Login/left-photo.jpg";
import Logo from "../assests/Login/logo.png";
import {Link, NavLink, useNavigate} from 'react-router-dom';
import { FaExclamationCircle } from "react-icons/fa";
export const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isDivVisible, setIsDivVisible] = useState(false);
  const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(false);
    const [action,setAction] = useState("Login")

    const handleEmail = (e) => {
      setEmail(e.target.value);
  }
  const handlePassword = (e) => {
    setPassword(e.target.value);
}
 const onSubmit = (event) => {
 


  setLoading(true); // Set loading before sending API request
  axios.post(API.BASE_URL + '/users/user_signin', {
      email: email,
      password: password,
  }, {
      headers: {
          'Content-Type': 'application/json',
      }
  }, {
  })
      .then(function (response) {
    console.log();
    if(response.data.message == "Please verify your email"){
      alert("Please verify your email");

    }
    else if(response.data.message == "Cannot read properties of null (reading 'status')"){
      setIsDivVisible(!isDivVisible);
    }
else{
  console.log(response);
  setIsLoggedIn(true);
  navigate("/")
}
        
      })

      .catch(function (error, message) {
          console.log(error.response)
          setLoading(false); // Stop loading in case of error
          // if(error.response.status){
          //     toast.error(error.response.data.message);
          // }
        

          console.log(error, "klnklnklnknnnnnnnnnnnn");
      })


}
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
    <form onSubmit={handleSubmit(onSubmit)}>

    <error>
{isDivVisible && <div><p role="alert" className='errors-div'>Please Enter Valid details</p></div>}
</error>

<div className="input-container">
      <input placeholder='Email'
        {...register("email", { required: true ,
          pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
        })} 
        aria-invalid={errors.email ? "true" : "false"} 
        onChange={handleEmail} />
      {errors.email?.type === 'required' && <p role="alert" className='errors-div'><span><FaExclamationCircle/></span><span>required</span></p>}
      {errors.email?.type === 'pattern' && <p role="alert" className='errors-div'><span><FaExclamationCircle/></span><span>Enter Valid Email</span></p>}
      </div>
      <div className="input-container">
      <input type ="Password" placeholder='Password'
        {...register("password", { required: "Set password" })} 
        aria-invalid={errors.password ? "true" : "false"} 
        value={password} onChange={handlePassword}/>
     {errors.password?.type === 'required' && <p role="alert" className='errors-div'><span><FaExclamationCircle/></span><span>required</span></p>}
      </div>

	 
	  

       <div className="button-container">
        <div   className="Login"> <div className=''>     <input type="submit"  className='signup' value="Login"/></div></div>
        <div className=  "signup gray"><NavLink className="" to="/signup">Sign Up</NavLink></div>
         
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
