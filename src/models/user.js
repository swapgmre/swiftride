const mongoose = require("mongoose");
const validator = require("validator");



const userSchema = new mongoose.Schema({

  firstName: {
    type: String,
    required: true,
    minLength: 3,
  },
  lastName: {
    type: String
  },
  emailId: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error(`Invalid email address: ${vlaue}`);
      }
    },
  },
  age: {
    type: Number,
    min: 18,
  },
  gender: {
    type: String,
    validate(value) {
      if (!["male", "female", "others"].inlcudes(value)) {
        throw new Error("Gender data is not valid");
      }
    }
  },
  photoUrl: {
    type: String,
    default: "https://smsdelhibmw.co.in/wp-content/uploads/2022/02/User-Profile-PNG.png",
    validate(value) {
      if (!validator.isURL(value)) {
        throw new Error(`Invalid Photo URL: ${value}`);
      }
    },
  },
});