const cocApi = require("../../hooks/useCoc");
module.exports = function (req, res) {
  let { tag } = req.params;
  tag = "#" + tag;
  cocApi().then((coc) => {
    coc
      .clanLeagueWars(tag)
      .then((response) => {
        res.status(200).json(response);
      })
      .catch((err) => {
        req.status(400).json({
          message: "Error! In war league war log.",
        });
      });
  });
};
