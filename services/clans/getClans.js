const cocReq = require("../../utilities/cocReq");
const querystring = require("node:querystring");

function getClans(que) {
  const query_str = querystring.stringify(que);
  console.log(query_str);
  const PATH = `/v1/clans/?${query_str}`;
  const reqest = cocReq();
  return reqest.get(PATH);
}

module.exports = getClans;
