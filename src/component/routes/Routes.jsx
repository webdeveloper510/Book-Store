import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import ForgotPassword from './component/forgotPassword/ForgotPassword';
const Routerpage =()=>{
    <Routes>
   
    <Route exact path='/forgotPassword' element={< ForgotPassword />}></Route>
   
</Routes>
}
export default Routerpage;