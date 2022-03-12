const cocApi = require("../../hooks/useCoc");
module.exports = (req, res) => {
  let { tag } = req.params;
  tag = "#" + tag;
  cocApi().then((coc) => {
    coc
      .clanLeague(tag)
      .then((response) => res.json(response))
      .catch((err) => console.log(err));
  });
};
