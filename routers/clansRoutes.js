const router = require("express").Router();

const clan_controller = require("../controllers/apiControllers/clan");

router.get("/currentwar", clan_controller.currentwar);
router.get("/warlog", clan_controller.warlog);
router.get("/capital/raidlog", clan_controller.clansCapitalRaidLog);
router.get("/currentleaguegroup", clan_controller.currentleaguegroup);
router.get("/warleaguewar", clan_controller.warleaguewar);
router.get("/members", clan_controller.members);
router.get("/", clan_controller.clans);
// router.get("/wardetail", wardetaileGetController);
// router.get("/warleaguelog", warleaguelogGetController);

module.exports = router;
