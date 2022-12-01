// const { default: axios } = require("axios");
// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");

// require("dotenv").config({
//   path: ".env.development",
// });

// const API_KEY = process.env.API_KEY;
// const API_SECRET = process.env.API_SECRET;

// const app = express();

// app.use(cors());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// app.post("/login", async (req, res) => {
//   console.log(new Date().toString(), "login call");
//   try {
//     const payload = await axios.post(
//       "https://xumm.app/api/v1/platform/payload",
//       JSON.stringify({
//         txjson: { TransactionType: "SignIn" },
//       }),
//       {
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//           "X-API-Key": API_KEY,
//           "X-API-Secret": API_SECRET,
//         },
//       }
//     );
//     if (payload.status === 200)
//       return res.json({
//         status: true,
//         data: {
//           uuid: payload.data.uuid,
//           next: payload.data.next.always,
//           qrUrl: payload.data.refs.qr_png,
//           wsUrl: payload.data.refs.websocket_status,
//           pushed: payload.data.pushed,
//         },
//       });
//     return res.json({ status: false, data: null });
//   } catch (e) {
//     console.log(new Date().toString(), "login failed");
//     return res.json({ status: false, data: null });
//   }
// });

// app.get("/payload/:payload_uuid", async (req, res) => {
//   console.log(new Date().toString(), "payload call");
//   try {
//     const payload = await axios.get(
//       `https://xumm.app/api/v1/platform/payload/${req.params.payload_uuid}`,
//       {
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//           "X-API-Key": API_KEY,
//           "X-API-Secret": API_SECRET,
//         },
//       }
//     );
//     if (payload.status === 200)
//       return res.json({
//         status: true,
//         data: payload.data,
//       });
//     return res.json({ status: false, data: null });
//   } catch (e) {
//     console.log(new Date().toString(), "payload failed");
//     return res.json({ status: false, data: null });
//   }
// });

// app.delete("/logout/:payload_uuid", async (req, res) => {
//   console.log(new Date().toString(), "logout call");
//   try {
//     const payload = await axios.delete(
//       `https://xumm.app/api/v1/platform/payload/${req.params.payload_uuid}`,
//       {
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//           "X-API-Key": API_KEY,
//           "X-API-Secret": API_SECRET,
//         },
//       }
//     );
//     if (payload.status === 200)
//       return res.json({
//         status: true,
//         data: payload.data,
//       });
//     return res.json({ status: false, data: null });
//   } catch (e) {
//     console.log(new Date().toString(), "logout failed");
//     return res.json({ status: false, data: null });
//   }
// });

// const server = app.listen(process.env.PORT || 5000, function () {
//   console.log("Listening on port " + server.address().port);
// });
