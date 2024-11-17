const mongoose = require("mongoose");

const busAdditionRequestSchema = new mongoose.Schema({
  agentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  adminId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Admin",
    required: true

  },
  busId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Bus",
    required: true
  },
  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending"
  },
  notes: {
    type: String
  },
  responseDate: {
    type: Date
  },

})

module.exports = mongoose.model("BusAdditionRequest", busAdditionRequestSchema);