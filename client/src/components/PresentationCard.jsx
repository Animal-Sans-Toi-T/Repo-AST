import React from "react";
import "../style/PresentationCard.css";
import hangar from "../assets/viemme_2015_1.png";


const PresentationCard =() => {

    // first i'll hard code it and then i'll see if it's worth reusing it 

    return (
        <div className="PresentationCard">
            <img src={hangar} alt="hangar Viemme 2015" />
            <h2>Qui sommes-nous?</h2>
            <p>ici un joli texte pour résumer qui est animal sans toit, peut-être dire le nom de la ville ou une autre info importante. Pour en savoir plus </p>
            <button type="button">Présentation</button>
        </div>
    )

}

export default PresentationCard;