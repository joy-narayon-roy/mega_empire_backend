const cocApi = require("clash-of-clans-api");
const ApiToken=require("../mongoSchemas/apiToken")

// module.exports = cocApi({
//   token: process.env.COC_TOKEN,
// });

module.exports = async function (){
  let apiToken= await ApiToken.find({name:`${process.env.FROM}`})

  return cocApi({
    token:apiToken[0].token
  })
}