import React from 'react';
import Popup from 'reactjs-popup';
import Header from '../components/Header';
import ContactForm from '../components/ContactForm';
import "../style/ContactForm.css";
import "../style/ContactPage.css";


// TODO: import google map 
// - add link to phone when click on phone
// - add link to email when click on email




function ContactPage() {
    return (
        <>
            <Header />
            <div className='ContactPageContainer'>

                <div className='ContactFormCard'>
                    <h2>Formulaire de contact</h2>
                    <ContactForm />
                </div>

                <div className='contactInfoCard'>
                    <h2>Coordonnées</h2>

                    <div className='contactInfo'>

                        <div className='infoBlock'><h3>Adresse</h3>
                            <p>Ferme de Viemme (refuge & siège social de l'asbl)<br />
                                Rue de Huy, 188 <br />
                                4317 Viemme (Faimes)</p></div>

                        <div className='infoBlock'><h3>Téléphone</h3>
                        <p>019 63 00 36</p>
                        </div>

                        <div className='infoBlock'><h3>Email général</h3>
                        <p>info@animal-sans-toit.com</p></div>

                        <div className='infoBlock'><h3>Horaires</h3>
                        <p>Tous les jours (y compris fériés)
                        14h00 à 17h00 et éventuellement sur rendez-vous</p></div>

                        <div className='infoBlock'><h3>Compte bancaire</h3>
                        <p>Iban: BE24 0019 9777 7038   BNP Paribas Fortis <br/>
                        Bic: GEBA BEBB</p>

                        <p className='smallCharacters'>Le compte BE48 1270 6282 4727 (Beobank) reste valable. <br/>
                        Toutefois, et en particulier si vous êtes un nouveau donateur, nous vous recommandons d'utiliser le compte BNPPF car malgré nos multiples réclamations Beobank n'est pas toujours en mesure de nous communiquer l'identité (avec adresse complète) des donateurs.
                        </p></div>

                        <div className='infoBlock'><h3>Numéro d'entreprise</h3>
                        <p>0 478 572 660</p>
                        </div>


                        <div className='infoBlock'><h3>Numéros d'agrément</h3>
                        <p>HK 306 03 305  <br/>
                        HK 306 04 306</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactPage;