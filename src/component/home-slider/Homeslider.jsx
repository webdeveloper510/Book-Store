import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import Slider1 from "../assests/Slider/Slider1.png";
import Container from 'react-bootstrap/Container';
import './Homeslider.css'
import {Link, NavLink, useNavigate} from 'react-router-dom';
export const Homeslider = () => {
  return (
    <div> <AwesomeSlider>
  <div data-src={Slider1} className='slider-content'><Container><h2>Feast your eyes on
<br></br><span class="colred-text">good book!</span></h2>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br></br>labore et dolore magna aliqua.</p> <NavLink className="btn-round" to="/">Discover More</NavLink></Container></div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
  </AwesomeSlider></div>
  )
}
