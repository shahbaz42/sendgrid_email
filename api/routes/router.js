const express = require("express");
const router = express.Router();
const mail_controller = require("../controllers/mail_controller")

router.post("/send_mail", mail_controller.send_mail );
router.post("/send_multiple", mail_controller.send_multiple) ;

module.exports = router ;