import React, { useState, useEffect } from 'react'
import '../style/Caroussel.css'
//pour caroussel
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselStyles from "./CarouselStyles";

const NextArrow = (props) => {
  const { className, style, onClick } = props
  return (
    <div className={`${className} custom-arrow next-arrow`}
    style={{ ...style, display: "block"}}
    onClick={onClick} />
  )
}

const PrevArrow = (props) => {
  const { className, style, onClick } = props
  return (
    <div className={`${className} custom-arrow prev-arrow`}
    style={{ ...style, display: "block"}}
    onClick={onClick} />
  )
}

const Caroussel = () => {
    const settings = {

      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,

      dots: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      accessibility: true,
      adaptiveHeight: true,

  
  
      responsive: [
        {
          breakpoint: 480,
          settings: {slidesToShow: 1},
        },
        {
          breakpoint: 768,
          settings: {slidesToShow: 2},
        },
        {
          breakpoint: 1024,
          settings: { slidesToShow: 3},
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
                  <button className='carousel-button' type="button">{item.title}</button>
                    
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