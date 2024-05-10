const cocReq = require("../../utilities/cocReq");
const querystring = require("node:querystring");

function getWarLog({ tag, limit, after, before }) {
  tag = tag ? tag : process.env.ME_CLAN_TAG;
  tag = tag.replace("#", "%23");
  const PATH = `/v1/clans/${tag}/warlog${limit ? "?limit=" + limit : ""}${
    after && limit ? "&after=" + after : ""
  }${before && limit ? "&before=" + before : ""}`;

  return cocReq().get(PATH);
}
module.exports = getWarLog;
