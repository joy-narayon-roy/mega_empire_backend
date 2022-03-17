const cocApi = require("../../hooks/useCoc");
const clanWarInfo = require("../../mongoSchemas/clanWarInfo");

async function saveCurrentWarInfoGetController(req, res) {
  try {
    let tag = "#" + req.params.tag;
    let coc = await cocApi();
    let warData = await coc.clanCurrentWarByTag(tag);
    let warInfo = await clanWarInfo.findOne({ endTime: warData.endTime });
    if (warInfo) {
      clanWarInfo
        .findByIdAndUpdate(warInfo._id, warData)
        .then((data) => {
          res.json({ msg: "Updated", data });
        })
        .catch((err) => {
          console.log("Update Failed __________");
          console.log(err);
          res.json({ msg: "Failed To Upadate!" });
        });
    } else {
      let newWarInfo = new clanWarInfo(warData);
      let saveState = await newWarInfo.save();
      res.json({ msg: "Saved", saveState });
    }
  } catch (err) {
    console.log("ERROR ______________");
    console.log(err);
    res.status(400).json({ err: "Some Error" });
  }
}

module.exports = saveCurrentWarInfoGetController;

/**
 let warInfo = new clanWarInfo(warData)
    let saveState = await warInfo.save()
    res.json(saveState)
 */
