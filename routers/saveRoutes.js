const router = require("express").Router();

const saveCurrentWarInfoGetController = require('../controllers/saveControllers/saveCurrentWarInfoGetController')

router.get("/currentwar/:tag",saveCurrentWarInfoGetController)


module.exports=router