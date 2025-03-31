import React, { useState, useEffect } from 'react'
import '../style/Caroussel.css'
import Bird1 from "../assets/bird-one.jpg";
import Bird2 from "../assets/bird-two.jpg";
import Bunny1 from "../assets/bunny-brown.jpg";
import Bunny2 from "../assets/bunny-white-brown.jpg";
import Cat1 from "../assets/cat-black.jpg";
import Cat2 from "../assets/cat-grey.jpg";
import Cat3 from "../assets/cat-two-grey.jpg";
import Chichi from "../assets/chinchilla.jpg";
import Dog1 from "../assets/dog-black.jpg";
import Dog2 from "../assets/dog-husky.jpg";
import Dog3 from "../assets/dog-white.jpg";
import Goat1 from "../assets/goat-one.jpg";
import Goat2 from "../assets/goat-two.jpg";



const Carousel = () => {
    const originalImages = [Bird1, Dog1, Goat1, Cat1, Bunny1, Bird2, Dog2, Cat2, Goat2, Bunny2, Dog3, Cat3, Chichi]
   
    const [currentIndex, setCurrentIndex] = useState(0)
    const [visibleImages, setVisibleImages] = useState(3)

    const images = [...originalImages, ...originalImages]
   
    //const totalImages = images.length
    //const maxDots = 8

    useEffect(() => {
        const updateVisibleImages = () => {
            if (window.innerWidth < 480){
                setVisibleImages(1) //format gsm
            } else if (window.innerWidth < 768){
                setVisibleImages(2) //format tablette
            } else {
                setVisibleImages(3) //format pc
            }
        }

        updateVisibleImages()
        window.addEventListener("resize", updateVisibleImages)
        return () => window.removeEventListener("resize", updateVisibleImages)
    }, [])

    useEffect(() => {
        if(currentIndex === originalImages.length){
            setTimeout(() => {
                setCurrentIndex(0)
            }, 500)
        } else if (currentIndex < 0) {
            setTimeout(() => {
                setCurrentIndex(originalImages.length - 1)
            }, 500)
        }
    }, [currentIndex, originalImages.length])

    //const maxScroll = images.length - visibleImages + 1


    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex -1 + images.length) % images.length)
    }

    return (
        <div className='carousel-container'>
            <h2 className='carousel-title'>Adopte-moi !</h2>
            <div className='carousel-wrapper'>
                <div className='carousel-buttons'>
                <button type="button" className='button-prev' onClick={prevImage}>❮</button>
                <button type="button" className='button-next' onClick={nextImage}>❯</button>
                </div>
                
                <div className='carousel-images' style={{ transform: `translateX(-${currentIndex * (100 / visibleImages)}%)` }}>
                    {images.map((img, index) => (
                        <img
                            key={index} 
                            src={img}
                            alt={`carousel-${index}`}
                            className='carousel-image'
                        />
                    ))}
                </div>
                
            </div>
            <div className='carousel-progress-bar'>
                <div className='carousel-progress-thumb'
                     style={{ transform: `translateX(${(currentIndex % originalImages.length) / (originalImages.length -1) * 100}%)`}}
                     />
            </div>
            {/*<div className='carousel-indicator'>
                {Array.from({ length: maxDots}).map((_, index) => (
                    <div 
                    key={index}
                    className={`dot ${Math.floor(currentIndex / (maxScroll / 7)) === index ? 'active' : ''}`}
                    />
                ))}
            </div>*/}
        </div>
    )
}

export default Carousel;







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