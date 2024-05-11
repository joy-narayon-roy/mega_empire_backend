const router = require("express").Router();
const playersController = require("../controllers/apiControllers/players");

router.get("/", playersController.players);
router.post("/", playersController.post_players);

module.exports = router;
