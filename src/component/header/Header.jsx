
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
import { Login } from "../login/Login";

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    // Perform login logic here (e.g., set user as logged in)
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Perform logout logic here (e.g., set user as logged out)
    setIsLoggedIn(false);
  };
  return (
    <div className="header_top">
<Container>


<Navbar  expand="lg">  

     <Navbar.Brand href="/"><img src={Logo} alt='Book store' /></Navbar.Brand> 
     {isLoggedIn ? (
          <>
            
            <button onClick={handleLogout}>Log Out</button> {/* Display a logout button */}
          </>
        ) : (
          <NavLink exact activeClassName="active" to="/">Home</NavLink>
        )}
     
      <Navbar.Toggle aria-controls="basic-navbar-nav" />  
      <Navbar.Collapse id="basic-navbar-nav">  
        <Nav className="">  
         <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
       
        <li className="nav-item">
        <NavLink exact activeClassName="active" to="/">Home</NavLink>
        </li>
        <li className="nav-item dropdown">
          <NavLink exact activeClassName="active" to="/about">About us</NavLink>
        </li>
        <li className="nav-item">
         <NavLink className="" to="/sellbook">sell book</NavLink>
        </li>
		<li className="nav-item">
      <NavLink exact activeClassName="active" to="/login">write book</NavLink>
        </li>
		<li className="nav-item">
           <NavLink exact activeClassName="active" to="/login">courses</NavLink>
        </li>
		<li className="nav-item">
           <NavLink exact activeClassName="active" to="/login">book stores</NavLink>
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