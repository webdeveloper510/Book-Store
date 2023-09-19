
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
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogout = (event) => {
    event.preventDefault();
    localStorage.clear();
    navigate('/login')
    // window.location.reload(false);
    // window.location.reload();
    // notify();
    
}

  const ss = localStorage.getItem("Loginverfied");
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
        <NavLink exact activeClassName="active" to="/">Home</NavLink>
        </li>
        <li className="nav-item dropdown">
          <NavLink exact activeClassName="active" to="/about">About us</NavLink>
        </li>
        <li className="nav-item">
         <NavLink className="" to="/sellbook">sell book</NavLink>
        </li>
		<li className="nav-item">
      <NavLink exact activeClassName="active" to="/writebook">write book</NavLink>
        </li>
		<li className="nav-item">
           <NavLink exact activeClassName="active" to="/login">courses</NavLink>
        </li>
		<li className="nav-item">
           <NavLink exact activeClassName="active" to="/login">book stores</NavLink>
        </li>
      </ul>
      {      
                            ss == 'Login successfull' ? (
                              <>
                             <li> <NavLink to="/dashboard"> <NavLink className="btn-round" onClick={handleLogout}>Logout</NavLink></NavLink></li> 
                            
                             </>
                          ) : (
                            <>
                                  <NavLink className="btn-round" to="/login">CREATE ACCOUNT</NavLink>
                            </>
                          )
                        }

        </Nav>  
      </Navbar.Collapse>  

 
  </Navbar>  



</Container>
    </div>
  )
}