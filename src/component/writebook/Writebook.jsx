
import React from 'react'
import { Header } from '../header/Header'
import { Breadcrumb } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import { FaHome } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { Footer } from '../footer/Footer';
import'./writebook.css'
import {Link, NavLink, useNavigate} from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import sellTips from'../assests/sellbook/tips.png'
import image1 from'../assests/sellbook/book1.png'
import image2 from'../assests/sellbook/box-image.png'
import image3 from'../assests/sellbook/shipping-textbooks.png'
import image4 from'../assests/sellbook/bookdeal-payment-methods-sell-textbooks.png'
import sellbook from'../assests/sellbook/textbook.jpg'
import sell2 from'../assests/sellbook/sell2.webp'
import seller1 from'../assests/sellbook/seller1.webp'
import { Showcase } from '../showcasebox/Showcase';

export const Writebook = () => {
  return (
    <div> 
    <header className='page-header'>
    <Container>
      <div className='page-title'>
      <h2>Write Book</h2>
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
    <div className='book-heading-prefix'> Write Books</div>
    <h2 className='book-title'>Tips to Write Your  book</h2>
    <div className='book-heading-border'>
    <div className="book-heading tripple content-left-align">
<div className='tips_content'>
    <div className='flex-div'>
    <p className='tips-num'><span>
            1
        </span></p>
    <p className='tipss'>
        
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </p>
    </div>
    <div className='flex-div'>
    <p className='tips-num'><span>
            2
        </span></p>
    <p className='tipss'>
        
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </p>
    </div>
    <div className='flex-div'>
    <p className='tips-num'><span>
            3
        </span></p>
    <p className='tipss'>
        
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </p>
    </div>
    <div className='flex-div'>
    <p className='tips-num'><span>
            4
        </span></p>
    <p className='tipss'>
        
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </p>
    </div>
</div>
    <div className="book-heading-border"></div></div>

    <div class="button-container"><div class="books"> <NavLink className="btn-round" to="/">View my books</NavLink></div><div class="read"><NavLink className="btn-round" to="/">Read More</NavLink></div></div>
    </div>
    </div>
                </Col>
                <Col md ={6} xs={12}>
            <div className='about-img'>
                <img src={sellTips}>
    
                </img>
            </div>
            </Col>
    </Row>
    
    
                            </div>
                            <div className='sec2 padd-60'>
    <h2 className='book-title center'><center>HOW IT WORKS</center></h2>
    <p className='content-about'><center>Iterative approaches to corporate strategy foster
    <br></br>
    collaborative thinking to further the overall value proposition.</center></p>
    <Row>
    <Col md ={3} xs={12}>
    <div className='image_box'>
	<div className='image-top'>
        <img src={image1}/>
	</div>
    <div className='image_content'>
        <h2>Enter your ISBN</h2>
        <p className='content-about'> 
        Enter your book's ISBN
and choose the highest offer
        </p>
    </div>
	</div>
        </Col>
        <Col md ={3} xs={12}>
    <div className='image_box'>
	<div className='image-top'>
        <img src={image2}/>
	</div>
    <div className='image_content'>
        <h2>Pack your books</h2>
        <p className='content-about'> 
        Enter your book's ISBN
and choose the highest offer
        </p>
    </div>
	</div>
        </Col>
        <Col md ={3} xs={12}>
    <div className='image_box'>
	<div className='image-top'>
        <img src={image3}/>
	</div>
    <div className='image_content'>
        <h2>Drop Off your Package</h2>
        <p className='content-about'> 
        Enter your book's ISBN
and choose the highest offer
        </p>
    </div>
	</div>
        </Col>
        <Col md ={3} xs={12}>
    <div className='image_box'>
	<div className='image-top'>
        <img src={image4}/>
	</div>
    <div className='image_content'>
        <h2>Get Paid for Your Books</h2>
        <p className='content-about'> 
        Enter your book's ISBN
and choose the highest offer
        </p>
    </div>
	</div>
        </Col>
    </Row>
    </div>
	
	
	  <div className='sec1 padd-60'>
    <Row>
	 <Col md ={6} xs={12}>
            <div className='about-img'>
                <img src={sell2}>
    
                </img>
            </div>
            </Col>
        <Col md ={6} xs={12}>
        <div className='book-heading no-line content-left-align'>
    
    <h2 className='book-title'>WE GUARANTEE YOU'LL GET PAID!</h2>
    <div className='book-heading-border'>
    <div className="book-heading tripple content-left-align">

    <div className="book-heading-border"></div></div>
    <p className='content-about'>Lorem Ipsum is simply dummy text of the
     printing and typesetting industry. Lorem Ipsum has been the industry's standard
      dummy text ever since the 1500s</p>
    
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
                            <h2 className='book-title center'><center>Featured sellers</center></h2>
                           
                            <p className='content-about'> <center>Collaboratively administrate empowered markets via <br></br
                            >plug-and-play networks. Dynamically procrastinate B2</center></p>
                      <div className='featured-sell'>
<div className='book-fe-div'>
<Showcase></Showcase>
</div>
                      </div>
    
                            </Container>
        </div>
                        </div>
            <Footer></Footer>			
    </div>
  )
}
