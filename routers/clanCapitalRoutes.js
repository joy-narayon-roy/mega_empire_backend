const router = require("express").Router();

const capitalRaidGetController = require("../controllers/apiControllers/clanCapitalControllers/capitalRaidGetController.js");
const capitalGetController = require("../controllers/apiControllers/clanCapitalControllers/capitalGetController");

router.get("/", capitalGetController);
router.get("/raidlog", capitalRaidGetController);

module.exports = router;
