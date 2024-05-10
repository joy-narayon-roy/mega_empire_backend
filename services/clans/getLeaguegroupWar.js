const cocReq = require("../../utilities/cocReq");

function getLeaguegroupWar(tag) {
  tag = tag ? tag : process.env.ME_CLAN_TAG;
  tag = tag.replace("#", "%23");

  const PATH = `/v1/clanwarleagues/wars/${tag}`;
  return cocReq().get(PATH);
}
module.exports = getLeaguegroupWar;
