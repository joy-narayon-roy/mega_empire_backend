const apikeyController = require("../controllers/apiControllers/apikey");
const router = require("express").Router();

router.get("/verify", apikeyController.verifyToken);
router.get("/ip", apikeyController.getIp);
router.get("/reset", apikeyController.resetKey);
router.post("/", apikeyController.postApikey);
router.get("/", apikeyController.getApikey);

module.exports = router;
