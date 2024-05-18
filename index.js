const Express = require("express");
const colors = require("colors");
const cors = require("cors");
const mongoose = require("mongoose");
const configDotenv = require("dotenv");
const usermodel = require("./models/users");
const app = Express();
configDotenv.config();
app.use(Express.json());
app.use(cors());
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  usermodel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("success");
      } else {
        res.json("incorrect creditentials");
      }
    } else {
      res.json("no user record exists");
    }
  });
});
app.post("/register", (req, res) => {
  usermodel
    .create(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log(" Connected to MongoDB ".bgGreen.white);
  })
  .catch((error) => {
    console.error(" Error connecting to MongoDB: ".bgRed.white, error);
  });
const Port = 8080;

app.listen(Port, () => {
  console.log(` server working on port ${Port} `.bgWhite.black);
});
