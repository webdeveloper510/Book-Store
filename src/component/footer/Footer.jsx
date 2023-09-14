import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from "../assests/logo/logo.png";
import pay1 from "../assests/Home/pay1 (1).png";
import pay2 from "../assests/Home/pay1 (2).png";
import pay3 from "../assests/Home/pay1 (3).png";
import facbook from "../assests/footer/facebook.png";
import google from "../assests/footer/fe_google.png";
import twiter from "../assests/footer/ri_twitter-fill.png";
import pin from "../assests/footer/basil_instagram-solid.png";
import "./footer.css"
import {Link, NavLink, useNavigate} from 'react-router-dom';
export const Footer = () => {
  return (
    <div>
        <div class="footer">
            <div class="colum">
            <Container>
<Row>
    <Col xs={12}  md={4}>
    <div className='footer1'>
    <img src={Logo} alt='Book store' />
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <div class="paymet">
 <div class="txt-pay">
    <p>Payment Option:</p>
 </div>
 <div class="img-pay">
    <li>
    <img src={pay1} alt='Book store' /> 
    </li>
    <li>
    <img src={pay2} alt='Book store' /> 
    </li>
    <li>
    <img src={pay3} alt='Book store' /> 
    </li>
 </div>
    </div>
    </div>
    </Col>
    <Col xs={12} md={4}>
  <div class="footer2">
    <h2>QUICK LINES</h2>
	<Row>
    <Col xs={12} md={6}>
    <li><NavLink className="links" to="/">Home</NavLink>
    </li>
	<li><NavLink className="links" to="/">Our Authors</NavLink>
    </li>
	<li><NavLink className="links" to="/">Our Story</NavLink>
    </li>
	<li><NavLink className="links" to="/">Our Bookshelf</NavLink>
    </li>
	
    </Col>
    <Col xs={12} md={6}>
	  <li><NavLink className="links" to="/">News</NavLink>
    </li>
	<li><NavLink className="links" to="/">Contact us</NavLink>
    </li>
	<li><NavLink className="links" to="/">Privacy Policy</NavLink>
    </li>
	<li><NavLink className="links" to="/">Terms of Policy</NavLink>
    </li>
    </Col>
	</Row>
  </div>
    </Col >
    <Col xs={12} md={4}>
  <div class="footer3">
<div class="follow-us">
<ul>
    <li>
        <img src={facbook}/>
    </li>
    <li>
        <img src={google}/>
    </li>
    <li>
        <img src={twiter}/>
    </li>
    <li>
        <img src={pin}/>
    </li>
</ul>
</div>
<div class="bottom-btn">
<div class="btn-1">
<NavLink className="btn-light-co" to="/">Submit a Manuscript</NavLink>
</div>
<div class="btn-2">
<NavLink className="btn-light-dark" to="/">Author Log in</NavLink>
</div>
</div>
  </div>
    </Col>
</Row>
</Container>
            </div>

        </div>
    </div>
  )
}
