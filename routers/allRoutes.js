// const router = require("express").Router()
const clansRoutes = require("./clansRoutes");
const saveRoutes = require("./saveRoutes");

let routes = [
  {
    path: "/save/clan",
    route: saveRoutes,
  },
  {
    path: "/api/clan",
    route: clansRoutes,
  },
];

module.exports = (app) => {
  return routes.forEach((rout) => {
    app.use(rout.path, rout.route);
  });
};
