const https = require("https");

const useFetch = (options, headers) => {
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

module.exports = useFetch