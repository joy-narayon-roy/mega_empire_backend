const apiketDB = require("../../db/apikeyDB");
function getApikey() {
  return apiketDB.getKey();
}

module.exports = { getApikey };
