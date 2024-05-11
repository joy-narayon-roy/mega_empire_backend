const mongoose = require("mongoose");

let apiSchema = new mongoose.Schema(
  {
    name: {
      type: "String",
    },
    token: {
      type: "String",
    },
    message: {
      type: "String",
    },
  },
  { timestamps: true }
);

const ApiToken = mongoose.model("ApiToken", apiSchema);

module.exports = ApiToken;
