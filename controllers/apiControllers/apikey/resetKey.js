const api_key = require("../../../db/apikeyDB");

function resetKey(req, res, next) {
  api_key.resetKey();
  res.status(200).json({ message: "API key reseted.", key: api_key.key });
}

module.exports = resetKey;
