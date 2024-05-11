const cocReq = require("../../utilities/cocReq");
const querystring = require("node:querystring");

function getCapitalraidseasons(tag, query = {}) {
  tag = tag ?? process.env.ME_CLAN_TAG;
  tag = tag.replace("#", "%23");
  let q_str = querystring.stringify(query);
  q_str = q_str ? "?" + q_str : "";
  const PATH = `/v1/clans/${tag}/capitalraidseasons/${q_str}`;
  return cocReq().get(PATH);
}

module.exports = getCapitalraidseasons;
