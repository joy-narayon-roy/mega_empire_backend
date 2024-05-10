const { getCurrentwar } = require("../../../services/x");

async function currentwarGetController(req, res, next) {
  try {
    let { tag = "#RRVJCJVY" } = req.query;
    const { data, status } = await getCurrentwar(tag);
    return res.status(status).json(data);
  } catch (e) {
    next(e);
  }
}

module.exports = currentwarGetController;
