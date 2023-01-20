const ApiToken = require("../mongoSchemas/apiToken");
const axios = require("axios");
/**
 *
 * @param {*} req
 * @param {*} res
 * @param {string} clantag
 * @param {number} limit
 * @param {string} after
 * @param {number} before
 */

module.exports = async (clantag, limit, after, before) => {
  let apiToken = await ApiToken.findOne({
    name: process.env.FROM,
  });

  const config = {
    headers: {
      Authorization: `Bearer ${apiToken.token}`,
    },
  };

  let searchParams = new URLSearchParams();
  if (limit) searchParams.append("limit", limit);
  if (after) searchParams.append("after", after);
  if (before) searchParams.append("before", before);

  let apiUrl = `https://api.clashofclans.com/v1/clans/${clantag}/capitalraidseasons?${searchParams.toString()}`;

  try {
    let resData = await axios.get(apiUrl, config);

    return {
      data: resData.data,
      error: null,
      status: resData.status,
    };
  } catch (error) {
    return {
      data: null,
      error: error.response.data,
      status: error.response.status,
    };
  }
};
