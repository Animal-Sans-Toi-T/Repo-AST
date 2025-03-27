


import React from "react";
import "../style/PresentationCard.css";
import hangar from "../assets/viemme_2015_1.png";
import whiteHorse from "../assets/whitehorseImg.png";


const PresentationCard = () => {

    // first i'll hard code it and then i'll see if it's worth reusing it 

    return (
        <>
            <div className="PresentationCardContainer">

                <div className="PresentationCard">
                    <img className="PresentationCard_img" src={hangar} alt="hangar Viemme 2015" />
                    <div className="PresentationCard_textContainer">
                        <h2>Qui sommes-nous?</h2>
                        <p>ici un joli texte pour résumer qui est animal sans toit, peut-être dire le nom de la ville ou une autre info importante. Pour en savoir plus </p>
                        <div className="PresentationCard_textContainer_knowMoreContainer">
                            <p>Pour en savoir plus</p>
                            <button type="button" className="PresentationCard_button">Présentation</button>
                        </div>
                    </div>
                </div>

                <div className="PresentationCard">
                    <div className="PresentationCard_textContainer">
                        <h2>Nos pensionnaires</h2>
                        <p>ici un joli texte pour résumer qui est animal sans toit, peut-être dire le nom de la ville ou une autre info importante. Pour en savoir plus </p>
                        <div className="PresentationCard_textContainer_knowMoreContainer">
                            <p>Pour en savoir plus</p>
                            <button type="button" className="PresentationCard_button">Pensionnaires</button>
                        </div>
                    </div>
                    <img className="PresentationCard_img" src={whiteHorse} alt="white horse in field" />
                </div>

                <div className="PresentationCard">
                    <img className="PresentationCard_img" src={hangar} alt="hangar Viemme 2015" />
                    <div className="PresentationCard_textContainer">
                        <h2>Sensibilisation</h2>
                        <p>ici un joli texte pour résumer qui est animal sans toit, peut-être dire le nom de la ville ou une autre info importante. Pour en savoir plus </p>
                        <div className="PresentationCard_textContainer_knowMoreContainer">
                            <p>Pour en savoir plus</p>
                            <button type="button" className="PresentationCard_button">Sensibilisation</button>
                        </div>
                    </div>
                </div>

                <div className="PresentationCard">
                    <div className="PresentationCard_textContainer">
                        <h2>Ils ont trouvé une famille</h2>
                        <p>ici un joli texte pour résumer qui est animal sans toit, peut-être dire le nom de la ville ou une autre info importante. Pour en savoir plus </p>
                        <div className="PresentationCard_textContainer_knowMoreContainer">
                            <p>Pour en savoir plus</p>
                            <button type="button" className="PresentationCard_button">Adoptés</button>
                        </div>
                    </div>
                    <img className="PresentationCard_img" src={whiteHorse} alt="white horse in field" />
                </div>

            </div>
        </>
    )
}

export default PresentationCard;