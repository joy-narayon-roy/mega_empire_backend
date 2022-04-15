const { findPlayer } = require("../../../utilities/cocPlayer");

async function playerGet(req, res, next) {
  try {
    let { tag } = req.query;
    if (!tag) {
      throw Error("Provide Player Tag!");
    }
    let player = await findPlayer(tag);

    res.status(200).json(player);
  } catch (err) {
    next(err);
  }
}

module.exports = playerGet;
