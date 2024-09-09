const Doctor = require("../models/Doctor");
const Hospital = require("../models/Hospital");
const { sendCredentials } = require("../utils/email");

const addDoctor = async (req, res) => {
  const { hospitalId, name, age, email } = req.body;

  try {
    const doctor = new Doctor({ name, age, email, hospitalId });
    await doctor.save();

    // Update hospital document with new doctor
    await Hospital.findByIdAndUpdate(hospitalId, {
      $push: { doctors: doctor._id },
    });

    // Generate credentials (in this example, loginId = email)
    const loginId = email;
    const password = "your_generated_password"; // Generate a strong password here

    // Send login credentials via email
    await sendCredentials(email, loginId, password);

    res.status(201).json({ message: "Doctor added successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = {
  addDoctor,
};
