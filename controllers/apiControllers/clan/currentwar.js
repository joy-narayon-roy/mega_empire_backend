const { getCurrentwar } = require("../../../services/clans");

async function currentwar(req, res, next) {
  try {
    let { tag = "#RRVJCJVY" } = req.query;
    const { data, status } = await getCurrentwar(tag);
    return res.status(status).json(data);
  } catch (e) {
    next(e);
  }
}

module.exports = currentwar;
