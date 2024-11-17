const mongoose = require("mongoose");



const busSchema = new mongoose.Schema({
  agency: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Agent",
    required: true,
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
    // required: true,
  },
  arrival: {
    type: String,
    // required: true,
  },
  duration: {
    type: String,
  },
  boardingPoints: {
    type: [String],
    // required: true,
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
  seats: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Seat"
  }],
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active"
  },
},
  {
    timestamps: true,
  });


module.exports = mongoose.model("Bus", busSchema);

