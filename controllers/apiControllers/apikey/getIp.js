const { default: axios } = require("axios");

async function getIp(req, res, next) {
  try {
    const { status, data } = await axios.get(
      "https://api.ipify.org?format=json"
    );
    res.status(status).json(data);
  } catch (e) {
    next(e);
  }
}
module.exports = getIp;
