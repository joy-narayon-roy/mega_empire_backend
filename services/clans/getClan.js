const cocReq = require("../../utilities/cocReq");

function getClan(tag) {
  tag = tag ? tag : process.env.ME_CLAN_TAG;
  tag = tag.replace("#", "%23");

  const PATH = `/v1/clans/${tag}`;
  const reqest = cocReq();
  return reqest.get(PATH);
}

module.exports = getClan;
