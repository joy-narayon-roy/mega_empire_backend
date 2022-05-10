const mongoose = require("mongoose");
let warLeagueInfoSchema = new mongoose.Schema({
  state: {
    type: "String",
  },
  season: {
    type: "Date",
  },
  clans: {
    type: ["Mixed"],
  },
  rounds: [
    {
      warTags: {
        type: ["Mixed"],
        ref: "WarInfo",
      },
    },
  ],
});

const WarLeagueInfo = mongoose.model("WarLeagueInfo", warLeagueInfoSchema);

module.exports = WarLeagueInfo;
