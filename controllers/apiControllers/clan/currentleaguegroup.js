const { getCurrentleaguegroup } = require("../../../services/clans");
async function currentleaguegroup(req, res, next) {
  const { tag } = req.query;
  try {
    const { status, data } = await getCurrentleaguegroup(tag);
    return res.status(status).json(data);
  } catch (e) {
    next(e);
  }
}

module.exports = currentleaguegroup;
