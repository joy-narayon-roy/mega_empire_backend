const { getMembers } = require("../../../services/clans");

async function members(req, res, next) {
  const query = req.query;
  try {
    const { data, status } = await getMembers(query);
    return res.status(status).json(data);
  } catch (e) {
    next(e);
  }
}

module.exports = members;
