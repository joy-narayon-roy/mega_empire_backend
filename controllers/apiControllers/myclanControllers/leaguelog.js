const ClanWarLeague = require("../../../mongoSchemas/clanWarLeagueInfo");

function leaguelog(req, res, next) {
  ClanWarLeague.find()
    .populate("rounds.warTags")
    .then((findRes) => {
      res.json(findRes);
    })
    .catch((err) => next(err));
}

module.exports = leaguelog;
