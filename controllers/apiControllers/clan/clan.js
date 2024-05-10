const { getClan } = require("../../../services/clans");

async function clan(req, res, next) {
  const { tag } = req.params;
  try {
    let { status, data } = await getClan(tag);
    res.status(status).json(data);
  } catch (e) {
    next(e);
  }
}

module.exports = clan;
