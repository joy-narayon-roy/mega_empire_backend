// const { findPlayer } = require("../../../utilities/cocPlayer");
const usePlayer = require("../../../hooks/usePlayer");

async function playerGet(req, res, next) {
  try {
    let { tag } = req.query;
    console.log(tag);
    if (!tag) {
      res.status(400).json({ message: "Provid valid Player Tag" });
    }
    let player = await usePlayer(tag);

    res.status(200).json(player);
  } catch (err) {
    next(err);
  }
}

module.exports = playerGet;
