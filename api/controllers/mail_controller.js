const {send_mail, send_multiple} = require('./../../utils/sendgrid');

exports.send_mail = async (req, res) => {
    
    const to = req.body.email;
    const subject = req.body.subject;
    const body = req.body.body;
    const html = req.body.html;
    try {
        const result = await send_mail(to, subject, body, html);
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.send_multiple = async (req, res) => {
    const to = req.body.email;
    const subject = req.body.subject;
    const body = req.body.body;
    const html = req.body.html;

    try {
        const result = await send_multiple(to, subject, body, html);
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send(error);
    }
}