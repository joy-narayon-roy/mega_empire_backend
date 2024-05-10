const router = require("express").Router();
const clansRoutes = require("./clansRoutes");
const apikeyRoutes = require("./apikeyRoutes");
router.use("/api/v2/clans", clansRoutes);
router.use("/api/v2/apikey", apikeyRoutes);

module.exports = router;
