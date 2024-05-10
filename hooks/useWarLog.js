const useFetch = require("./useFetch");
const api_key_db = require("../utilities/apikeyDB");

// fetch(options)
//   .then((d) => console.log(d))
//   .catch((err) => console.log(err));

const useWarLog = (
  tag,
  limit = undefined,
  after = undefined,
  before = undefined
) => {
  const options = {
    hostname: "api.clashofclans.com",
    path: `/v1/clans/${tag}/warlog${limit ? "?limit=" + limit : ""}${
      after && limit ? "&after=" + after : ""
    }${before && limit ? "&before=" + before : ""}`,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${api_key_db.getKey()}`,
    },
  };

  console.log(options.path)

  return useFetch(options);
};

module.exports = useWarLog;
