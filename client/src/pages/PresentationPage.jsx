import React from "react";
import Header from "../components/Header.jsx";
import DonationsButton from "../components/DonationsButton.jsx";
import whiteHorse from "../assets/whitehorseImg.png";
import "../style/PresentationPage.css";


const PresentationPage = () => {
    return (
        <div>
            <Header />
            <h1 className="h1PresentationPage">Qui sommes-nous?</h1>

            <div className="PresentationCardContainer">

                <div className="PresentationCardImgText">
                    <img className="PresentationCard_img" src={whiteHorse} alt="white horse in field" />
                    <div className="PresentationCard_textContainer">
                        <h2>Elle avait un rêve et c'est arrivé</h2>
                        <p>Animal Sans Toi…t a vu le jour grâce à la volonté d'une seule personne.  Seule contre tous d'abord, et ensuite épaulée par une équipe de  bénévoles, Véronique Sandona a décidé de concrétiser un beau projet :
                            celui de  créer un refuge pour héberger des animaux errants, abandonnés ou saisis  par les autorités.
                            C'est le 26 aout  2002 que son rêve est devenu réalité. 	Après de nombreuses recherches, grâce à un ami, Alain, elle est tombé sur la ferme de Horion-Hozémont, non loin de Liège Airport, où Véronique a installé son premier refuge. </p>
                    </div>
                </div>

                <div className="PresentationCardTextImg">
                    <div className="PresentationCard_textContainer">
                        <h2>L'équipe s'agrandit</h2>
                        <p>Animal sans Toi...t a pris un grand tournant lorsque Fabrice Renard a rejoint l'équipe en 2006:  évolution du site, naissance de la nouvelle revue, augmentation du nombre de membres, ...
                            Et aussi une meilleure gestion de l'asbl car pour Véronique il était difficile d'être à la fois au four et au moulin.</p>
                    </div>
                    <img className="PresentationCard_img" src={whiteHorse} alt="white horse in field" />
                </div>


                <div className="PresentationCardImgText">
                    <img className="PresentationCard_img" src={whiteHorse} alt="white horse in field" />
                    <div className="PresentationCard_textContainer">
                        <h2>Le nouveau refuge à Viemme</h2>
                        <p>Un second refuge, plus spécifiquement destiné à l'accueil des équidés, bovins et autres animaux de ferme, a ouvert ses portes le 12 février 2012 à Viemme. Cette nouvelle implantation nous permet d'offrir à nos animaux  un accueil de grande qualité.

L'asbl, a inauguré à Viemme en 2018 un tout nouveau bâtiment pour les  chiens, chats et petits animaux de compagnie. Cela nous a permis de  regrouper toutes nos activités sur un seul site, évitant ainsi pas mal 
 de déplacements. 		</p>
                    </div>
                </div>

                <div className="PresentationCardTextImg">
                    <div className="PresentationCard_textContainer">
                        <h2>Une équipe dévouée</h2>
                        <p>Pour mieux gérer l’association, l’équipe d’administrateurs a été fixé à trois : 		 		     - La Présidente, Mme Véronique Sandona 		     - La Secrétaire, Mme Katia Fernandez Torre 		     - La Trésorière, Mlle Séverine Sandona
                        </p>
                    </div>
                    <img className="PresentationCard_img" src={whiteHorse} alt="white horse in field" />
                </div>




            </div>

            <DonationsButton />
        </div>
    )
}

export default PresentationPage;