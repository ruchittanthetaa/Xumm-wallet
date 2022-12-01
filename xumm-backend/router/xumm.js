const express = require("express");
const router = express.Router();
const cors = require("cors");
const loginData = require("../controller/login");


router.post("/login", cors(), loginData.login);
router.get("/payload/:payload_uuid", cors(), loginData.payloadLogin);
router.delete("/logout/:payload_uuid", cors(), loginData.payloadLoginout);

module.exports = router;
