import React, { useState } from 'react';
// import nodemailer from 'nodemailer';

function ContactForm() {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [street, setStreet] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [inquiry, setInquiry] = useState("");
    // const [isActive, setIsActive] = useState("");
    const [subject, setSubject] = useState("");

    const [formInputs, setFormInputs] = useState({
        lastName: '',
        firstName: '',
        generalSubject:'',

    });


    const handleLastnameChange = (e) => {
        setFormInputs({ ...formInputs, lastName: e.target.value })
    };

    const handleFirstnameChange = (e) => {
        setFormInputs({ ...formInputs, firstName: e.target.value })
    };

    const submitForm = (formInputs) => {
        setFormInputs(formInputs);
    }

    const handleSubject = (e, subjectName) => {
        setFormInputs({...formInputs, generalSubject:true})

    }

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
            <form className='contactForm' action="mailto:emilieprick@gmail.com" method="post" enctype="text/plain">

                <div className='textFormsContainer'>
                    <label>Nom*:</label>
                    <input type="text" name="lastName" placeholder="Nom *" onChange={(e) => handleLastnameChange(e)} required />
                    <input type="text" name="firstName" placeholder='Prénom *' onChange={(e) => handleFirstnameChange(e)} required />
                    {/* <label>Rue:
                        <input type="text" name="street" placeholder='Rue' required /></label>
                    <label>Code postal:
                        <input type="number" name="zipCode" placeholder='Code Postal' required /></label>
                    <label>Localité:
                        <input type="text" name="city" placeholder='Localité' required /></label>
                    <label>Pays:
                        <input type="text" name="country" placeholder='Pays' required /></label>
                    <label>Téléphone:
                        <input type="tel" name="phone" placeholder='Numéro de téléphone' required /></label>
                    <label>Email*:
                        <input type="email" name="email" placeholder='Email' required /></label>
                    <label>Demande*:
                        <textarea type="textarea" placeholder='Votre demande/question' minlength="4"
                            maxlength="250" size="50" name="inquiry" required /></label> */}
                </div>
                <div className='radioButtonsContainer'>
                    <div className='radioButtonsBlock'>
                        <input className='radioButton' type="radio" name="generalSubject" id="général" onChange={(e) => handleSubject(e, )} value={false} />
                        <label for="plaintes">Demander une information générale</label></div>
                    <div className='radioButtonsBlock'><input className="radioButton" type="radio" name="subject" id="maltraitance" value="plaintes" />
                        <label for="plaintes">Dénoncer une maltraitance</label></div>
                    <div className='radioButtonsBlock'><input className="radioButton" type="radio" name="subject" id="présidente" value="plaintes" />
                        <label for="plaintes">Contacter la présidente</label></div>
                </div>


                <button className="send" type="submit" onSubmit={() => submitForm(formInputs)}>Envoyer</button>

            </form>
            {/* <div className='RGPD'>
                <p>Dans le cadre de la règlementation européenne (RGPD), nous prenons en compte vos droits liés à la protection de la vie privée et à la protection de vos données personnelles. Nous donnons la priorité à la confidentialité et à la sécurisation des données que vous nous confiez. Nous traitons vos données à caractère personnel en interne mais, pour des raisons techniques, nous pouvons être amenés à les transmettre à des sous-traitants ou des partenaires qui s'engagent à mettre tout en œuvre pour garantir une sécurité et une confidentialité maximales au traitement de vos données.
                En envoyant ce formulaire, vous acceptez formellement de nous confier des données personnelles. Quelles que soient les données collectées, elles ne sont jamais revendues à des tiers.</p>
            </div> */}
        </>

    )
}

export default ContactForm;