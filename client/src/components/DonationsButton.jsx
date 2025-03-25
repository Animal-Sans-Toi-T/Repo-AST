import React from "react";
import "../style/DonationsButton.css";
import blackHeart from "../assets/icon-little-black-heart.png";
import loadingHeart from "../assets/loadingheartIcon.gif";
import emptyHeart from "../assets/emptyheartIcon.png";

const DonationsButton = () => {
    return (
            <button type="button"className="DonationsButton">
                <p className="DonationsButton_p">Je fais un don</p>
                <img src={emptyHeart} alt="black heart icon" className="DonationsButton-icon" />
            </button>
    );
};

export default DonationsButton;