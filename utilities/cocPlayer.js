const axios = require("axios");
const ApiToken = require("../mongoSchemas/apiToken");

async function findPlayer(tag) {
  tag = tag.replace("#", "%23");
  let apiToken = await ApiToken.find({ name: `${process.env.FROM}` });
  apiToken = apiToken[0].token;

  let res = await axios.get(`https://api.clashofclans.com/v1/players/${tag}`, {
    headers: {
      Authorization: `Bearer ${apiToken}`,
    },
  });

  return res.data;
}

module.exports = { findPlayer };
