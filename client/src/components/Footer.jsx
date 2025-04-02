import React from "react";
import ReactDOM from "react-dom/client";
import "../style/Footer.css";
import iconPlace from "../assets/icon-place.png";
import iconPhone from "../assets/icon-phone.png";
import iconMail from "../assets/icon-mail.png";
import iconMedia from "../assets/icon-media.png";
import iconTime from "../assets/icon-time.png";
import HoverImage from "../assets/img-hover.jpg";

import MainMap from "./MainMapGoogle.jsx";
import MobileMap from "./MobileMapGoogle.jsx";
import MailTo from "./MailTo.jsx";

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                
                {/* COORDONNEES */}
                <nav className="container-icon-coordonnees">
                    <div className="div-place">
                        <a className="a-icon-place" href=""><img className="img-icon iconPlace" src={iconPlace} alt="Icon Place" /></a>
                        <a className="link-map" href="https://maps.app.goo.gl/oJSxgZzXtuabdbPz5">Rue de Huy 188, 4317 Faimes</a>
                        <div className="container-mobile-map-google">
                            < MobileMap/>
                        </div>
                    </div>
                        
                    <div className="div-phone">
                        <img className="img-icon iconPhone" src={iconPhone} alt="Icon Phone" />
                        <p>0478 572 660</p>
                    </div>

                    <div className="div-mail">
                        <a className="a-icon-mail" href=""><img className="img-icon iconMail" src={iconMail} alt="Icon e-mail" /></a>
                        <MailTo className="MailTo-link" email="info@animal-sans-toit.be" subject="Demande d'informations" body="Bonjour,">
                            Contactez-nous
                        </MailTo>
                    </div>

                    <div className="div-media">
                        <a className="a-icon-media" href="https://www.facebook.com/animalsanstoit/?locale=fr_FR"><img className="img-icon iconMedia" src={iconMedia} alt="Icon Media" /></a>
                        <a className="link-media" href="https://www.facebook.com/animalsanstoit/?locale=fr_FR">Restons connectés</a>
                    </div>
                </nav>

                {/* MAP LARGE ET MEDIUM SCREEN*/}
                <div className="div-MainMap">
                < MainMap/>
                </div>

                <div className="div-MobileMap">
                    <MobileMap/>
                </div>


                {/* HORAIRES */}
                <hr className="hr-mobile" />
                <div className="div-horaires">
                    <img className="img-icon iconTime" src={iconTime} alt="Horaires" />
                    <ul className="subtext-horaires">
                        <li>14H - 17H</li>
                        <li>tous les jours</li>
                    </ul>
                </div>
                <hr className="hr-mobile" />

                {/* TOUT EN BAS */}
                <div className="div-text-copyright">
                    <div className="div-infos">
                        <p className="p-infos-1">Siège Social : 188 rue de Huy, 4317 Viemme (Faimes) | 019 63 00 36</p>
                        <p className="p-infos-2">N° entreprise : 0478 572 660 | N° agrément : HK 306 03 305 | Iban : BE24 0019 9777 7038 | Bic : GEBA BEBB</p>
                    </div>
                    <div className="hover-container">
                        <p className="copyright">&#169; Copyright, tous droits réservés</p>
                        {/* <img className="hover-image" src={HoverImage} alt="Image surprise" /> */}
                    </div>
                </div>
                
            </div>
        </footer>
    );
};

export default Footer;