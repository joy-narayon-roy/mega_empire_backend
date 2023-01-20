const route = require("express").Router();
const api_key_bd = require("../utilities/apikeyDB");

route.get("/apikey", (req, res) => {
  res.json({
    message: api_key_bd.getKey(),
  });
});

route.post("/apikey", (req, res) => {
  let { key } = req.body;
  if (key) {
    api_key_bd.updateKey(key);
    res.json({
        message:"Key Updated."
    })
  } else {
    res.json({
      message: "Set key",
    });
  }
});

module.exports = route;
