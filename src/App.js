import logo from './logo.svg';
import Container from 'react-bootstrap/Container';
import './App.css';
import { Login } from './component/login/Login';
import { ForgotPassword } from './component/forgotPassword/ForgotPassword';
import { Header } from './component/header/Header'
import { Home } from './component/home/Home';
import { Sellbook } from './component/sellbook/Sellbook';
import Routerpage from './component/routes/Routes';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation } from 'react-router-dom';
import { About } from './component/about/About';
import {Signup} from './component/Signup/Signup'
import { Verification } from './component/verification/Verification';
import { Writebook } from './component/writebook/Writebook';
import { SetPassword } from './component/forgotPassword/SetPassword';
import { AddBook } from './component/sellbook/Addbook';
function App() {
 
  return (
<div>


<Router>
<Header></Header>
    
      <Routes>
     
      <Route exact path="/"  element={ <Home/>} /> 
      <Route exact path="/about"  element={ <About/>} /> 
  <Route exact path="/forgotPassword"  element={ <ForgotPassword/>} /> 
  <Route exact path="/login"  element={ <Login/>} /> 
  <Route exact path="/sellbook"  element={ <Sellbook/>} /> 
  <Route exact path="/signup"  element={ <Signup/>} /> 
  <Route exact path="/writebook"  element={<Writebook></Writebook>} /> 
  <Route exact path="/verification"  element={ <Verification/>} /> 
  <Route exact path="/set-password"  element={ <SetPassword></SetPassword>} /> 
  <Route exact path="/add-book"  element={ <AddBook/>} /> 
  </Routes>
      </Router>
        </div>

  );
}

export default App;
