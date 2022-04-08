const router = require("express").Router();
const apiToken = require("../mongoSchemas/apiToken");
router.get("/", (req, res, next) => {
  res.locals.apiKey = "The api key";

  res.json(res.locals);
});
router.get("/apikey", (req, res, next) => {
  let apiPassword = process.env.APIPASSWORD;
  let { password } = req.headers;
  if (!password) {
    res.json({ msg: "Pleace set password" });
  }
  if (apiPassword === password) {
    apiToken
      .find({ name: process.env.FROM })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        next(err);
      });
  } else {
    res.json({ msg: "Invalid password!" });
  }
});
router.post("/apikey", (req, res) => {
  let apiPassword = process.env.APIPASSWORD;
  let { key, password } = req.body;
  if (!password) {
    res.json({ msg: "Pleace set password" });
  }
  if (password === apiPassword && key) {
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
