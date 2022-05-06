require("dotenv").config();
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const sendgrid_sender_email = process.env.SENDGRID_SENDER_EMAIL;

// send_mail() is for sending a single email to an adress.
// send_mail() can also be used to send mail to multiple email adresses
// but all recepients will be able to see each other's email addresses
const send_mail = async (email, subject, body, html) => {
    return new Promise( async (resolve, reject) => {

        const msg = {
            to: email,
            from: sendgrid_sender_email,
            subject: subject,
            text: body,
            html: html
        };

        try {
            const result = await sgMail.send(msg);
            resolve(result);

        } catch (error) {
            console.log(error);
            reject(error);
        }
    });
}

//send_multiple() sends individual emails to multiple recipients,
// where they don't see each other's email addresses

const send_multiple = async (email_array, subject, body, html) => {
    return new Promise( async (resolve, reject) => {
        const msg = {
            to: email_array,
            from: sendgrid_sender_email,
            subject: subject,
            text: body,
            html: html
        };

        try {
            const result = await sgMail.sendMultiple(msg);
            resolve(result);
        } catch (error) {
            console.log(error);
            reject(error);
        }
    })
}

async function test_send_mail() {
    try{
        const result = await send_mail('shahbaz_ali@outlook.in', 'Subject', 'Body', '<h1> html </h1>');
        console.log("result: " + JSON.stringify(result));
    } catch (error){
        console.log("error" + JSON.stringify(error));
    }
}

async function test_send_multiple() {
    try{
        const result = await send_multiple(['shahbaz_ali@outlook.in', 'shahbaz2011055@outlook.in'], 'Subject', 'Body', '<h1> html </h1>');
        console.log("result: " + JSON.stringify(result));
    } catch (error){
        console.log("error" + JSON.stringify(error));
    }
}

// test_send_mail();
// test_send_multiple();

module.exports = {
    send_mail,
    send_multiple
}








