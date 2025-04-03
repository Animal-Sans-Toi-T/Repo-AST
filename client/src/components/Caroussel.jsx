import React, { useState, useEffect } from 'react'
import '../style/Caroussel.css'
//pour caroussel
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselStyles from "./CarouselStyles";
import { Link } from 'react-router-dom';

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
                  <div className='carousel-overlay'>
                    <p className='carousel-name'>{item.alt}</p>
                    <Link href="/Adoptables">
                  <button className='carousel-button' type="button">{item.title}</button>
                  </Link>
                  </div>
                  </div>
                </div>
              
            ))}

          </Slider>

          <div className='links-button'>
          <Link href="/Adoptables">
                  <button className='dog-button' type='button'>Chiens</button>
                  </Link>
                  <Link href="/Adoptables">
                  <button className='cat-button' type='button'>Chats</button>
                  </Link>
                  <Link href="/Adoptables">
                  <button className='farm-button' type='button'>Animaux ferme</button>
                  </Link>
                  <Link href="/Adoptables">
                  <button className='other-button' type='button'>Autres</button>
                  </Link>
                  <Link href="/Adoptables/Tips">
                  <button className='tips-button' type='button'>Conseils adoption</button>
                  </Link>
                  </div>
          </div>
          </div>
        </div>
      
    )
  }
  
  export default Caroussel;