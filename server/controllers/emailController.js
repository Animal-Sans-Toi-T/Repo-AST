
// This handles the logic of sending email, using nodemailer

import nodemailer from "nodemailer";
// import dotenv from "dotenv";
// dotenv.config();


// Defines an Express handler function that will run when a request is made to the API.
// It receives req (request) and res (response) from the frontend.

const sendEmail = async (req, res) => {
    // Extracts data from the request body (sent by the frontend form).
    console.log("entered the sendEmail function in emailController");
    const { lastName } = req.body;

    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: 'grayson.wunsch48@ethereal.email',
                pass: 'VD4tmah8syEuvfbcuj'
            },
            tls: {
                rejectUnauthorized: false
            }
        });
        // const transporter = nodemailer.createTransport({
        //     service: "gmail",
        //     auth: {
        //         user: process.env.EMAIL_USER, 
        //         pass: process.env.EMAIL_PASS, 
        //     },
        // });

        const mailOptions = {
            // info récupérées dans le useState ()
            from: lastName,
            to: "grayson.wunsch48@ethereal.email"
            // to: process.env.EMAIL_USER, // Receiving email
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