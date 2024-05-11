const router = require("express").Router();
const clansRoutes = require("./clansRoutes");
const apikeyRoutes = require("./apikeyRoutes");
const playersRoutes = require("./playersRoutes");

router.use("/api/v2/clans", clansRoutes);
router.use("/api/v2/players", playersRoutes);
router.use("/api/v2/apikey", apikeyRoutes);

router.get("/", (req, res) => {
  return res.status(200).json({ message: "Looks good." });
});

router.use("*", (_req, _res, next) => {
  const err = new Error("Path not found");
  err.status = 404;
  next(err);
});

module.exports = router;
