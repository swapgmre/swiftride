const validator = require("validator");

const validateSignUpData = (req) => {
  const { firstName, lastName, emailId, password } = req.body;

  if (!firstName || !lastName) {
    throw new Error("Name is not valid");
  }
  else if (!validator.isEmail(emailId)) {
    throw new Error("Email is not valid")
  }
  else if (!validator.isStrongPassword(password)) {
    throw new Error("Please Enter a strong password")
  }

}

const validateAgentSignUpData = (req) => {

  const { name, agencyName, emailId, password, phoneNumber, address } = req.body;

  if (!name) {
    throw new Error("Name is not valid");
  }
  if (name.length < 2 || name.length > 50) {
    throw new Error("Name must be between 2 and 50 characters");
  }
  if (!validator.isEmail(emailId)) {
    throw new Error("Email is not valid")
  }
  if (!validator.isStrongPassword(password)) {
    throw new Error("Please Enter a strong password")
  }
  if (password.length > 128) {
    throw new Error("Password cannot exceed 128 characters");
  }
  if (!agencyName || agencyName.length < 3) {
    throw new Error("Agency Name is not valid, Agency Name must be at least 3 characters long");
  }
  if (!phoneNumber || phoneNumber && phoneNumber.toString().length < 10) {
    throw new Error("A valid Phone Number with at least 10 digits is required")
  }
  if (address && (address.length < 5 || address.length > 255)) {
    throw new Error("Address must be between 5 and 255 characters");
  }
}

module.exports = {
  validateSignUpData,
  validateAgentSignUpData
}

