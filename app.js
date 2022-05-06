const express = require("express");
const router = require("./api/routes/router");
require("dotenv").config();

const app = express();
app.use(express.urlencoded({extended: true}));

app.get("/", async (req, res) => {
    res.status(200).send("Server is up and running");
});

app.use("/api", router);

app.listen( process.env.PORT, () => {
    console.log(`Server started at port ${process.env.PORT}`);
});

/*
    API endpoints

    1 : /
        sends server status
    
    2 : /api/send_mail
        sends a single email to a single recipient
        body: {
            email: "",
            subject: "",
            body: "",
            html: ""
        }

    3 : /api/send_multiple
        sends a single email to multiple recipients
        body: {
            recipients: [], 
            subject: "",
            body: "",
            html: ""
        }
    
    environment variables:
        PORT
        SENDGRID_API_KEY
        SENDGRID_SENDER_EMAIL
*/