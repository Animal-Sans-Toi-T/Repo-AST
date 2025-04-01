import React, { useState } from 'react';

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
    const [isActive, setIsActive] = useState("");

    const handleLastnameChange = (e) => {
        setLastname(e.target.value);
    };

    // const submitForm = async(e) => {
    //     e.preventDefault();



    return (
        <>
            <form className='contactForm' action="mailto:emilieprick@gmail.com" method="post" enctype="text/plain">

                <div className='textFormsContainer'>
                    <label>Nom:</label><br />
                    <input type="text" name="nom" onChange={(e) => handleLastnameChange(e)} required />
                    {/* <label>Prénom:
                        <input type="text" name="nom" required /></label>
                    <label>Rue:
                        <input type="text" name="nom" required /></label>
                    <label>Code postal:
                        <input type="number" name="nom" required /></label>
                    <label>Localité:
                        <input type="text" name="nom" required /></label>
                    <label>Pays:
                        <input type="text" name="nom" required /></label>
                    <label>Téléphone:
                        <input type="tel" name="nom" required /></label>
                    <label>Email:
                        <input type="email" name="nom" required /></label>
                    <label>Demande:
                        <input type="textarea" minlength="4"
                            maxlength="250" size="50" name="nom" required /></label> */}
                </div>
                {/* <div className='radioButtonsContainer'>
                    <input type="radio" id="plaintes" value="plaintes" />
                    <label for="plaintes">Demander une information générale</label>
                    <input type="radio" id="plaintes" value="plaintes" />
                    <label for="plaintes">Dénoncer une maltraitance</label>
                    <input type="radio" id="plaintes" value="plaintes" />
                    <label for="plaintes">Contacter la présidente</label>
                </div> */}


                <button className="send" type="submit" onSubmit={(e)=>submitForm(e)}>Envoyer</button>

            </form>
        </>

    )
}

export default ContactForm;