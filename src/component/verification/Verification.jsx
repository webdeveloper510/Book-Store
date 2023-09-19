import React, { useState, useContext } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import OtpInput from "react18-input-otp";

import { toast } from "react-toastify";
import { API } from "../config/API";
import axios from "axios";

import { Navigate, useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import { Header } from "../header/Header";
import sucess from "../assests/Home/safe-mail.png"
{/* start -- css*/}

 {/* End -- css*/}
export const Verification = () => {
    const myStyle= {
        color: "red",
        fontSize: "13px",
        textTransform: "capitalize",
        marginTop:"4px",
        display:"block",
        textAlign:"center"
     }
     const successStyle= {
        color: "green",
        fontSize: "13px",
        textTransform: "capitalize",
        marginTop:"4px",
        display:"block",
        textAlign:"center"
     }
    const [otp, setOtp] = useState('');
       // start Error mesasge states
       const [EnterOtpText, setEnterOtpText] = useState('');
       const [InvalidotpText, setInvalidotpText] = useState('');
       const [AlreadyverifiedText, setAlreadyverifiedText] = useState('');
       const [loading, setLoading] = useState(false);
       /**************************************************************************
 * ************** Email Verification Api  **********************************
 * ***********************************************************************/
       const navigate = useNavigate();
       
  const handleChange = (enteredOtp) => {
    setOtp(enteredOtp);
  };

  const handleEmailVerification = (event) =>{
    event.preventDefault();
   
    const email = localStorage.getItem("signup_email");
    setLoading(true) // set loading before  sending API request

    axios.post(API.BASE_URL + '/users/verify_otp', {
        otp:otp,
      email:email
     
    
    
      }, {
          headers: {
              'Content-Type': 'application/json',
          }
      }, {
      })
      .then(function (response) {
        setLoading(false)  //stop loading 
        if (response.data.code == 400){
          console.log(response);
          setInvalidotpText(response.data.message);
            
        }
        else{
            if(window.location.pathname=="/forgotPassword"){
navigate("/set-password")
            }
            else{
                localStorage.setItem("otp", email)
                navigate("/")
            }
           
        }
      
		    })

            .catch(function(error, message) {
                console.log(error.response)
                setLoading(false) // stop loading in case with error
                // if(error.response.status){
                //     // toast.error(error.response.data.message); 
                  
                // } 
                setEnterOtpText(error.response.data.Enterotp);
                setInvalidotpText(error.response.data.Invalidotp);
                console.log(error, "klnklnklnknnnnnnnnnnnn");   
            })
      
    }
    /// handel resend otp ...

    const handleResendOtp = (event) =>{
        event.preventDefault();
       
        const email = localStorage.getItem("signup_email");
        setLoading(true) // set loading before  sending API request
    
        axios.put(API.BASE_URL + '/users/resend_otp', {
            email: email,
         
        
        
          }, {
              headers: {
                  'Content-Type': 'application/json',
              }
          }, {
          })
          .then(function (response) {
            console.log(response);
                })
          
        }


  return (
    <div>

    <div className="Login-background">
        <div  className="OTP-screen">
<div className="center-div-otp">
<img src={sucess}></img>
<h5 className="Sign-heading">Verify your Account</h5>
                                        <p>A verification code sent to your email. Please enter the code to continue.</p>
                                        <div className="form_verification">
            
                                            <form>

      
    <OtpInput
                                            value={otp}
                                            onChange={handleChange}
                                            numInputs={6}
                                            isSuccessed={true}
                                            successStyle="success"
                                            separator={<span></span>}
                                            separateAfter={3}
                                            className="verification_input"
                                            onSubmit={console.log(otp)}
                                            
                                        />
                                         <span  style={myStyle}>{EnterOtpText? EnterOtpText: ""}</span> 
                                                <span  style={myStyle}>{InvalidotpText? InvalidotpText: ""}</span> 
                                        <div className="center_div">

                                        <button variant="primary" 
                                                type="submit"
                                                className="btn-round"
                                               
                                                onClick={handleEmailVerification}     >
                                               Continue
                                                </button>



   <button variant="primary" 
                                                type="submit"
                                                className="btn-round"
                                               
                                                onClick={handleResendOtp}     >
                                                    Resend OTP
                                                
                                                </button>
                                                </div>



                                        </form>
                                        </div>
                                        </div>
                                        </div>
                                        </div>
                                        </div>
  )
}
