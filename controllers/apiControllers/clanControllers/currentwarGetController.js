const cocApi = require("../../../hooks/useCoc");

async function currentwarGetController(req, res, next) {
  let { tag = "#RRVJCJVY" } = req.query;

  cocApi()
    .then((coc) => {
      coc
        .clanCurrentWarByTag(tag)
        .then((response) => {
          res.status(200).json(response);
        })
        .catch((err) => {
          res.status(404).json(err.error);
        });
    })
    .catch((err) => {
      next(err);
    });
}

module.exports = currentwarGetController;
