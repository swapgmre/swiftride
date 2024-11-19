const mongoose = require("mongoose");
const validator = require("validator");

const agentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },

  agencyName: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  emailId: {
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
  phoneNumber: {
    type: Number,
    required: true,
  },
  isBlocked: {
    type: Boolean,
    default: false,
  }
}, {
  timestamps: true,
})

module.exports = mongoose.model("Agent", agentSchema);