import React from "react";
import "../style/DonationsButton.css";
import blackHeart from "../assets/icon-little-black-heart.png";

const DonationsButton = () => {
    return (
        <div>
            <button type="button"className="DonationsButton">
                <p>Je fais un don</p>
                <img src={blackHeart} alt="black heart icon" className="DonationsButton-icon" />
            </button>
        </div>
    );
};

export default DonationsButton;