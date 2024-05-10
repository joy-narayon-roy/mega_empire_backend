const clan_services = require("../../../services/x");
async function warlogGetCOntroller(req, res, next) {
  const { tag = "#RRVJCJVY", limit, before, after } = req.query;
  try {
    const { status, data } = await clan_services.getWarLog({
      tag,
      limit,
      before,
      after,
    });
    return res.status(status).json(data);
  } catch (e) {
    next(e);
  }
}

module.exports = warlogGetCOntroller;
