const router = require("express").Router();
const { networkInterfaces } = require("os");
const apiToken = require("../mongoSchemas/apiToken");
const api_key_db = require("../utilities/apikeyDB");

router.get("/", (req, res, next) => {
  res.locals.apiKey = "The api key";

  res.json(res.locals);
});

router.post("/apikey", (req, res) => {
  let apiPassword = process.env.APIPASSWORD;
  let { key, password } = req.body;

  if (!password) {
    res.status(200).json({ msg: "Pleace set password" });
  }
  if (password === apiPassword) {
    api_key_db.updateKey(key);
    apiToken
      .findOneAndUpdate(
        { name: process.env.FROM },
        {
          token: key,
        }
      )
      .then((data) => res.json(data))
      .catch((err) => next(err));
  } else {
    res.json({ msg: "Invalid password!" });
  }
});

module.exports = router;
