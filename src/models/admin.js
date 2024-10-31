const mongoose = require("mongoose");
const validator = require("validator");

const agentSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error(`Invalid email address: ${value}`)
      }
    },
  },
  password: {
    type: String,
    required: true,
    validate(value) {
      if (!validator.isStrongPassword(value)) {
        throw new Error(`Enter a strong password: ${value}`);
      }
    },
  },
  agencyName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  role: {
    type: String,
    default: "agent",
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active",
  },

}, {
  timestamps: true,
})

const Agent = mongoose.model("Agent", agentSchema);

module.exports = Agent;