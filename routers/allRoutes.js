// const router = require("express").Router()
const clansRoutes = require("./clansRoutes");
const saveRoutes = require("./saveRoutes");
const cpanelRoures = require("./cpanelRoutes");
const playerRoutes = require("./playerRoutes");
const { Router } = require("express");
const { findPlayer } = require("../utilities/cocPlayer");

let router = Router();
router.get("/", (req, res) => {
  findPlayer("Tag");

  res.send("TEST");
});

router.g;

let routes = [
  {
    path: "/save/clan",
    route: saveRoutes,
  },
  {
    path: "/api/clan",
    route: clansRoutes,
  },
  {
    path: "/api/player",
    route: playerRoutes,
  },
  {
    path: "/cpanel",
    route: cpanelRoures,
  },
  {
    path: "/test",
    route: router,
  },
];

module.exports = (app) => {
  return routes.forEach((rout) => {
    app.use(rout.path, rout.route);
  });
};
