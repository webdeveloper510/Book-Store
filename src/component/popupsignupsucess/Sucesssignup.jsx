import React from 'react'
import Popup from 'reactjs-popup';
import './popup.css'
import 'reactjs-popup/dist/index.css';
import sucess from "../assests/Home/success.png"
import {Link, NavLink, useNavigate} from 'react-router-dom';
export const Sucesssignup = ({ isOpen, onClose }) => {
  return (
    isOpen && (
        <div className="popup-overlay">
          <div className="popup">
            <div className='sus-image'>
<img src={sucess}></img>
            </div>
            <h2>Registration Successful</h2>
            <p>Your registration was successful. You can now log in.</p>
            
           <div className="button-container">
        <div  className=' Login'><NavLink className="" to="/login">Login</NavLink></div>
     
         
   <div  className=' signup'>    <button onClick={onClose} className=''>Close</button></div>
  
         
      </div>
          </div>
        </div>
      )
  )
}
