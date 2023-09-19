import React from 'react'
import Popup from 'reactjs-popup';
import axios from 'axios';
import { API } from "../config/API";
import './popup.css'
import 'reactjs-popup/dist/index.css';
import sucess from "../assests/Home/safe-mail.png"
import {Link, NavLink, useNavigate} from 'react-router-dom';
export const Emailverify = ({ isOpen, onClose }) =>  {
    const emailotp = localStorage.getItem("signup_email");
    const navigate = useNavigate();
    const handelVerifyEmail =(event) => {
        event.preventDefault();
        axios.put(API.BASE_URL + '/users/resend_otp', {
  
            email: emailotp,
           
             
        
        
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
                console.log( localStorage.setItem("verifiaction_otp", resend_otp.data.result
                .otp))
        navigate("/verification")
                    })
      
      }
    return (
        isOpen && (
            <div className="popup-overlay">
              <div className="popup">
                <div className='sus-image'>
    <img src={sucess}></img>
                </div>
                <h2>Verify Your Email address </h2>
                <p><center>Your Email is not verified  Yet! </center> </p>
                
               <div className="button-container">
            <div  className=' Login'><NavLink className=""  onClick={handelVerifyEmail} >Verify Email</NavLink></div>
         
             
       <div  className=' signup'>    <button onClick={onClose} className=''>Close</button></div>
      
             
          </div>
              </div>
            </div>
          )
      )
    }
