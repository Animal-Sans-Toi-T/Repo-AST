import React, { useState } from "react";
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

export default Caroussel;