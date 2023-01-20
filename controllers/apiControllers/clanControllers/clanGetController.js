const useClan = require("../../../hooks/useClan");

async function clanGetController(req, res) {
  let { tag = "%23RRVJCJVY" } = req.query;
  try {
    let { status, data } = await useClan(tag);
    res.status(status).json(data);
  } catch (error) {
    res.status(500).json({
      message: "Internal server error!",
    });
  }
}

module.exports = clanGetController;
