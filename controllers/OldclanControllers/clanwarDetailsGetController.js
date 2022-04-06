const ClanWarInfo = require("../../mongoSchemas/clanWarInfo");
const WarInfo = require("../../mongoSchemas/warInfo");

async function clanwarDetailsGetController(req, res) {
  try {
    let { tag, wartype } = req.query;
    if (!tag) {
      res.status(400).json({
        message: "tag not found",
      });
    } else if (!wartype) {
      res.status(400).json({
        message: "wartype not found",
      });
    } else if (wartype === "classic") {
      let warDetails = await ClanWarInfo.findById(tag);
      if (warDetails) {
        res.status(200).json(warDetails);
      } else {
        res.status(404).json({
          message: `${tag} not found!`,
        });
      }
    } else if (wartype === "league") {
      let warInfo = await WarInfo.findById(tag);
      if (warInfo) {
        res.status(200).json(warInfo);
      } else {
        res.status(404).json({
          message: `${tag} league not found!`,
        });
      }
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error!",
    });
    console.log(error);
  }
}

module.exports = clanwarDetailsGetController;
