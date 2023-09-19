import React from 'react'
import { Header } from '../header/Header'
import { Breadcrumb } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import { FaHome } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { Footer } from '../footer/Footer';
import'./About.css'
import {Link, NavLink, useNavigate} from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import About1 from'../assests/about/about1.jpg'
import { Showcase } from '../showcasebox/Showcase';
export const About = () => {
  return (
   
    <div> 
<header className='page-header'>
<Container>
  <div className='page-title'>
  <h2>About Us</h2>
  <div className='page-info'>
  
  </div>
 
  </div>
					</Container>
					</header>
                    <div className='page-content'>
                    <Container>
                        <div className='sec1 padd-60'>
<Row>
    <Col md ={6} xs={12}>
    <div className='book-heading no-line content-left-align'>
<div className='book-heading-prefix'> Who we are</div>
<h2 className='book-title'>We care about your business than your money!</h2>
<div className='book-heading-border'>
<div className="book-heading tripple content-left-align">
<h2 className="book-title">Bring to the table win-win survival strategies to ensure proactive domination.</h2>
<div className="book-heading-border"></div></div>
<p className='content-about'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
<div class="button-container"><div class="books"> <NavLink className="btn-round" to="/">View my books</NavLink></div><div class="read"><NavLink className="btn-round" to="/">Read More</NavLink></div></div>
</div>
</div>
            </Col>
            <Col md ={6} xs={12}>
        <div className='about-img'>
            <img src={About1}>

            </img>
        </div>
        </Col>
</Row>


                        </div>
						<div className='sec2 padd-60'>
<h2 className='book-title center'><center>We're BookChoix</center></h2>
<p className='content-about'><center>Iterative approaches to corporate strategy foster
<br></br>
collaborative thinking to further the overall value proposition.</center></p>
<Row>
<Col md ={6} xs={12}>
<div className="book_call-to-action">
<div className="book_cta-icon-prefix"> 
<span className="book_cta-icon book_text-8xl book_text-transparent"> <FaBookOpen/> </span>
<div className="book_cta-icon-text"> Read books online</div></div>
<div className="book_cta-content"><div class="book_cta-heading book_text-lg book_no-underline"> Browse over 12 Million books</div>
<p className='content-about'> Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits</p>
<div class="button-container"><div class="books"> <NavLink className="btn-round" to="/">View my books</NavLink></div></div>
 </div>
 </div>
    </Col>
    <Col md ={6} xs={12}>
	<div className="book_call-to-action">
<div className="book_cta-icon-prefix bg-or"> 
<span className="book_cta-icon book_text-8xl book_text-transparent"> <FaBookOpen/> </span>
<div className="book_cta-icon-text"> 24/7 ONLINE SUPPORT</div></div>
<div className="book_cta-content"><div class="book_cta-heading book_text-lg book_no-underline">We are here to help!</div>
<p className='content-about'> Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits</p>
<div class="button-container"><div class="books"> <NavLink className="btn-round" to="/">Contact Us</NavLink></div></div>
 </div>
 </div>
        </Col>
</Row>
</div>
<div className=' padd-60'>
    </div>

                    </Container>
                    <div className='sec3 padd-60'>
                        <Container>
                        <h2 className='book-title center'><center>Featured Authors</center></h2>
                       
                        <p className='content-about'> <center>Collaboratively administrate empowered markets via <br></br
                        >plug-and-play networks. Dynamically procrastinate B2</center></p>
                        <Showcase></Showcase>

                        </Container>
    </div>
                    </div>
		<Footer></Footer>			
</div>
  )
}
