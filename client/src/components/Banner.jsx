import React from 'react';
import { useState, useEffect } from 'react';
import "../style/Banner.css";
import dogBanner from "../assets/dogBanner.jpg";
import catBanner from "../assets/catBanner.jpg";
import goatBanner from "../assets/goatBanner.jpg";


const Banner = () => {

    let background = [dogBanner, catBanner, goatBanner];

    const [currentIndex, setCurrentIndex] = useState(0);

    // everytime it's called, it checks the current index and either add 1 to it or reset it to 0. Linked to the useEffect that sets an interval, it creates an infite loop of going through the images every 5s
    const imgScroll = () => {
        if (currentIndex === background.length - 1) {
            return setCurrentIndex(0);
        }
        return setCurrentIndex(currentIndex + 1);
    };

// adds some side effect to a react component: here it changes the img every 5s then clear the interval
    useEffect(()=> {
        const interval = setInterval(imgScroll, 5000);
        return () => clearInterval(interval);
    }, [currentIndex])


        return (
            <div className="Banner" style={{ backgroundImage: `url(${background[currentIndex]})` }}>
                <div className='gradientOverlay'>

                    <h1>Le coeur en plus</h1>
                </div>
            </div>
        );
    }



    export default Banner;