const cocApi = require("../../hooks/useCoc");
const ClanWarInfo = require("../../mongoSchemas/clanWarInfo");

async function creatWarInfo(tag, currentwar) {
  try {
    let newClanWarInfo = new ClanWarInfo({
      _id: tag,
      ...currentwar,
    });
    let data = await newClanWarInfo.save();
    return data;
  } catch (err) {
    throw err;
  }
}

async function updateWarInfo(tag, newData) {
  try {
    await ClanWarInfo.findByIdAndUpdate(tag, newData);
    return true;
  } catch (error) {
    console.log("Update Failed!");
    console.log(error);
    throw new Error(error);
  }
}

async function saveCurrentWarInfoGetController(req, res, next) {
  const myClanTag = "#RRVJCJVY";

  try {
    let coc = await cocApi();
    let currentwar = await coc.clanCurrentWarByTag(myClanTag);

    if (currentwar.state === "notInWar") {
      res.status(200).json({
        msg: "Not In War",
      });
      return 0;
    }
    let warTag;
    if (currentwar.opponent.tag === myClanTag) {
      warTag = currentwar.clan.tag;
    } else if (currentwar.opponent.tag !== myClanTag) {
      warTag = currentwar.opponent.tag;
    }

    let previousClanInfo = await ClanWarInfo.findById(warTag);

    if (previousClanInfo) {
      let updated = await updateWarInfo(warTag, currentwar);
      if (updated) {
        console.log(`Data updated - ${new Date().toLocaleTimeString()}`);
        res.status(200).json({
          msg: "Data Updated!",
        });
      } else {
        console.log(`Data update failed - ${new Date().toLocaleTimeString()}`);
        res.status(200).json({
          msg: "Failed To Update!",
        });
      }
      return 0;
    } else {
      let created = await creatWarInfo(warTag, currentwar);
      res.json({ created, msg: "Created" });
    }
  } catch (error) {
    // res.status(400).send("Error");
    next(error.error);
  }
}

module.exports = saveCurrentWarInfoGetController;

/**
 let warInfo = new clanWarInfo(warData)
    let saveState = await warInfo.save()
    res.json(saveState)
 */
