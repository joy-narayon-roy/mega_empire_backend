const cocReq = require("../../utilities/cocReq");
const querystring = require("node:querystring");

function getMembers({ tag, ...others }) {
  tag = tag ?? process.env.ME_CLAN_TAG;
  tag = tag.replace("#", "%23");

  const query_string = querystring.stringify(others);

  const PATH = `/v1/clans/${tag}/members?${query_string}`;
  return cocReq().get(PATH);
}

module.exports = getMembers;
