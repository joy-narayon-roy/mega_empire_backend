const cocApi = require("clash-of-clans-api");

module.exports = cocApi({
  token: process.env.COC_TOKEN,
});
