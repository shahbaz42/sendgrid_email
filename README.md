API endpoints

    1 : /
        server status
    
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
