const router = require("express").Router();
const playerGet = require("../controllers/apiControllers/playerController/playerGet");
const playerVerify = require("../controllers/apiControllers/playerController/playerVerify");

router.get("/", playerGet);
router.get("/verify", playerVerify);

module.exports = router;
