import React, { useState } from 'react'
import Popup from 'reactjs-popup';
import './sellbook.css'
import 'reactjs-popup/dist/index.css';
import { useForm } from "react-hook-form";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { API } from "../config/API";
import book from "../assests/Home/open-book.png"
import {Link, NavLink, useNavigate} from 'react-router-dom';
import { FaExclamationCircle } from "react-icons/fa";
export const AddBook = ({ isOpen, onClose }) => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [name, setName] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [bookurl, SetBookurl] = useState('');
    const [info, setInfo] = useState('');
     // Validation rules for the file input
     const token = localStorage.getItem("token");

     const handleName = (e) => {
        setName(e.target.value);
    }
    const handleFileInputChange = (event) => {
        const file = event.target.files[0]; // Get the first selected file (you can handle multiple files if needed)
    
        setSelectedFile(file.name);
      
   
      }
    const handleBookurl = (e) => {
        console.log("checking url++++++++++++++++++++++++++++",e.target.value);
        SetBookurl(e.target.value);
    }
    const handlInfo = (e) => {
        setInfo(e.target.value);
    }
  const onSubmit = (event) => {
    axios.post(API.BASE_URL + '/users/add_book', {
  
        book_name: name,
        cover_image: selectedFile,
        book_store_info: info,
        listening_url: bookurl,
    
    
      }, {
          headers: {
              'Content-Type': 'application/json',
              'x-access-token': token,
          }
      }, {
      })
           .then(function (response) {
            console.log(response);
           
                })
}
  
  return (
  
    <div className="Login-background">
    {/* login signup code */}
   <div className='inner-div'>
       <div class="OTP-screen height">
        <div class="center-div-otp">
<img src={book}></img>
            <h5 className='Sign-heading'>Add Your Book</h5>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            <div className='addbook-form'>
            <form onSubmit={handleSubmit(onSubmit)}>
<Row>
<Col md ={12} xs={12}>
<div className="input-container">

<div className=''>
  <label>Book name</label>
  <input
    {...register("name", { required: true })} 
    aria-invalid={errors.name ? "true" : "false"} 
 onChange={handleName} />
  {errors.name?.type === 'required' && <p role="alert" className='errors-div'><span><FaExclamationCircle/></span><span>required</span></p>}
</div>
      </div>
 
    </Col>
    <Col md ={12} xs={12}>
    <div className='input-container'>
    <label>Cover Image</label>
    <input type="file" onChange={handleFileInputChange} name="selectedFile"/>
  
  
  
</div>
    </Col>

    <Col md ={12} xs={12}>
<div className="input-container">

<div className=''>
  <label>Bookstore Information</label>
  <input type="textarea"
    {...register("info", { required: true })} 
    aria-invalid={errors.info ? "true" : "false"} onChange={handlInfo}
  />
  {errors.info?.type === 'required' && <p role="alert" className='errors-div'><span><FaExclamationCircle/></span><span>required</span></p>}
</div>
      </div>
 
    </Col>

    <Col md ={12} xs={12}>
<div className="input-container">

<div className=''>
  <label>URL for Book Listing</label>
  <input type="url"


    {...register("bookurl", { required: true })} 
    aria-invalid={errors.url ? "true" : "false"} 
    onChange={handleBookurl} 
  />
  {errors.bookurl?.type === 'required' && <p role="alert" className='errors-div'><span><FaExclamationCircle/></span><span>required</span></p>}
</div>
      </div>
 
    </Col>
</Row>
<div className="button-container">
        <div  className=' Login'><input type="submit"  className='signup' value="Add book"/></div>
     
         

  
         
      </div>
                </form>
            </div>
         
         </div> 
         </div>
         </div>
         </div>
    
      )
  
}
