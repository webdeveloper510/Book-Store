
import React, {useState, useEffect} from 'react';
import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import ForgotPassword from '../forgotPassword/ForgotPassword';
import { Login } from '../login/Login';
import { Header } from '../header/Header';
import { HashRouter } from "react-router-dom";
import { AuthProvider } from '../context/UserContext';
const Routerpage =()=>{
    <Router>
    <Header></Header>
    <Routes>
<Route exact path="/"  element={ <ForgotPassword/>} /> 
<Route exact path="/Login"  element={ <Login/>} /> 
</Routes>
    </Router>
}
export default Routerpage;