import logo from './logo.svg';
import Container from 'react-bootstrap/Container';
import './App.css';
import { Login } from './component/login/Login';
import { ForgotPassword } from './component/forgotPassword/ForgotPassword';
import { Header } from './component/header/Header'
import { Home } from './component/home/Home';

import Routerpage from './component/routes/Routes';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation } from 'react-router-dom';
import { About } from './component/about/About';
function App() {
 
  return (
<div>

<Router>

    
      <Routes>
     
      <Route exact path="/"  element={ <Home/>} /> 
      <Route exact path="/about"  element={ <About/>} /> 
  <Route exact path="/forgotPassword"  element={ <ForgotPassword/>} /> 
  <Route exact path="/login"  element={ <Login/>} /> 
  </Routes>
      </Router>
        </div>

  );
}

export default App;
