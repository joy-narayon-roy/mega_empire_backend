class APIKEY_DB {
  constructor() {
    this.key = process.env.APIKEY || undefined;
    return this;
  }
  updateKey(key) {
    this.key = key;
  }
  getKey() {
    return this.key;
  }
  setKey() {
    this.key = process.env.APIKEY || undefined;
  }
}
let api_key = new APIKEY_DB();
module.exports = api_key;
