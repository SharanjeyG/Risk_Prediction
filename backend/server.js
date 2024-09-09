const express = require("express");
const connectDB = require("./config/db");
const hospitalRoutes = require("./routes/hospitalRoute");
const doctorRoutes = require("./routes/doctorRoute");
const patientRoutes = require("./routes/patientRoute");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

// Connect to MongoDB
const app = express();
const port = 8000;

// Middleware
app.use(express.json());

app.use(cors({
  origin: "http://localhost:3000",
}));

// Routes
app.use("/api/hospitals", hospitalRoutes);
app.use("/api/doctors", doctorRoutes);
app.use("/api/patients", patientRoutes);

if (connectDB()) {
  // Start the server only after successful database connection
  app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
  });
}

// Start serve
