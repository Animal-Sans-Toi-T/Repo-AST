import React, { useState } from 'react';
// import nodemailer from 'nodemailer';
import Popup from 'reactjs-popup';
import "./RGPD.jsx";
import RGPD from './RGPD.jsx';
import axios from "axios";



// TODO: 
// - checker la sécu de l'envoi d'emails
// - envoi automatique de la newsletter à créer via je suppose un ajout dans la DB (pour le moment le check ne fait rien)
// - voir si on laisse tous les champs du formulaire en require


function ContactForm() {

    const [formInputs, setFormInputs] = useState({
        subject:'',
        lastName: '',
        firstName: '',
        street: '',
        zipCode:'',
        city:'',
        country:'',
        phone:'',
        email:'',
        inquiry:''
    });


    const handleLastnameChange = (e) => {
        setFormInputs({ ...formInputs, lastName: e.target.value })
    };

    const handleFirstnameChange = (e) => {
        setFormInputs({ ...formInputs, firstName: e.target.value })
    };

    const handleStreetChange = (e) => {
        setFormInputs({ ...formInputs, street: e.target.value })
    };

    const handleZipCodeChange = (e) => {
        setFormInputs({ ...formInputs, zipCode: e.target.value })
    };

    const handleCityChange = (e) => {
        setFormInputs({ ...formInputs, city: e.target.value })
    };


    const handleCountryChange = (e) => {
        setFormInputs({ ...formInputs, country: e.target.value })
    };


    const handlePhoneChange = (e) => {
        setFormInputs({ ...formInputs, phone: e.target.value })
    };


    const handleEmailChange = (e) => {
        setFormInputs({ ...formInputs, email: e.target.value })
    };


    const handleInquiryChange = (e) => {
        setFormInputs({ ...formInputs, inquiry: e.target.value })
    };

    // WORKS - value of the selected radio button
    const handleSubjectChange =(e) => {
        setFormInputs({ ...formInputs, subject: e.target.value })
        console.log(formInputs);
    }


    const apiemail = axios.create({
        baseURL: "http://localhost:3000/apiemail",
    });

    const submitForm = async (e) => {
        e.preventDefault();
        try {
            console.log(formInputs);
            const response = await apiemail.post("/contact", formInputs);
            alert("Votre formulaire a bien été envoyé :)");
        } catch (error) {
            alert("Il y a eu un soucis lors de l'envoi de votre formulaire, il n'a pas pu être envoyé (" + error +")");
        }
    };


    return (
        <>
            <form className='contactForm' onSubmit={submitForm}>

                    <h3>Ma demande concerne:</h3>
                <div onChange={handleSubjectChange} className='radioButtonsContainer'>
                    <div className='radioButtonsBlock'>
                        <input className='radioButton' type="radio" name="subject" id="général" value="général" />
                        <label for="plaintes">Une information générale</label>
                    </div>
                    <div className='radioButtonsBlock'>
                        <input className="radioButton" type="radio" name="subject" id="maltraitance" value="maltraitance" />
                        <label for="plaintes">Une maltraitance</label>
                    </div>
                    <div className='radioButtonsBlock'>
                        <input className="radioButton" type="radio" name="subject" id="présidente" value="présidente" />
                        <label for="plaintes">Contact avec la présidente</label>
                    </div>
                    <div className='radioButtonsBlock'>
                        <input className='radioButton' type="radio" name="subject" id="parrainage" value="parrainage" />
                        <label for="plaintes">Le parrainage</label>
                    </div>
                    <div className='radioButtonsBlock'>
                        <input className='radioButton' type="radio" name="subject" id="membres" value="membres" />
                        <label for="plaintes">Le service "membres"</label>
                    </div>
                    <div className='radioButtonsBlock'>
                        <input className='radioButton' type="radio" name="subject" id="bénévolat" value="bénévolat" />
                        <label for="plaintes">Le bénévolat</label>
                    </div>
                    <div className='radioButtonsBlock'>
                        <input className='radioButton' type="radio" name="subject" id="site internet" value="site internet" />
                        <label for="plaintes">Le site internet</label>
                    </div>
                </div>

                <div className='textFormsContainer'>
                    <label>Nom*:<input type="text" name="lastName" placeholder="Nom *" onChange={(e) => handleLastnameChange(e)} required /></label>
                    <label>Prénom*:<input type="text" name="firstName" placeholder='Prénom *' onChange={(e) => handleFirstnameChange(e)} required /></label>
                    <label>Rue:
                        <input type="text" name="street" placeholder='Rue' onChange={(e) => handleStreetChange(e)}/></label>
                    <label>Code postal:
                        <input type="number" name="zipCode" placeholder='Code Postal' onChange={(e) => handleZipCodeChange(e)}/></label>
                    <label>Localité:
                        <input type="text" name="city" placeholder='Localité' onChange={(e) => handleCityChange(e)}/></label>
                    <label>Pays:
                        <input type="text" name="country" placeholder='Pays' onChange={(e) => handleCountryChange(e)}/></label>
                    <label>Téléphone:
                        <input type="tel" name="phone" placeholder='Numéro de téléphone' onChange={(e) => handlePhoneChange(e)}/></label>
                    <label>Email*:
                        <input type="email" name="email" placeholder='Email' onChange={(e) => handleEmailChange(e)} required /></label>
                    <label>Demande*: <br />
                        <textarea type="textarea" placeholder='Votre demande/question' minLength="4"
                            maxlLength="250" size="50" name="inquiry" onChange={(e) => handleInquiryChange(e)} required /></label>
                </div>

                <div className='checkNewsletterBlock'>
                    <input className='checkboxNewsletter' type="checkbox" id="newsletter" name="newsletter" />
                    <label for="newsletter">Je souhaite recevoir les newsletters</label>
                </div>

                <div className='RGPD'>
                    <input className='checkboxRGPD' type="checkbox" id="RGPD" name="RGPD" required />
                    <label for="RGPD">J'accepte les RGPD  <RGPD /></label>
                </div>


                <button className="send" type="submit">Envoyer</button>

            </form>
        </>

    )
}

export default ContactForm;