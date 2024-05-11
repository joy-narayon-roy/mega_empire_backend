const clanServices = require("../../../services/clans");
const error = require("../../../utilities/error");

async function clansCapitalRaidLog(req, res, next) {
  const { tag, ...rest } = req.query;
  try {
    const { status, data } = await clanServices.getCapitalraidseasons(
      tag,
      rest
    );
    return res.status(status).json(data);
  } catch (e) {
    next(e);
  }
}

module.exports = clansCapitalRaidLog;
