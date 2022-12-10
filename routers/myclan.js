const router = require("express").Router();
const leaguelog = require("../controllers/apiControllers/myclanControllers/leaguelog");

router.get("/leaguelog", leaguelog);

module.exports = router;
