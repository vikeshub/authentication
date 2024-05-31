const express = require("express");
const UserAuthRouter = require("./routes/UserAuthRouter");
const dbConnect = require("./lib/dbConnect");
const app = express();

app.use(express.json());
require("dotenv").config();
app.use("/user", UserAuthRouter);

app.get("/", (req, res) => {
  return res.send({ data: "working" });
});

dbConnect();

app.listen(4000, () => {
  console.log("server is running at http://locathost:4000");
});
