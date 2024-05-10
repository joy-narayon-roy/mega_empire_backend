const api_key = require("../../../db/apikeyDB");

function getApikey(req, res, next) {
  const key = api_key.key;
  res.status(200).json({ ...key });
}

module.exports = getApikey;
