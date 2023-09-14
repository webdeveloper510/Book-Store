import React from 'react'
import Container from 'react-bootstrap/Container';
import { Homeslider } from '../home-slider/Homeslider';
import { Showcase } from '../showcasebox/Showcase';
import { Header } from '../header/Header';
import { Footer } from '../footer/Footer'
import aboutbg from "../assests/Home/aboutbg.png";
import aboutleft from "../assests/Home/about1.png";
import sellbbok from "../assests/Home/sell.png";
import write from "../assests/Home/write.png";
import course1 from "../assests/Home/course1.png";
import course2 from "../assests/Home/course1 (2).png";
import course3 from "../assests/Home/course1 (3).png";
import bookstore from "../assests/Home/bookstore.png";
import showcase1 from "../assests/Home/showcase1 (1).png";
import showcase2 from "../assests/Home/showcase1 (2).png";
import showcase3 from "../assests/Home/showcase1 (3).png";
import showcase4 from "../assests/Home/showcase1 (4).png";
import money from "../assests/Home/sub.png";

import'./home.css'
import {Link, NavLink, useNavigate} from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Home = () => {
  return (
    <div>
          <Header></Header>
<Homeslider></Homeslider>
{/* about code */}
<div className="about-us-sec">
    <div className="inner-about">
        <div className="abt-title"><div className="right-bg"><h2>About us</h2></div></div>
        <div className='bottom_content with-height'>
		<div class="left-img">
		<img src ={aboutleft} />

		</div>
		      <div className="right-contnet">
              
            <Container>
      
<h2>Hey, I’m Samuel Nicola
    <br></br>
Get Started & Learning Today</h2>
<h3>Consectetur adipisicing elit, sed do eiusmod tempor <br></br>incididunt labore magna Utas enim ad minim veniamh quis nostrud.</h3>
           <p>Exercitation ullamco laboris nisiuts duis aute irure dolor in reprehenderit ina <br></br> voluptate velit esse sed cillum dolor fugiat nulla pariatur excepteur sint.Occaecat <br></br> nony proident sunt in culpa qui deser sit cupidatate sed ipsum dolor eiusmod <br></br>tempor incididunts.</p>
           <div class="button-container"><div class="books"> <NavLink className="btn-round" to="/">View my books</NavLink></div><div class="read"><NavLink className="btn-round" to="/">Read More</NavLink></div></div>
         
        </Container>
		   </div>
        </div>
    </div>

</div>
{/* end code */}

{/* 3end rd code */}
<div className="thrid-sec bggray">
<div className='bottom_content'>
      <div className="right-contnet">
              
            <Container>
      
<h2> Sell Book</h2>
<h3>Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore magna Utas enim ad minim veniamh quis nostrud.</h3>
           <p>Exercitation ullamco laboris nisiuts duis aute irure dolor in reprehenderit ina voluptate velit esse sed cillum dolor fugiat nulla pariatur excepteur sint.Occaecat nony proident sunt in culpa qui deser sit cupidatate sed ipsum dolor eiusmod tempor incididunts.</p>
           <div class="button-container"><div class="books"> <NavLink className="btn-round" to="/">Sell Book</NavLink></div></div>
         
        </Container>
		   </div>
<div class="left-img">
		<img src ={sellbbok} />

		</div>
    </div>
</div>
{/* 3rd code */}
{/* 4 code */}
<div className="about-us-sec">
    <div className="inner-about">
       
        <div className='bottom_content'>
		<div class="left-img">
		<img src ={write} />

		</div>
		      <div className="right-contnet">
              
            <Container>
      
<h2>Write Book</h2>
<h3>Consectetur adipisicing elit, sed do eiusmod tempor <br></br>incididunt labore magna Utas enim ad minim veniamh quis nostrud.</h3>
           <p>Exercitation ullamco laboris nisiuts duis aute irure dolor in reprehenderit ina <br></br> voluptate velit esse sed cillum dolor fugiat nulla pariatur excepteur sint.Occaecat <br></br> nony proident sunt in culpa qui deser sit cupidatate sed ipsum dolor eiusmod <br></br>tempor incididunts.</p>
           <div class="button-container"><div class="books"> <NavLink className="btn-round" to="/">Sell Book</NavLink></div></div>
         
        </Container>
		   </div>
        </div>
    </div>

</div>
{/*  Book  end code */}

{/* book rd code */}
<div className="thrid-sec bggray">
<div className='bottom_content'>
      <div className="right-contnet">
              
            <Container>
      
<h2> Sell Book</h2>
<h3>Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore magna Utas enim ad minim veniamh quis nostrud.</h3>
           <p>Exercitation ullamco laboris nisiuts duis aute irure dolor in reprehenderit ina voluptate velit esse sed cillum dolor fugiat nulla pariatur excepteur sint.Occaecat nony proident sunt in culpa qui deser sit cupidatate sed ipsum dolor eiusmod tempor incididunts.</p>
           <div class="button-container"><div class="books"> <NavLink className="btn-round" to="/">Sell Book</NavLink></div></div>
         
        </Container>
		   </div>
<div class="left-img">
		<img src ={bookstore} />

		</div>
    </div>
</div>
{/* 3rd code */}

{/* Courses code */}

<div className="thrid-sec bggray">
<div class="course-title"><div class="title-bg"><h2>Courses</h2></div></div>
<div className='bottom_content'>
<Container className='pad-30'>
<Row>
       <Col  md ={4} xs={12}><div className="course-info">
            <div className='iner-info'>
                <div className='icon-co'>
                    <img src={course1}/>
                    <h3>Best Coaching</h3>
                    <p>Unde omnis iste natus error sit <br></br>oluptal tem accusantium dolore <br></br> lamque laudant.</p>
                    <div class="button-container"><div class="btn-center"> <NavLink className="btn-round" to="/">read more</NavLink></div></div>
                </div>
                </div></div></Col>
       <Col  md ={4} xs={12}><div className="course-info">
            <div className='iner-info'>
                <div className='icon-co'>
                    <img src={course3}/>
                    <h3>Smart Planning</h3>
                    <p>Unde omnis iste natus error sit <br></br>oluptal tem accusantium dolore <br></br> lamque laudant.</p>
                    <div class="button-container"><div class="btn-center"> <NavLink className="btn-round" to="/">read more</NavLink></div></div>
                </div>
                </div></div></Col>
    <Col  md ={4} xs={12}><div className="course-info">
            <div className='iner-info'>
                <div className='icon-co'>
                    <img src={course2}/>
                    <h3>Get Experience</h3>
                    <p>Unde omnis iste natus error sit <br></br>oluptal tem accusantium dolore <br></br> lamque laudant.</p>
                    <div class="button-container"><div class="btn-center"> <NavLink className="btn-round" to="/">read more</NavLink></div></div>
                </div>
                </div></div></Col>
      </Row>
</Container>
</div>
</div>
{/* end  Courses code */}

{/* Showcase code */}
<div className="thrid-sec bggray">
<div class="course-title"><div class="right-bg"><h2>Showcase</h2></div></div>
<div className='bottom_content'>
<Container className='pad-30'>

<Row>
        <Col  md ={3} xs={6}><div className="showcasw-info">
            <div className='iner-info'>
                <div className='show-co'>
                    <img src={showcase2}/>
                    <div class="text-over_image">
					<h2>HORROR</h2>
					</div>
                   
                    <div class="button-container"><div class="btn-center"> <NavLink className="btn-round plain" to="/">View Details</NavLink></div></div>
                </div>
                </div></div></Col>
				  <Col  md ={3} xs={6}><div className="showcasw-info">
            <div className='iner-info'>
                <div className='show-co'>
                    <img src={showcase3}/>
                    <div class="text-over_image">
					<h2>SCI-FI</h2>
					</div>
                   
                    <div class="button-container"><div class="btn-center"> <NavLink className="btn-round plain" to="/">View Details</NavLink></div></div>
                </div>
                </div></div></Col>
       <Col  md ={3} xs={6}><div className="showcasw-info">
            <div className='iner-info'>
                <div className='show-co'>
                    <img src={showcase4}/>
                    <div class="text-over_image">
					<h2>ADVENTURE</h2>
					</div>
                   
                    <div class="button-container"><div class="btn-center"> <NavLink className="btn-round plain" to="/">View Details</NavLink></div></div>
                </div>
                </div></div></Col>
     <Col  md ={3} xs={6}><div className="showcasw-info">
            <div className='iner-info'>
                <div className='show-co'>
                    <img src={showcase2}/>
                    <div class="text-over_image">
					<h2>BIOGRAPHY</h2>
					</div>
                   
                    <div class="button-container"><div class="btn-center"> <NavLink className="btn-round plain" to="/">View Details</NavLink></div></div>
                </div>
                </div></div></Col>
      </Row>
</Container>
</div>
</div>
{/* end Showcase code */}

{/* Subscriptions code */}

<div className="thrid-sec bggray">
<div class="course-title"><div class="title-bg sub"><h2>Subscriptions</h2></div></div>
<div className='bottom_content'>
<Container className='pad-30'>
<Row>
      <Col  md ={4} xs={12}>
		<div className="subs bg-organe">
            <div className='iner-info'>
                <div className='sub-info'>
                   
                    <h3>Monthly</h3>
					<h2 className="Price">$299</h2>
                    <p>Unde omnis iste natus error sit voluptal tem accusantium dolore lamque laudant.</p>
                    <div class="button-containe"><div class=""> <NavLink className="btn-round" to="/">read more</NavLink></div></div>
                </div>
                </div></div></Col>
      <Col  md ={4} xs={12}><div className="subs bg-pink">
             <div className='sub-info Annually'>
                   
                    <h3>Annually</h3>
					<h2 className="Price">$299</h2>
                    <p>Unde omnis iste natus error sit voluptal tem accusantium dolore lamque laudant.</p>
                    <div class="button-containe"><div class=""> <NavLink className="btn-round" to="/">read more</NavLink></div></div>
                </div></div></Col>
  <Col  md ={4} xs={12}><div className="subs margin-top">
               <div className='sub-info '>
              
                   <h3>Save your
money now</h3>
                    
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className='img-last'> <img src={money}/></div>
           

            
                </div></div></Col>
      </Row>
</Container>
</div>
</div>
{/* end  Subscriptions code */}
{/*Testimonials code */}
<div className="thrid-sec bggray">
<div class="course-title"><div class="right-bg"><h2>Testimonials</h2></div></div>

<div className='bottom_content bg-img-or'>
  
<Container className='pad-30'>
<Showcase></Showcase>

</Container>
</div>
</div>
{/* end Testimonials code */}
<Footer></Footer>
    </div>
  )
}
