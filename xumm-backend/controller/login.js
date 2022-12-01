const { default: axios } = require("axios");

require("dotenv").config({
  path: ".env",
});

const API_KEY = process.env.API_KEY;
const API_SECRET = process.env.API_SECRET;

const login = async (req, res) => {
  console.log(new Date().toString(), "login call");
  try {
    const payload = await axios.post(
      "https://xumm.app/api/v1/platform/payload",
      JSON.stringify({
        txjson: { TransactionType: "SignIn" },
        options: { expires_at: 60000 },
      }),
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-API-Key": API_KEY,
          "X-API-Secret": API_SECRET,
        },
      }
    );
    if (payload.status === 200)
      return res.status(200).json({
        status: true,
        data: {
          uuid: payload.data.uuid,
          next: payload.data.next.always,
          qrUrl: payload.data.refs.qr_png,
          wsUrl: payload.data.refs.websocket_status,
          pushed: payload.data.pushed,
        },
      });
    // if (payload.status === 500)
    return res.status(400).json({ status: false, data: null });
  } catch (e) {
    // console.log(e);
    console.log(new Date().toString(), "login failed");
    return res.status(500).json({ status: false, data: "login failed" });
  }
};

const payloadLogin = async (req, res) => {
  console.log(new Date().toString(), "payload call");
  try {
    const payload = await axios.get(
      `https://xumm.app/api/v1/platform/payload/${req.params.payload_uuid}`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-API-Key": API_KEY,
          "X-API-Secret": API_SECRET,
        },
      }
    );
    if (payload.status === 200)
      return res.status(200).json({
        status: true,
        account: payload.data.response.account,
      });

    if (payload.status === 500)
      return res.status(400).json({ status: false, data: "Payload not found" });
  } catch (e) {
    console.log(e);
    console.log(new Date().toString(), "payload failed");
    return res.status(500).json({ status: false, data: "payload failed" });
  }
};

const payloadLoginout = async (req, res) => {
  console.log(new Date().toString(), "logout call");
  try {
    const payload = await axios.delete(
      `https://xumm.app/api/v1/platform/payload/${req.params.payload_uuid}`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-API-Key": API_KEY,
          "X-API-Secret": API_SECRET,
        },
      }
    );
    if (payload.status === 200)
      return res.status(200).json({
        status: true,
        data: payload.data,
      });
    return res.status(400).json({ status: false, data: null });
  } catch (e) {
    // console.log(e);
    console.log(new Date().toString(), "logout failed");
    return res.status(500).json({ status: false, data: "logout failed" });
  }
};

module.exports = { login, payloadLogin, payloadLoginout };
