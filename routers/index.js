const router = require("express").Router();
const clansRoutes = require("./clansRoutes");
const apikeyRoutes = require("./apikeyRoutes");
router.use("/api/v2/clans", clansRoutes);
router.use("/api/v2/apikey", apikeyRoutes);
router.use("*", (req, res, next) => {
  const err = new Error("Path not found");
  err.status = 404;
  next(err);
});

module.exports = router;
