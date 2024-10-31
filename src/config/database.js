const mongoose = require("mongoose");


const connectDB = async () => {
  await mongoose.connect("mongodb+srv://swapgmre:R8XBhOtCNJWAxDqt@swiftride.vypp7.mongodb.net/swiftRideDB");
};

module.exports = connectDB;



