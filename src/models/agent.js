const mongoose = require("mongoose");
const validator = require("validator");

const agentSchema = new mongoose.Schema({
  agencyName: {
    type: String,
    required: true,
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
  address: {
    type: String,
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active",
  },
  phoneNumber: {
    type: Number,
    required: true,
  }
}, {
  timestamps: true,
})

module.exports = mongoose.model("Agent", agentSchema);