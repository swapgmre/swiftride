const mongoose = require("mongoose");
const validator = require("validator");

const adminSchema = new mongoose.Schema({
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
        throw new Error(`Enter a strong password: ${value}`)
      }
    },
  },

}, { timestamps: true });

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;