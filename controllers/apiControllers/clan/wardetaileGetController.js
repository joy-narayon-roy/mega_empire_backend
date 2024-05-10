const WarInfo = require("../../../mongoSchemas/warInfo");

async function wardetaileGetController(req, res, next) {
  let { tag = "#RRVJCJVY" } = req.query;

  WarInfo.findById(tag)
    .then((datas) => {
      res.status(200).json(datas);
    })
    .catch((err) => {
      next(err.error);
    });
}

module.exports = wardetaileGetController;
