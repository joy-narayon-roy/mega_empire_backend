const axios = require("axios");

class ClashOfClan {
  constructor() {
    this.baseURL = "https://api.clashofclans.com/v1";

    if (process.env.COC_API_TOKEN) {
      this.apiToken = process.env.COC_API_TOKEN;
      this.headers = {
        Authorization: `Bearer ${process.env.COC_API_TOKEN}`,
      };
      return this;
    } else {
      throw Error("Provid Api Token");
    }
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

        // console.log(res);

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
