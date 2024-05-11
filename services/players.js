const cocReq = require("../utilities/cocReq");

function getPlayers(tag) {
  tag = tag.replace("#", "%23");
  const PATH = `/v1/players/${tag}`;
  return cocReq().get(PATH);
}

function verifyPlayer(tag, token) {
  tag = tag.replace("#", "%23");
  const PATH = `/v1/players/${tag}/verifytoken`;
  return cocReq().post(PATH, {
    token,
  });
}

module.exports = {
  getPlayers,
  verifyPlayer,
};
