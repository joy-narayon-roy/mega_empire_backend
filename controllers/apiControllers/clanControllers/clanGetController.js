const cocApi = require("../../../hooks/useCoc");

async function clanGetController(req, res, next) {
  let { tag = "#RRVJCJVY" } = req.query;

  cocApi()
    .then((coc) => {
      coc
        .clanByTag(tag)
        .then((response) => res.status(200).json(response))
        .catch((err) => {
          next({ error: err.error, statusCode: err.statusCode });
        });
    })
    .catch((err) => {
      next(err.error);
    });
}

module.exports = clanGetController;
