
import React, {useEffect, useState} from "react";
import {Link, NavLink, useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import UserContext from '../context/UserContext';
import './Header.css'



import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from "../assests/logo/logo.png";

export const Header = () => {
  
  return (
    <div className="header_top">
<Container>


<Navbar  expand="lg">  

     <Navbar.Brand href="/"><img src={Logo} alt='Book store' /></Navbar.Brand> 
      <Navbar.Toggle aria-controls="basic-navbar-nav" />  
      <Navbar.Collapse id="basic-navbar-nav">  
        <Nav className="">  
         <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
       
        <li className="nav-item">
        <NavLink className="" to="/">Home</NavLink>
        </li>
        <li className="nav-item dropdown">
          <NavLink className="" to="/about">About us</NavLink>
        </li>
        <li className="nav-item">
         <NavLink className="" to="/">sell book</NavLink>
        </li>
		<li className="nav-item">
      <NavLink className="" to="/">write book</NavLink>
        </li>
		<li className="nav-item">
           <NavLink className="" to="/">courses</NavLink>
        </li>
		<li className="nav-item">
           <NavLink className="" to="/">book stores</NavLink>
        </li>
      </ul>
      <NavLink className="btn-round" to="/login">CREATE ACCOUNT</NavLink>
        </Nav>  
      </Navbar.Collapse>  

 
  </Navbar>  



</Container>
    </div>
  )
}