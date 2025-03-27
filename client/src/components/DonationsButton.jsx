import React from "react";
import "../style/DonationsButton.css";
import littlewhiteheartIcon from "../assets/littlewhiteheartIcon.png";

const DonationsButton = () => {
    return (
            <button type="button"className="DonationsButton">
                <p className="DonationsButton_p">Faire un don</p>
                <img src={littlewhiteheartIcon} alt="little white heart icon" className="DonationsButton-icon" />
            </button>
    );
};

export default DonationsButton;