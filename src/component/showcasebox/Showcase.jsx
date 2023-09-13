
import React from 'react'
import Container from 'react-bootstrap/Container';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import showcase1 from "../assests/Home/showcase1 (1).png";
import showcase2 from "../assests/Home/showcase1 (2).png";
import showcase3 from "../assests/Home/showcase1 (3).png";
import showcase4 from "../assests/Home/showcase1 (4).png";
import test  from "../assests/Home/test1.png"
import'./showcas.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      slidesToSlide: 3 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 767, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  const sliderImageUrl = [
    //First image url
    {
      url:
      "https://media.licdn.com/dms/image/C5603AQFwdFnpmdeq2w/profile-displayphoto-shrink_800_800/0/1586616989162?e=2147483647&v=beta&t=Fqe7CPeXXMXVrdG0g6q5MMZ0c8oxEf5YYJ0ks1CpybY",
        heading: "MIa Dalia",
        title: "Author",
        des: "Exercitation ullamco laboris nisiuts duis aute irure dolor in reprehenderit ina voluptate velit esse sed cillum dolor fugiat nulla pariatur excepteur sint.Occaecat nony proident sunt in culpa qui deser sit cupidatate sed ipsum dolor eiusmod tempor incididunts.",

   
    },
    
  
    //Fourth image url
  
    {
        url:
        "https://media.licdn.com/dms/image/C5603AQFwdFnpmdeq2w/profile-displayphoto-shrink_800_800/0/1586616989162?e=2147483647&v=beta&t=Fqe7CPeXXMXVrdG0g6q5MMZ0c8oxEf5YYJ0ks1CpybY",
        heading: "MIa Dalia",
        title: "Author",
        des: "Exercitation ullamco laboris nisiuts duis aute irure dolor in reprehenderit ina voluptate velit esse sed cillum dolor fugiat nulla pariatur excepteur sint.Occaecat nony proident sunt in culpa qui deser sit cupidatate sed ipsum dolor eiusmod tempor incididunts.",
    },{
        url:
        "https://media.licdn.com/dms/image/C5603AQFwdFnpmdeq2w/profile-displayphoto-shrink_800_800/0/1586616989162?e=2147483647&v=beta&t=Fqe7CPeXXMXVrdG0g6q5MMZ0c8oxEf5YYJ0ks1CpybY",
        heading: "MIa Dalia",
        title: "Author",
        des: "Exercitation ullamco laboris nisiuts duis aute irure dolor in reprehenderit ina voluptate velit esse sed cillum dolor fugiat nulla pariatur excepteur sint.Occaecat nony proident sunt in culpa qui deser sit cupidatate sed ipsum dolor eiusmod tempor incididunts.",
    }
  ];
export const Showcase = () => {

  return (
    <div>  

  <Carousel
        responsive={responsive}
        autoPlay={false}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
	
	  
        {sliderImageUrl.map((imageUrl, index) => {
          return (
		 
           
			<Col  md ={12} xs={12} className="slider" key={index}>
              <div class="back-white">
                <div className='image_headeing'>
<div className='image_left'>
    <img src={imageUrl.url}/>

</div>
<div class="name_title">
    <h3>{imageUrl.heading}</h3>
    <h4>{imageUrl.title}</h4>
    <p>{imageUrl.des}</p>
</div>
                </div>
             
			  </div>
			  </Col>
         
			
          );
        })}
		 
          </Carousel>
		  
		 
</div>
  )
}
