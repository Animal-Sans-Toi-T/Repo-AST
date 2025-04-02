import React from 'react';
import Popup from 'reactjs-popup';
import "../style/RGPD.css";


// TODO: 
// - changer le hover de "en savoir plus" pour que ce soit clair que c'est clickable
// - 

function RGPD() {
    return (
        <Popup className="popUp" 
        trigger={<p className='popUpText'>(clickez ici pour en savoir plus sur les RGPD)</p>} 
        position="right center" 
        >
            <div className='RGPDWarning'>Dans le cadre de la règlementation européenne (RGPD), nous prenons en compte vos droits liés à la protection de la vie privée et à la protection de vos données personnelles. Nous donnons la priorité à la confidentialité et à la sécurisation des données que vous nous confiez. Nous traitons vos données à caractère personnel en interne mais, pour des raisons techniques, nous pouvons être amenés à les transmettre à des sous-traitants ou des partenaires qui s'engagent à mettre tout en œuvre pour garantir une sécurité et une confidentialité maximales au traitement de vos données.
                En envoyant ce formulaire, vous acceptez formellement de nous confier des données personnelles. Quelles que soient les données collectées, elles ne sont jamais revendues à des tiers.</div>
        </Popup>
    )
}

export default RGPD;