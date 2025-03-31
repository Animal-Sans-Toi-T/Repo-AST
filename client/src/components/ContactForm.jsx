import React from 'react';

function ContactForm() {
    return (
        <>
            <form className='contactForm'>
                
                <div className='textFormsContainer'>
                    <label>Nom:<input type="text" name="nom" required /></label>
                    <label>Prénom:
                        <input type="text" name="nom" required /></label>
                    <label>Rue:
                        <input type="text" name="nom" required /></label>
                    <label>Code postal:
                        <input type="text" name="nom" required /></label>
                    <label>Localité:
                        <input type="text" name="nom" required /></label>
                    <label>Pays:
                        <input type="text" name="nom" required /></label>
                    <label>Téléphone:
                        <input type="text" name="nom" required /></label>
                    <label>Email:
                        <input type="text" name="nom" required /></label>
                </div>
                <div className='radioButtonsContainer'>
                    <input type="radio" id="plaintes" value="plaintes" />
                    <label for="plaintes">Demander une information générale</label>
                    <input type="radio" id="plaintes" value="plaintes" />
                    <label for="plaintes">Dénoncer une maltraitance</label>
                    <input type="radio" id="plaintes" value="plaintes" />
                    <label for="plaintes">Contacter la présidente</label>
                </div>


                <button className="send" type="submit">Envoyer</button>

            </form>
        </>

    )
}

export default ContactForm;