import React, { useState } from 'react';
// import nodemailer from 'nodemailer';
import Popup from 'reactjs-popup';
import "./RGPD.jsx";
import RGPD from './RGPD.jsx';
import axios from "axios";

function ContactForm() {

    // const [firstname, setFirstname] = useState("");
    // const [lastname, setLastname] = useState("");
    // const [street, setStreet] = useState("");
    // const [zipcode, setZipcode] = useState("");
    // const [city, setCity] = useState("");
    // const [country, setCountry] = useState("");
    // const [phone, setPhone] = useState("");
    // const [email, setEmail] = useState("");
    // const [inquiry, setInquiry] = useState("");
    // const [subject, setSubject] = useState("");

    const [formInputs, setFormInputs] = useState({
        lastName: '',
        // firstName: '',
        // street: '',
        // zipCode:'',
        // city:'',
        // country:'',
        // phone:'',
        // email:'',
        // inquiry:''
    });


    const handleLastnameChange = (e) => {
        setFormInputs({ ...formInputs, lastName: e.target.value })
    };

    // const handleFirstnameChange = (e) => {
    //     setFormInputs({ ...formInputs, firstName: e.target.value })
    // };

    // const handleStreetChange = (e) => {
    //     setFormInputs({ ...formInputs, street: e.target.value })
    // };

    // const handleZipCodeChange = (e) => {
    //     setFormInputs({ ...formInputs, zipCode: e.target.value })
    // };

    // const handleCityChange = (e) => {
    //     setFormInputs({ ...formInputs, city: e.target.value })
    // };


    // const handleCountryChange = (e) => {
    //     setFormInputs({ ...formInputs, country: e.target.value })
    // };


    // const handlePhoneChange = (e) => {
    //     setFormInputs({ ...formInputs, phone: e.target.value })
    // };


    // const handleEmailChange = (e) => {
    //     setFormInputs({ ...formInputs, email: e.target.value })
    // };


    // const handleInquiryChange = (e) => {
    //     setFormInputs({ ...formInputs, inquiry: e.target.value })
    // };


    // const handleSubject = (e, subjectName) => {
    //     setFormInputs({ ...formInputs, generalSubject: true })

    // }


    const apiemail = axios.create({
        baseURL: "http://localhost:3000/apiemail",
    });

    const submitForm = async (e) => {
        e.preventDefault();
        try {
            const response = await apiemail.post("/contact", formInputs);
            alert("Email sent");
        } catch (error) {
            alert(error + "Error, email not sent");
        }
    };

    // const submitForm = (formInputs) => {
    //     setFormInputs(formInputs);
    // }

    // const transporter = nodemailer.createTransport({
    //     service: 'Gmail',
    //     auth: { 
    //       user: process.env.EMAIL,
    //       pass: process.env.PASSWORD
    //     }
    //   });


    //TODO: check validity of input 
    // check security 
    // check my axios post 

    // const submitForm = async (e) => {
    //     e.preventDefault();

    //     try {
    //         await axios.post('/contact', {

    //             email, 
    //         });
    //         showSuccess();

    //         try {
    //             const response = await axios.post(`http://localhost:5173/api/contact`, completedForm);
    //             console.log("Response:", response.data);
    //             alert("Votre formulaire a bien été envoyé");
    //         } catch (error) {
    //             console.error("Error posting data:", error);
    //         }

    //     }
    // };



    // RECAP': pour le moment, reprend bien le name de l'input et la e.target (fonctionne avec le mailto) - à implémenter avec nodemailer

    return (
        <>
            <form className='contactForm' onSubmit={submitForm}>


                {/* EMI: à mon avis tu devras mettre l'adresse email dans value; après à voir si par exemple la personne change son choix, si la valeur n'est pas encodée de toute façon dans le setFormInput... a mon avis il faudra faire une logique de true/false avec des if pour dtminer où envoyer */}
                {/* <div className='radioButtonsContainer'>
                    <h3>Ma demande concerne:</h3>
                    <div className='radioButtonsBlock'>
                        <input className='radioButton' type="radio" name="generalSubject" id="général" onChange={(e) => handleSubject(e,)} value={false} />
                        <label for="plaintes">Une information générale</label>
                    </div>
                    <div className='radioButtonsBlock'>
                        <input className="radioButton" type="radio" name="subject" id="maltraitance" value="plaintes" />
                        <label for="plaintes">Une maltraitance</label>
                    </div>
                    <div className='radioButtonsBlock'>
                        <input className="radioButton" type="radio" name="subject" id="présidente" value="plaintes" />
                        <label for="plaintes">Contact avec la présidente</label>
                    </div>
                    <div className='radioButtonsBlock'>
                        <input className='radioButton' type="radio" name="generalSubject" id="général" onChange={(e) => handleSubject(e,)} value={false} />
                        <label for="plaintes">Le parrainage</label>
                    </div>
                    <div className='radioButtonsBlock'>
                        <input className='radioButton' type="radio" name="generalSubject" id="général" onChange={(e) => handleSubject(e,)} value={false} />
                        <label for="plaintes">Le service "membres"</label>
                    </div>
                    <div className='radioButtonsBlock'>
                        <input className='radioButton' type="radio" name="generalSubject" id="général" onChange={(e) => handleSubject(e,)} value={false} />
                        <label for="plaintes">Le bénévolat</label>
                    </div>
                    <div className='radioButtonsBlock'>
                        <input className='radioButton' type="radio" name="generalSubject" id="général" onChange={(e) => handleSubject(e,)} value={false} />
                        <label for="plaintes">Le site internet</label>
                    </div>
                </div> */}

                <div className='textFormsContainer'>
                    <label>Nom*:<input type="text" name="lastName" placeholder="Nom *" onChange={(e) => handleLastnameChange(e)} required /></label>
                    {/* <label>Prénom*:<input type="text" name="firstName" placeholder='Prénom *' onChange={(e) => handleFirstnameChange(e)} required /></label>
                    <label>Rue:
                        <input type="text" name="street" placeholder='Rue' onChange={(e) => handleStreetChange(e)} required /></label>
                    <label>Code postal:
                        <input type="number" name="zipCode" placeholder='Code Postal' onChange={(e) => handleZipCodeChange(e)} required /></label>
                    <label>Localité:
                        <input type="text" name="city" placeholder='Localité' onChange={(e) => handleCityChange(e)} required /></label>
                    <label>Pays:
                        <input type="text" name="country" placeholder='Pays' onChange={(e) => handleCountryChange(e)} required /></label>
                    <label>Téléphone:
                        <input type="tel" name="phone" placeholder='Numéro de téléphone' onChange={(e) => handlePhoneChange(e)} required /></label>
                    <label>Email*:
                        <input type="email" name="email" placeholder='Email' onChange={(e) => handleEmailChange(e)} required /></label>
                    <label>Demande*: <br />
                        <textarea type="textarea" placeholder='Votre demande/question' minlength="4"
                            maxlength="250" size="50" name="inquiry" onChange={(e) => handleInquiryChange(e)} required /></label> */}
                </div>

                {/* <div className='checkNewsletterBlock'>
                    <input className='checkboxNewsletter' type="checkbox" id="newsletter" name="newsletter" />
                    <label for="newsletter">Je souhaite recevoir les newsletters</label>
                </div>

                <div className='RGPD'>
                    <input className='checkboxRGPD' type="checkbox" id="RGPD" name="RGPD" required />
                    <label for="RGPD">J'accepte les RGPD  <RGPD /></label>
                </div> */}


                <button className="send" type="submit">Envoyer</button>

            </form>
        </>

    )
}

export default ContactForm;