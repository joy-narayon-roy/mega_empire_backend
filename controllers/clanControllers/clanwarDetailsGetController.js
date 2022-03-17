const clanWarInfo = require("../../mongoSchemas/clanWarInfo");

async function clanwarDetailsGetController(req, res) {
  let { tag, endtime } = req.params;
  if (tag === "RRVJCJVY") {
    let warInfo = await clanWarInfo.findOne({
      endTime: endtime,
    });
    res.json(warInfo);
  } else {
    res.status(400).json({ msg: "Not available" });
  }
}

module.exports = clanwarDetailsGetController;
