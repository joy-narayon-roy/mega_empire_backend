const clan_services = require("../../../services/clans");

async function clans(req, res, next) {
  const req_query = req.query;
  const { tag, limit = 10, ...all } = req_query;
  const que = { limit, ...all };

  try {
    if (tag || Object.keys(req_query).length == 0) {
      const { status, data } = await clan_services.getClan(tag);
      return res.status(status).json(data);
    } else {
      const { status, data } = await clan_services.getClans(que);
      res.status(status).json(data);
    }
  } catch (e) {
    next(e);
  }
}

module.exports = clans;
