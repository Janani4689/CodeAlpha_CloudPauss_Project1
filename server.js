require("dotenv").config();
const mongoose=require("mongoose");
const Booking=require("./models/booking");
const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});
app.post("/book", async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();

    res.json({
      success: true,
      message: "Booking saved successfully",
      booking
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Booking failed"
    });
  }
});
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`CloudPass running on http://localhost:${PORT}`);
});
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch(err => console.log("MongoDB connection error:", err));