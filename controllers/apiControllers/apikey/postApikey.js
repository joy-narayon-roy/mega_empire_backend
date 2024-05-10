const api_key = require("../../../db/apikeyDB");

function postApikey(req, res, next) {
  const { key } = req.body;
  if (!key) {
    return res.status(400).json({ reason: "Provide a key to update." });
  }
  api_key.updateKey(key);
  res.status(200).json({ message: "Key updated.", key });
}

module.exports = postApikey;
