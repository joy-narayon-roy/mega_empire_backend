const cocApi = require("../../hooks/useCoc");
module.exports = (req, res) => {
  let { tag } = req.params;
  tag = "#" + tag;

  cocApi().then((coc) => {
    coc
      .clanCurrentWarByTag(tag)
      .then((response) => {
        res.status(200).json(response);
      })
      .catch((err) => res.status(err.statusCode).json(err.error));
  });
};
