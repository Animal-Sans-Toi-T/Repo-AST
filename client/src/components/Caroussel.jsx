import React, { useState } from 'react'
import './Caroussel.css'


const Carousel = () => {
   // const images = [Bird, Bunny, Cat, Chinchilla, Dog, Goat, Bird2]
   
    const [currentIndex, setCurrentIndex] = useState(0)
   
    const totalImages = images.length
   
    const visibleImages = 5

    const maxScroll = 7

    const nextImage = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex < maxScroll - 1) {
                return prevIndex + 1
            } else {
                return 0
            }
        })
    }

    const prevImage = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex > 0 ) {
                return prevIndex -1
            } else {
                return maxScroll -1
            }
        })
    }

    return (
        <div className='carousel-container'>
            <h2 className='carousel-title'>Adopte-moi!</h2>
            <div className='carousel-wrapper'>
                <button className='prev' onClick={prevImage}>❮</button>
                <div className='carousel-images' style={{ transform: `translateX(-${currentIndex * (50 / visibleImages)}%)` }}>
                    {images.concat(images).map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`carousel-${index}`}
                            className='carousel-image'
                        />
                    ))}
                </div>
                <button className='next' onClick={nextImage}>❯</button>
            </div>
            <div className='carousel-indicator'>
                {images.slice(0, totalImages).map((_, index) => (
                    <div key={index} className={`dot ${index === currentIndex ? 'active' : ''}`} />
                ))}
            </div>
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