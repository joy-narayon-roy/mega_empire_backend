// const router = require("express").Router()
const { Router } = require("express");
const clansRoutes = require("./clansRoutes");
const saveRoutes = require("./saveRoutes");
const cpanelRoures = require("./cpanelRoutes");
const playerRoutes = require("./playerRoutes");
const coc = require("../utilities/coc");
const myclan = require("./myclan")

let router = Router();
// router.get("/player", async (req, res) => {
//   coc
//     .findPlayer("#98QYV2PYR")
//     .then((resdata) => {
//       res.status(200).json(resdata);
//     })
//     .catch((err) => {
//       res.status(404).json({ msg: err.message });
//     });
// });

// router.get("/clan", (req, res) => {
//   coc
//     .findClan()
//     .then((resData) => {
//       console.log(resData);
//       res.json(resData);
//     })
//     .catch((err) => {
//       res.status(400).json({ msg: err.message });
//     });
// });

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
  },{
    path:"/api/myclan",
    route:myclan
  },
  {
    path: "/cpanel",
    route: cpanelRoures,
  },
  // {
  //   path: "/test",
  //   route: router,
  // },
];

module.exports = (app) => {
  return routes.forEach((rout) => {
    app.use(rout.path, rout.route);
  });
};
