const mongoose = require("mongoose");
let warSchema = new mongoose.Schema({
  _id:"String",
  state: {
    type: "String",
  },
  teamSize: {
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
  warStartTime: {
    type: "String",
  },
});

let WarInfo = mongoose.model("WarInfo", warSchema);
module.exports = WarInfo