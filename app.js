const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const allRoute = require("./routers/allRoutes");
const ApiToken = require("./mongoSchemas/apiToken");
const updateCurrentWarInfo = require("./utilities/updateCurrentWarInfo");
var axios = require("axios");

let app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

const accessDomain = process.env.ACCESS_DOMAIN.split(" ");

const allMiddleWar = [
  express.json(),
  cors({
    origin: accessDomain,
    credentials: true,
  }),
];
app.use(allMiddleWar);
/*
setInterval(() => {
  console.log(updateCurrentWarInfo());
}, 120000);
*/
setInterval(() => {
  axios.get("https://megaempire.herokuapp.com/save/clan/CurrentWar");
}, 130000);
const PORT = process.env.PORT || 8080;
app.get("/", async (req, res) => {
  res.json({ msg: "HI" });
});
allRoute(app);

const GLOBAL_DB = `mongodb+srv://Joy:${process.env.DB_PASSWORD}@cluster0.xbov4.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const LOCAL_DB = "mongodb://127.0.0.1:27017/coc";
mongoose.connect(
  process.env.FROM === "dev" ? LOCAL_DB : GLOBAL_DB,
  function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("DB Connected");

      app.listen(PORT, (err) => {
        if (err) {
          console.log("Error! Faild to run server");
          console.log(err);
        } else {
          console.log(`Running at http://localhost:${PORT}`);
        }
      });
    }
  }
);
