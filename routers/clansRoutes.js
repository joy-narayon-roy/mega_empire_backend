const router = require("express").Router();

const clan_controller = require("../controllers/apiControllers/clan");

const wardetaileGetController = require("../controllers/apiControllers/clan/wardetaileGetController");
const warleaguelogGetController = require("../controllers/apiControllers/clan/warleaguelogGetController");

router.get("/currentwar", clan_controller.currentwar);
router.get("/warlog", clan_controller.warlog);
router.get("/currentleaguegroup", clan_controller.currentleaguegroup);
router.get("/warleaguewar", clan_controller.warleaguewar);
router.get("/wardetail", wardetaileGetController);
router.get("/warleaguelog", warleaguelogGetController);
router.get("/members", clan_controller.members);
router.get("/capitalraidseasons");
router.get("/", clan_controller.clans);
router.get("/*");

module.exports = router;
