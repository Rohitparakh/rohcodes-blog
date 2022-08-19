require("dotenv").config();
const express = require('express');
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");

const app = express();
app.use(express.json());
app.use(cors());

const dbUrl =
  "mongodb://rohit:" +
  process.env.MONGO_PASSWORD +
  "@ac-6hautj1-shard-00-00.ezzjgpt.mongodb.net:27017,ac-6hautj1-shard-00-01.ezzjgpt.mongodb.net:27017,ac-6hautj1-shard-00-02.ezzjgpt.mongodb.net:27017/?ssl=true&replicaSet=atlas-14nzw4-shard-0&authSource=admin&retryWrites=true&w=majority";

  mongoose.connect(dbUrl, {
    useNewUrlParser: true,
});


app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);


app.listen(process.env.PORT || 5001, () => {
    console.log("Server started on port 5001");
});