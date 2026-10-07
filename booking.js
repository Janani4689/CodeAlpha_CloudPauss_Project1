const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  name: String,
  busNumber: String,
  seatNumber: String,
  date: String,
  status: {
    type: String,
    default: "Booked"
  }
});

module.exports = mongoose.model("Booking", bookingSchema);