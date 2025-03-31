import React from "react";
import { Link } from 'react-router';
import "../style/DonationsButton.css";
import littlewhiteheartIcon from "../assets/littlewhiteheartIcon.png";

const DonationsButton = () => {
    return (
        <Link to="/Dons">
            <button type="button" className="DonationsButton">
                <p className="DonationsButton_p">Faire un don</p>
                <img src={littlewhiteheartIcon} alt="little white heart icon" className="DonationsButton-icon" />
            </button>
        </Link>
    );
};

export default DonationsButton;