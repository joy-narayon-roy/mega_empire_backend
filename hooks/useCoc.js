const cocApi = require("clash-of-clans-api");
const ApiToken = require("../mongoSchemas/apiToken");

// /**
//  * This part for home use
//  */
// module.exports = async function () {
//   return cocApi({
//     token: process.env.COC_TOKEN,
//   });
// };

/**
 * This part for server
 */

module.exports = async function (){
  let apiToken= await ApiToken.find({name:`${process.env.FROM}`})

  return cocApi({
    token:apiToken[0].token
  })
}
