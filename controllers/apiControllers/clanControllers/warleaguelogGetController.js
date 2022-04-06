const ClanWarLeagueInfo = require("../../../mongoSchemas/clanWarLeagueInfo");

async function warleaguelogGetController(req, res, next) {
  ClanWarLeagueInfo.find()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      next(err.error);
    });
  //res.send("warleaguelog");
}
module.exports = warleaguelogGetController;
