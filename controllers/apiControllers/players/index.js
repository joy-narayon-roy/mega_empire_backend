const playersServices = require("../../../services/players");
const error = require("../../../utilities/error");

async function players(req, res, next) {
  const { tag } = req.query;

  try {
    if (!tag) {
      throw error("Provid a player tag to findout the player.", 400);
    }
    const { data, status } = await playersServices.getPlayers(tag);
    return res.status(status).json(data);
  } catch (e) {
    next(e);
  }
}

async function post_players(req, res, next) {
  const { tag, token } = req.body;
  try {
    if (!tag || !token) {
      throw error("Provide tag and token", 400);
    }
    const { data, status } = await playersServices.verifyPlayer(tag, token);
    return res.status(status).json(data);
  } catch (e) {
    next(e);
  }
}

module.exports = {
  players,
  post_players,
};
