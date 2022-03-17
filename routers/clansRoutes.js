const router = require("express").Router();

const clanGetController = require("../controllers/clanControllers/clanGetController");
const currentwarGetController = require("../controllers/clanControllers/currentwarGetController");
const warleaguegroupGetController = require("../controllers/clanControllers/warleaguegroupGetController");
const warleaguewarGetController = require("../controllers/clanControllers/warleaguewarGetController");
const clanmembersGetController = require("../controllers/clanControllers/clanmembersGetController");
const warlogGetController = require("../controllers/clanControllers/warlogGetController");
const seasonInfoGetController = require("../controllers/clanControllers/seasonInfoGetController");
const clanwarDetailsGetController = require("../controllers/clanControllers/clanwarDetailsGetController");

router.get("/", (req, res) => {
  res.json({ message: "You are in clan" });
});
router.get("/:tag", clanGetController);
router.get("/:tag/members", clanmembersGetController);
router.get("/:tag/currentwar", currentwarGetController);
router.get("/:tag/warlog", warlogGetController);
router.get("/:tag/wardetails/:endtime", clanwarDetailsGetController);
router.get("/clanwarleague/group/:tag", warleaguegroupGetController);
router.get("/clanwarleague/war/:tag", warleaguewarGetController);
router.get("/clanwarleague/seasoninfo/:tag", seasonInfoGetController);

module.exports = router;
