const { getLeaguegroupWar } = require("../../../services/clans");

async function warleaguewar(req, res, next) {
  const { tag } = req.query;
  try {
    const { status, data } = await getLeaguegroupWar(tag);
    return res.status(status).send(data);
  } catch (e) {
    next(e);
  }
}

module.exports = warleaguewar;
