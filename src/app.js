const express = require("express");
const connectDB = require("./config/database");
const app = express();
const cookieParser = require("cookie-parser");



app.use(express.json());
app.use(cookieParser());

const authRouter = require("./routes/auth.js");


app.use("/", authRouter);



connectDB().then(() => {
  console.log("Database connection established....");
  app.listen(7777, () => {
    console.log("Server is succesfully listening on port 7777")
  })
}).catch((err) => {
  console.error("Database cannot be connected !!");
});
