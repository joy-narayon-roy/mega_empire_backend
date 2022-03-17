const cocApi = require("../hooks/useCoc.js");
const ClanWarInfo = require("../mongoSchemas/clanWarInfo");

function updateCurrentWarInfo() {
  // /RRVJCJVY
  let date = new Date();

  cocApi().then((coc) => {
    coc.clanCurrentWarByTag("#RRVJCJVY").then((res) => {
      if (res.state !== "notInWar") {
        ClanWarInfo.findOne({ endTime: res.endTime })
          .then((data) => {
            if (data) {
              ClanWarInfo.findByIdAndUpdate(data._id, res)
                .then((upData) => {
                  console.log("Data Updated!");
                })
                .catch((err) => {
                  console.log("Some Thing Error");
                  console.log(err);
                });
            } else {
              let newInfo = new ClanWarInfo(res);
              newInfo.save().then((res) => {
                console.log("Created and Saved");
              });
            }
          })
          .catch((cre) => {
            console.log("Cre");
            console.log(cre);
          });
      }
    });
  });

  return date.toLocaleString("en-US");
}
module.exports = updateCurrentWarInfo;
