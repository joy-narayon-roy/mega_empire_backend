const router = require("express").Router();

const clanGetController = require("../controllers/apiControllers/clanControllers/clanGetController");
const currentwarGetController = require("../controllers/apiControllers/clanControllers/currentwarGetController");
const currentwarleagueGetController = require("../controllers/apiControllers/clanControllers/currentwarleagueGetController");
const warlogGetCOntroller = require("../controllers/apiControllers/clanControllers/warlogGetCOntroller");
const wardetaileGetController = require("../controllers/apiControllers/clanControllers/wardetaileGetController");
//const currentwarleaguewarGetController = require("../controllers/apiControllers/clanControllers/currentwarleagueGetController");
const warleaguelogGetController = require("../controllers/apiControllers/clanControllers/warleaguelogGetController");
const warleaguewarGetController = require("../controllers/apiControllers/clanControllers/warleaguewarGetController");

router.get("/", clanGetController);
router.get("/currentwar", currentwarGetController);
router.get("/warlog", warlogGetCOntroller);
router.get("/wardetail", wardetaileGetController);
router.get("/currentwarleague", currentwarleagueGetController);
router.get("/warleaguelog", warleaguelogGetController);
router.get("/warleaguewar", warleaguewarGetController);
router.get("/*");

module.exports = router;
