const { default: axios } = require("axios");
const express = require("express");
const cors = require("cors");
const router = require("./router/xumm");
const bodyParser = require("body-parser");

require("dotenv").config({
  path: ".env",
});


const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(router);

app.get('/', (req, res) => {
    res.send("Url not found!");
})


const server = app.listen(process.env.PORT, function () {
  console.log("Listening on port " + server.address().port);
});
