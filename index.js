require("dotenv").config();

const app = require("./app");
const connectDB = require("./db/connectDB");

const GLOBAL_DB = `mongodb+srv://Joy:${process.env.DB_PASSWORD}@cluster0.xbov4.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const LOCAL_DB = "mongodb://127.0.0.1:27017/coc";
const DB_URI = process.env.FROM === "dev" ? LOCAL_DB : GLOBAL_DB;
const PORT = process.env.PORT || 8080;

connectDB(DB_URI)
  .then(() => {
    console.log("DB connected.");
    app.listen(PORT, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`Server start. http://localhost:${PORT}`);
      }
    });
  })
  .catch((e) => {
    console.log(e);
    console.log("Failed to connect DB!");
  });
