
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

<nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
<Navbar.Brand href="/"><img src={Logo} alt='Book store' /></Navbar.Brand>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
       
        <li class="nav-item">
        <NavLink className="" to="/">Home</NavLink>
        </li>
        <li class="nav-item dropdown">
          <NavLink className="" to="/">About us</NavLink>
        </li>
        <li class="nav-item">
         <NavLink className="" to="/">sell book</NavLink>
        </li>
		<li class="nav-item">
      <NavLink className="" to="/">write book</NavLink>
        </li>
		<li class="nav-item">
           <NavLink className="" to="/">courses</NavLink>
        </li>
		<li class="nav-item">
           <NavLink className="" to="/">book stores</NavLink>
        </li>
      </ul>
      <NavLink className="btn-round" to="/login">CREATE ACCOUNT</NavLink>

    </div>
  </div>
</nav>


</Container>
    </div>
  )
}