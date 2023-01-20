const axios = require("axios");
const ApiToken = require("../mongoSchemas/apiToken");

const apiHeader = async () => {
  let apiToken = await ApiToken.findOne({
    name: process.env.FROM,
  });
  return {
    Authorization: `Bearer ${apiToken.token}`,
  };
};

class ClashOfClan {
  constructor() {
    this.baseURL = process.env.API_BASE_URL;
  }

  async findClan(tag = "#RRVJCJVY") {
    if (!tag) {
      throw new Error("Provid Clan Tag.");
    } else {
      tag = tag.replace("#", "%23");
      try {
        let res = await axios.get(`${this.baseURL}/clan/${tag}`, {
          headers: this.headers,
        });

        return res.data;
      } catch (err) {
        throw new Error("Player " + err.response.statusText);
      }
    }
  }
  async findPlayer(tag) {
    if (!tag) {
      throw new Error("Provid Clan Tag.");
    } else {
      tag = tag.replace("#", "%23");
      try {
        let res = await axios.get(`${this.baseURL}/players/${tag}`, {
          headers: this.headers,
        });

        return res.data;
      } catch (err) {
        throw new Error("Player " + err.response.statusText);
      }
    }
  }
}

const coc = new ClashOfClan();

module.exports = coc;
