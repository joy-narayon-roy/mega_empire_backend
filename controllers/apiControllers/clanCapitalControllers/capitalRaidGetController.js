const useCapitalRaidInfo = require("../../../hooks/useCapitalRaidInfo");

module.exports = async (req, res) => {
  let { tag = "%23RRVJCJVY" ,limit,after,before} = req.query;
  let data = await useCapitalRaidInfo(tag,limit,after,before)
  
  res.status(data.status).json(data);
};
