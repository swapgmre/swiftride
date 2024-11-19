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
        throw new Error(`Invalid email address: ${value}`);
      }
    },
  },
  password: {
    type: String,
    required: true,
    validate(value) {
      if (!validator.isStrongPassword(value)) {
        throw new Error("Enter a strong password!")
      }
    }
  },
  dateOfBirth: {
    type: Date,
    validate(value) {
      if (value <= new Date()) {
        throw new Error("Date of birth cannot be in future")
      }
    }
  },
  gender: {
    type: String,
    validate(value) {
      if (!["male", "female", "others"].includes(value)) {
        throw new Error("Gender data is not valid");
      }
    }
  },
  phoneNumber: {
    type: Number,
  }
},
  {
    isBlocked: {
      type: Boolean,
      default: false,
    }
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;