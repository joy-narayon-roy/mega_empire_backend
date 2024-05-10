const https = require("https");
const api_key_db = require("../utilities/apikeyDB");

const fetch = (options, headers) => {
  return new Promise((resolve, reject) => {
    const req = https.get(options, (res) => {
      let data = "";
      res.on("data", (chunk) => {
        data += chunk;
      });
      res.on("end", () => {
        const response = {
          status: res.statusCode,
          data: data,
        };
        try {
          const jsonData = JSON.parse(data);
          response.data = jsonData;
          resolve(response);
        } catch (e) {
          reject(e);
        }
      });
    });
    // set headers
    if (headers) {
      Object.entries(headers).forEach(([key, value]) =>
        req.setHeader(key, value)
      );
    }
    req.on("error", (error) => {
      reject(error);
    });
    req.end();
  });
};

const useClan = (tag) => {
  const options = {
    hostname: process.env.API_BASE_URL,
    path: `/v1/clans/${tag}`,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${api_key_db.getKey()}`,
    },
  };

  return fetch(options);
};

module.exports = useClan;
