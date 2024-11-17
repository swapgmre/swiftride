const express = require("express");
const authRouter = express.Router();
const User = require("../models/user");
const { validateSignUpData } = require("../utils/validation");
const bcrypt = require("bcrypt");

authRouter.post("/signup", async (req, res) => {
  try {
    validateSignUpData(req);

    const { firstName, lastName, emailId, password } = req.body;

    const passwordHash = await bcrypt.hash(password, 10);

    const user = new User({ firstName, lastName, emailId, password: passwordHash });

    await user.save();
    res.send("User added successfully");
  } catch (err) {
    res.send(`Error : ${err.message}`);
  }
})

authRouter.post("/login", (req, res) => {

});


module.exports = authRouter;