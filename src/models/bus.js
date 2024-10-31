const mongoose = require("mongoose");

const busSchema = new mongoose.Schema({
  agencyName: {
    type: String,
    required: true,
    trim: true,
  },
  busNumber: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  busType: {
    type: String,
    enum: ["AC", "Non-AC", "Sleeper", "Seater"],
    required: true,
  },
  fromLocation: {
    type: String,
    required: true,
  },
  toLocation: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  departure: {
    type: String,
    required: true,
  },
  arrival: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
  },
  boardingPoints: {
    type: [String],
    required: true,
  },
  seatSelection: {
    type: [Number],
    required: true,
  },
  fare: {
    type: Number,
    required: true,
  },
  amenities: {
    type: [String],
  },
  ratings: {
    type: Number,
    min: 1,
    max: 5,
  },
  status: {
    type: String,
    enum: ["Pending", "Approved", "Rejected"],
    default: "Pending",
  },
},
  {
    timestamps: true,
  });

const Bus = mongoose.model("Bus", busSchema);

module.exports = Bus;

