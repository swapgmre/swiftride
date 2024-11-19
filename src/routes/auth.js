const express = require("express");
const authRouter = express.Router();
const User = require("../models/user");
const { validateSignUpData, validateAgentSignUpData } = require("../utils/validation");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Agent = require("../models/agent");


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

authRouter.post("/login", async (req, res) => {
  try {
    const { emailId, password } = req.body;
    const user = await User.findOne({ emailId: emailId });
    if (!user) {
      throw new Error("Invalid Credentials!");
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (isPasswordValid) {
      const token = await jwt.sign({ _id: user._id }, "SwiftRide@$18112024", { expiresIn: "7d" });
      res.cookie("token", token, { expires: new Date(Date.now() + 8 * 3600000) });
      res.send("Login Successfull")
    } else {
      throw new Error("Invalid Credentials!")
    }
  } catch (err) {
    res.send(`Error : ${err.message}`);
  }
});

authRouter.post("/logout", async (req, res) => {
  try {
    res.cookie("token", null, {
      expires: new Date(Date.now())
    })
    res.send("Logout Successfull")
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: `Error: ${err.message}` });
  }

})

authRouter.post("/admin/signup", async (req, res) => {
  try {
    validateAgentSignUpData(req);

    const { name, agencyName, emailId, password, phoneNumber } = req.body;

    const passwordHash = await bcrypt.hash(password, 10);

    const agent = new Agent({ name, agencyName, emailId, phoneNumber, password: passwordHash });

    await agent.save();

    res.send("Agent Profile Created Successfully");

  } catch (err) {
    res.send(`Error : ${err.message}`);
  }
})

authRouter.post("/admin/login", async (req, res) => {
  try {
    const { emailId, password } = req.body;
    const agent = await Agent.findOne({ emailId: emailId });

    if (!agent) {
      throw new Error("Invalid Credentials!");
    }
    const isPasswordValid = await bcrypt.compare(password, agent.password);

    if (isPasswordValid) {
      const token = await jwt.sign({ _id: agent._id }, "SwiftRide@$18112024", { expiresIn: "7d" });
      res.cookie("token", token, { expires: new Date(Date.now() + 8 * 3600000) });
      res.send("Login Successfull")
    } else {
      throw new Error("Invalid Credentials!")
    }
  } catch (err) {
    res.send(`Error : ${err.message}`);
  }
});

authRouter.post("/admin/logout", async (req, res) => {
  try {
    res.cookie("token", null, { expires: new Date(Date.now()) })
    res.send("Logout Successfull!")
  } catch (err) {
    res.send(`Error : ${err.message}`);
  }
})


module.exports = authRouter;