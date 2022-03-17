let mongoose = require("mongoose");

let clanWarSchema = new mongoose.Schema({
  state: {
    type: "String",
  },
  teamSize: {
    type: "Number",
  },
  attacksPerMember: {
    type: "Number",
  },
  preparationStartTime: {
    type: "String",
  },
  startTime: {
    type: "String",
  },
  endTime: {
    type: "String",
  },
  clan: {
    tag: {
      type: "String",
    },
    name: {
      type: "String",
    },
    badgeUrls: {
      small: {
        type: "String",
      },
      large: {
        type: "String",
      },
      medium: {
        type: "String",
      },
    },
    clanLevel: {
      type: "Number",
    },
    attacks: {
      type: "Number",
    },
    stars: {
      type: "Number",
    },
    destructionPercentage: {
      type: "Number",
    },
    members: {
      type: ["Mixed"],
    },
  },
  opponent: {
    tag: {
      type: "String",
    },
    name: {
      type: "String",
    },
    badgeUrls: {
      small: {
        type: "String",
      },
      large: {
        type: "String",
      },
      medium: {
        type: "String",
      },
    },
    clanLevel: {
      type: "Number",
    },
    attacks: {
      type: "Number",
    },
    stars: {
      type: "Number",
    },
    destructionPercentage: {
      type: "Number",
    },
    members: {
      type: ["Mixed"],
    },
  },
},
{ timestamps: true });

let ClanWarInfo = mongoose.model("ClanWarInfo", clanWarSchema);

module.exports = ClanWarInfo;
