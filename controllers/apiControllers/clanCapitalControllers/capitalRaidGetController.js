const useCapitalRaidInfo = require("../../../hooks/useCapitalRaidInfo");

module.exports = async (req, res) => {
  let { clantag, limit, after, before } = req.query;
  clantag = clantag ? clantag : "#RRVJCJVY";
  clantag = clantag.replace("#", "%23");
  let { data, error, status } = await useCapitalRaidInfo(
    clantag,
    limit,
    after,
    before
  );
  if (data) {
    res.status(status).json(data);
  } else {
    res.status(status).json(error);
  }
};
