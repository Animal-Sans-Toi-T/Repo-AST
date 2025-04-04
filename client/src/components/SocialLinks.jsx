import { useState } from "react";

function SocialLinks({ iconInsta, iconFcb, iconTikTok }) {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className="div-link-media">
            {/* Remplace le lien par un bouton avec les icônes */}
            <button 
                onClick={(e) => {
                    e.preventDefault();
                    setShowMenu(!showMenu);
                }}
                className="button-media"
            >
                <div className="div-icon-media">
                    <img className="img-icon-insta iconFooter" src={iconInsta} alt="Instagram" />
                    <img className="img-icon-fcb iconFooter" src={iconFcb} alt="Facebook" />
                    <img className="img-icon-TikTok iconFooter" src={iconTikTok} alt="TikTok" />
                </div>
                <p className="p-button-media">Restons connectés</p>
            </button>

            {/* Affichage du menu au clic */}
            {showMenu && (
                <div className="div-block-linkMedia">
                    <p className="p-linkMedia">Rejoignez-nous sur nos réseaux sociaux :</p>

                    <div className="div-aLinkMedia">
                        <a className="aLinkMedia" href="https://www.facebook.com/animalsanstoit/?locale=fr_FR">Facebook</a>
                        <a className="aLinkMedia" href="https://www.instagram.com/refuge.animalsanstoit/?fbclid=IwY2xjawJbGsxleHRuA2FlbQIxMAABHQLtBUCuupGPjo8K5eAzMRFfzdohufcTre5mkiz8_4AEwyWD-wF2fAnnbg_aem_uWk_Po2AcFfRfuwLHh35AA#">Instagram</a>
                        <a className="aLinkMedia" href="https://www.tiktok.com/@animal.sans.toit?_t=ZN-8vCN6WiyUqc&_r=1">Tiktok</a>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SocialLinks;
// import { useState } from "react";
// import "../style/SocialLinks.css"; // Assure-toi d'avoir un fichier CSS pour les styles

// function SocialLinks({ iconInsta, iconFcb, iconTikTok }) {
//     const [showMenu, setShowMenu] = useState(false);

//     return (
//         <div className="div-link-media">
//             {/* Bouton avec icônes */}
//             <button 
//                 onClick={() => setShowMenu(!showMenu)} 
//                 className="button-media"
//             >
//                 <div className="div-icon-media">
//                     <img className="img-icon-insta iconFooter" src={iconInsta} alt="Instagram" />
//                     <img className="img-icon-fcb iconFooter" src={iconFcb} alt="Facebook" />
//                     <img className="img-icon-TikTok iconFooter" src={iconTikTok} alt="TikTok" />
//                 </div>
//             </button>

//             {/* Conteneur des liens sociaux avec une classe conditionnelle */}
//             <div className={`div-block-linkMedia ${showMenu ? "active" : ""}`}>
//                 <ul className="ul-link-media">
//                     <li className="firstLi-ulLinkMedia">Rejoignez-nous :</li>
//                     <li><a className="aLiUlLinkMedia" href="https://www.facebook.com/">Facebook</a></li>
//                     <li><a className="aLiUlLinkMedia" href="https://www.instagram.com/">Instagram</a></li>
//                     <li><a className="aLiUlLinkMedia" href="https://www.tiktok.com/">Tiktok</a></li>
//                 </ul>
//             </div>
//         </div>
//     );
// }

// export default SocialLinks;
