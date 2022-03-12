const coc = require("../../hooks/useCoc");
module.exports = (req, res) => {
  let { tag } = req.params;
  tag = "#" + tag;

  coc
    .clanCurrentWarByTag(tag)
    .then((response) => {
        res.status(200).json(response)
    })
    .catch((err) => res.status(err.statusCode).json(err.error));
};
