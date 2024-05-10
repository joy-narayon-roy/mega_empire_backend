class ApikeyDB {
  #defultKey;
  #key;
  #report;
  #isReported;
  constructor() {
    this.#defultKey = process.env.API_KEY || undefined;
    this.#key = process.env.API_KEY || undefined;
    this.#report = null;
    this.#isReported = Boolean(this.#report);
    return this;
  }

  config() {
    this.#defultKey = process.env.API_KEY || undefined;
    this.#key = process.env.API_KEY || undefined;
    this.#report = null;
    this.#isReported = Boolean(this.#report);
    return this;
  }

  get key() {
    return {
      key: this.#key,
      report: this.#report,
      isReported: this.#isReported,
    };
  }
  getKey() {
    return this.#key;
  }

  updateKey(key) {
    process.env.API_KEY = key;
    this.#key = key;
    this.#report = null;
    this.#isReported = false;
  }
  report(text) {
    this.#report = text;
    this.#isReported = true;
  }
  setKey() {
    this.#key = process.env.APIKEY || undefined;
  }
  resetKey() {
    this.#key = this.#defultKey;
    this.#isReported = false;
    this.#report = null;
  }
}
let api_key = new ApikeyDB();
module.exports = api_key;
