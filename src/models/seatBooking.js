const mongoose = require("mongoose");

const seatBookingSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  busId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Bus",
    required: true
  },
  seatId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Seat",
    required: true
  },
  bookingStatus: {
    type: String,
    enum: ["pending", "confirmed", "cancelled"],
    default: "pending"
  },
  paymentStatus: {
    type: String,
    enum: ["unpaid", "paid", "refunded"],
    default: "unpaid"
  },
  bookingDate: {
    type: Date,
    default: Date.now()
  },
}, { timestamps: true });


module.exports = mongoose.model("SeatBooking", seatBookingSchema);