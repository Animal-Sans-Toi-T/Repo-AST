// TODO: 
// -configurer avec la réelle adresse du client (sur le transporteur et le dotenv)
// -vérifier la sécu partout 
// -finir de la logique pour chacune des différentes adresses email (quand on les aura)


// NICE TO HAVE TO DO: 
// -styliser les emails envoyés
// -CMS pour changer les différentes adresses emails plus simplement? 





// This file handles the logic of sending email, using nodemailer

import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();


const receiverEmailAddress = (subject) => {
    switch (subject) {
        case "général":
            return process.env.EMAIL_GENERAL;
        case "maltraitance":
            return process.env.EMAIL_MALTRAITANCE;
        case "présidente":
            return process.env.EMAIL_PRESIDENTE;
        case "parrainage":
            return process.env.EMAIL_PARRAINAGE;
        case "bénévolat":
            return process.env.EMAIL_BENEVOLE;
        case "membres":
            return process.env.EMAIL_MEMBRES;
        case "site internet":
            return process.env.EMAIL_SITE;
        default:
            return process.env.EMAIL_GENERAL;
    }
};

// Defines an Express handler function that will run when a request is made to the API.
// It receives req (request) and res (response) from the frontend.
const sendEmail = async (req, res) => {
    // Extracts data from the request body (sent by the frontend form).
    // console.log("entered the sendEmail function in emailController");
    const formInputs = req.body;

    const { subject,
        lastName,
        firstName,
        street,
        zipCode,
        city,
        country,
        phone,
        email,
        inquiry } = formInputs;


    try {
        // en réalité, ce n'est pas l'utilisateur qui envoie réellement l'email, c'est notre serveur au travers de process.env.EMAIL_GENERAL (ou autre adresse email spécifique) en reprenant les infos qui sont dans le formulaire
        // donc il faut bien garder user: process.env.EMAIL_GENERAL ici et non receiverEmailAddress(subject). 
        const transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: process.env.EMAIL_GENERAL,
                pass: process.env.EMAIL_GENERAL_PASS
            },
            tls: {
                rejectUnauthorized: false
            }
        });


        const mailOptions = {
            // info récupérées dans le useState à travers la req()
            to: receiverEmailAddress(subject),
            from: email, //c'est un "faux from", en réalité l'email est envoyé par notre propre serveur (cfr transporteur) mais reprend l'adresse email encodée dans le formulaire
            subject: subject,
            text: `Vous avez un message! \n 
            DE: ${lastName} ${firstName} \n 
            ADDRESSE: ${street}, ${zipCode} - ${city}, ${country}\n
            TELEPHONE: ${phone} \n
            EMAIL: ${email} \n
            MESSAGE: ${inquiry}`
        };

        console.log(mailOptions);

        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error sending email" });
    }
};

export default sendEmail;