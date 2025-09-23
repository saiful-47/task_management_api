import nodemailer from "nodemailer";
import {EMAIL_HOST, EMAIL_PASSWORD, EMAIL_PORT, EMAIL_SECURITY, EMAIL_USERNAME} from "../config/config.js";

const EmailSend = async (EmailTo,EmailText,EmailSubject) => {

    let transporter = nodemailer.createTransport({
        host: EMAIL_HOST,
        port: EMAIL_PORT,
        secure: EMAIL_SECURITY,
        auth:{
            user: EMAIL_USERNAME,
            pass: EMAIL_PASSWORD,
        },
        tls:{
            rejectUnauthorized: false
        }
    })

    let mailOptions = {
        from: 'Task Manager Apps',
        to: EmailTo,
        subject:EmailSubject,
        text:EmailText,
    }

    return await transporter.sendMail(mailOptions);
}

export default EmailSend;