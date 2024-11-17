const mongoose = require("mongoose");


const seatSchema = new mongoose.Schema({
  busId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Bus",
    required: true,
  },
  seatNumber: {
    type: String,
    required: true,
  },
  isReserved: {
    type: Boolean,
    default: true,
  },
  fare: {
    type: Number,
    required: true,
  }
},
  { timestamps: true });

module.exports = mongoose.model("Seat", seatSchema);