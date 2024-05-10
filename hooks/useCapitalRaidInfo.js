const useFetch = require("../hooks/useFetch");
const apikeydb = require("../utilities/apikeyDB");
/**
 *
 * @param {*} req
 * @param {*} res
 * @param {string} clantag
 * @param {number} limit
 * @param {string} after
 * @param {number} before
 */

async function useCapitalRaidInfo(clantag = "#RRVJCJVY", limit, after, before) {
  let apiToken = apikeydb.getKey();

  let searchParams = new URLSearchParams();
  if (limit) searchParams.append("limit", limit);
  if (after) searchParams.append("after", after);
  if (before) searchParams.append("before", before);

  const options = {
    hostname: "api.clashofclans.com",
    path: `/v1/clans/${clantag}/warlog${
      searchParams.toString() ? "?" + searchParams.toString() : ""
    }`,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiToken}`,
    },
  };

  try {
    let data = await useFetch(options);
    return data;
  } catch (error) {
    return {
      data: null,
      error: error.response.data,
      status: error.response.status,
    };
  }
}
module.exports = useCapitalRaidInfo;
