const mongoose = require("mongoose");

const hospitalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // Store hashed password
  doctors: [{ type: mongoose.Schema.Types.ObjectId, ref: "Doctor" }],
  patients: [{ type: mongoose.Schema.Types.ObjectId, ref: "Patient" }],
});

const Hospital = mongoose.model("hospitals", hospitalSchema);
module.exports = Hospital;
