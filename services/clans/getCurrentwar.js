const cocReq = require("../../utilities/cocReq");

function getCurrentwar(tag) {
  tag = tag ? tag : process.env.ME_CLAN_TAG;
  tag = tag.replace("#", "%23");

  const PATH = `/v1/clans/${tag}/currentwar`;
  return cocReq().get(PATH);
}
module.exports = getCurrentwar;
