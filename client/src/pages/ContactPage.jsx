import React from 'react';
import Header from '../components/Header';
import ContactForm from '../components/ContactForm';
import "../style/ContactForm.css";
import "../style/ContactPage.css";

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

                    <div className='contactInfos'>

                        <h3>Adresse</h3>
                        Ferme de Viemme   (refuge & siège social de l'asbl)
                        Rue de Huy, 188
                        4317 Viemme (Faimes)
                        <h3>Téléphone</h3>
                        019 63 00 36
                        <h3>Email général</h3>
                        info@animal-sans-toit.com

                        <h3>Horaires</h3>
                        Tous les jours (y compris fériés)
                        14h00 à 17h00 et éventuellement sur rendez-vous

                        <h3>Compte bancaire</h3>
                        Iban: BE24 0019 9777 7038   BNP Paribas Fortis
                        Bic: GEBA BEBB

                        Le compte BE48 1270 6282 4727 (Beobank) reste valable.
                        Toutefois, et en particulier si vous êtes un nouveau donateur, nous vous recommandons d'utiliser le compte BNPPF car malgré nos multiples réclamations Beobank n'est pas toujours en mesure de nous communiquer l'identité (avec adresse complète) des donateurs.

                        <h3>Numéro d'entreprise</h3>
                        0 478 572 660


                        <h3>Numéros d'agrément</h3>
                        HK 306 03 305
                        HK 306 04 306

                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactPage;