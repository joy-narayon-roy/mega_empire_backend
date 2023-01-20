const https = require("https");

const options = {
  hostname: "api.clashofclans.com",
  path: "/v1/clans/%23RRVJCJVY",
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjJiYjgyY2MyLWU3MjItNDA5ZC05NWU2LTZiZmMwMzUyODFkZiIsImlhdCI6MTY3MzY2OTk4Miwic3ViIjoiZGV2ZWxvcGVyLzZlM2Q2MTBjLTZiY2YtYWZlNS1hNjBhLThhNDI2YmZhZGVjZCIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjEyMy4xMzYuMzEuMTMwIl0sInR5cGUiOiJjbGllbnQifV19.jxC4KzYZkQaP9aax0LHAldd-BLLwRTgfiyLCGNlOdkqmJ7sOtzvAWMJfCLHq_VrWrEOwvo3OOtRNpO0LPU0xng",
  },
};

const fetch = (options) => {
  return new Promise((resolve, reject) => {
    https
      .get(options, (res) => {
        let data = "";
        res.on("data", (chunk) => {
          data += chunk;
        });
        res.on("end", () => {
          try {
            const jsonData = JSON.parse(data);
            resolve(jsonData);
          } catch (e) {
            reject(e);
          }
        });
      })
      .on("error", (error) => {
        reject(error);
      });
  });
};

fetch(options)
  .then((d) => console.log(d))
  .catch((err) => console.log(err));
