const coc = require("../../hooks/useCoc");

module.exports = function (req, res) {
  let { tag } = req.params;
  tag = "#" + tag;
  console.log('\n\n',tag)

  coc
    .clanByTag(tag)
    .then((response) => res.status(200).json(response))
    .catch((err) => {
      res.status(404).json(err.message)
    });
};
