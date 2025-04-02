import React, { useState, useEffect } from 'react'
import '../style/Caroussel.css'
//pour caroussel
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselStyles from "./CarouselStyles";



const Caroussel = () => {
    const settings = {
      dots: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      accessibility: true,
      adaptiveHeight: true,

      nextArrow: (
        <div>
          <div className="next-slick-arrow">
          <svg xmlns="http://www.w3.org/2000/svg" width="10.605" height="15.555"><path d="m2.828 15.555 7.777-7.779L2.828 0 0 2.828l4.949 4.948L0 12.727l2.828 2.828z"/></svg>
          </div>
        </div>
      ),
  
      prevArrow: (
        <div>
          <div className="prev-slick-arrow">
          <svg xmlns="http://www.w3.org/2000/svg" width="10.605" height="15.555"><path d="M10.605 12.727 5.656 7.776l4.949-4.948L7.777 0 0 7.776l7.777 7.779 2.828-2.828z"/></svg>
          </div>
        </div>
      ),
  
      responsive: [
        {
          breakpoint: 600,
          settings: {slidesToShow: 1,},
        },
        {
          breakpoint: 1024,
          settings: { slidesToShow: 2},
        },
        
      ],
   
    }
  
    
  
    return (
      
    
      <div className='content-carousel'>
        
      
        <div className='container-carousel'>
        <h2 className='carousel-title'>Adopte-moi !</h2>
        <div className='carousel-wrapper'>
          <Slider {...settings}>
          
            {CarouselStyles.map((item) => (
              <div key={item.id}>
                <div className='carousel-images'>
                  <img src={item.src} alt={item.alt} className='carousel-image'/>
                </div>
              </div>
            ))}
        
          </Slider>
          </div>
        </div>
      </div>
    )
  }
  
  export default Caroussel;

  


//Carousel de Fred
/*import React, { useState } from "react";
import "../style/Caroussel.css";

const Caroussel = ({ images }) => {

    const [index, setIndex] = useState(0);

    const nextImage = () => {
        setIndex((currentIndex) => (currentIndex + 1) % images.length);
    };

    const prevImage = () => {
        setIndex((currentIndex) => (currentIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="caroussel">
            <button className="caroussel-prev" onClick={prevImage}>{"<"}</button>
            <div className="caroussel-image">
                <img src={images[index]} alt={`Slide ${index}`} />
            </div>
            <button className="caroussel-next" onClick={nextImage}>{">"}</button>
        </div>
    );
};

export default Caroussel;*/