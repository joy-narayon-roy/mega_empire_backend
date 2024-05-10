const { default: axios } = require("axios");
const api_key = require("../db/apikeyDB");

function cocReq() {
  const BASE_URL = process.env.API_BASE_URL;
  const TOKEN = api_key.getKey();
  const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
  });
  return instance;
}

module.exports = cocReq;
