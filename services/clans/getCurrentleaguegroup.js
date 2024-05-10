const cocReq = require("../../utilities/cocReq");

function getCurrentleaguegroup(tag) {
  tag = tag ? tag : process.env.ME_CLAN_TAG;
  tag = tag.replace("#", "%23");

  const PATH = `v1/clans/${tag}/currentwar/leaguegroup`;
  return cocReq().get(PATH);
}
module.exports = getCurrentleaguegroup;
