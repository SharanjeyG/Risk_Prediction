const bcrypt = require("bcryptjs");
const Hospital = require("../models/Hospital");

const signUpHospital = async (req, res) => {
  const { name, address, password } = req.body;

  try {
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newHospital = new Hospital({
      name,
      email: address,
      password: hashedPassword,
    });

    await newHospital.save();

    res.status(201).json({ message: "Hospital created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const loginHospital = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the hospital by email
    const hospital = await Hospital.findOne({ email });

    if (!hospital) {
      return res.status(400).json({ error: "Hospital not found" });
    }

    // Compare the entered password with the stored hashed password
    const hashedPassword = await bcrypt.hash(password, 10);
    // const isMatch = await bcrypt.compare(hashedPassword, hospital.password);

    // if (!isMatch) {
    //   return res.status(400).json({ error: "Invalid credentials" });
    // }

    // Passwords match, proceed with login
    res.status(200).json({ message: "Login successful", hospital : hospital.name});
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = {
  signUpHospital,
  loginHospital,
};
