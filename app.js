const express = require("express");
const routers = require("./routers");
const middlewares = require("./middlewares");
const api_key = require("./db/apikeyDB");
const app = express();

app.use(middlewares);
app.use(routers);

app.use((err, req, res, next) => {
  if (err.isAxiosError) {
    const { data, status } = err.response;
    if (status == 403) {
      api_key.report(data.message);
      return res.status(500).json({ reason: "Internal server error." });
    }
    return res.status(status).json({ status, ...data });
  } else if (err.status && err.status >= 400 && err.status < 500) {
    res.status(err.status).json({ reason: err.message });
  } else {
    console.log(err);
    res.status(500).json({ reason: "Internal server error." });
  }
});

module.exports = app;
