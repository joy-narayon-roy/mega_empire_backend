const axios = require("axios").default;

setInterval(() => {
  axios.get("https://megaempire.herokuapp.com/");
}, 1000);
