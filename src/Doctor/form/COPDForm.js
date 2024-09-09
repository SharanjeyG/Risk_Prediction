import React, { useState } from "react";
import ReportSidebar from "../ReportSidebar";
import "../RealTime.css";

const COPDForm = () => {
  // Array of input labels
  const inputLabels = [
    "Age",
    "Gender",
    "Pack History",
    "COPDSEVERITY",
    "MWT1",
    "MWT2",
    "MWT1Best",
    "FEV1",
    "FEV1PRED",
    "FVC",
    "FVCPRED",
    "CAT",
    "HAD",
    "SGRQ",
    "VAGEquartiles",
    "copd",
    "Smoking (1 = Yes, 0 = No)",
    "Diabetes (1 = Yes, 0 = No)",
    "Muscular (1 = Yes, 0 = No)",
    "Hypertension (1 = Yes, 0 = No)",
    "AtrialFib (1=Yes,0=No)",
  ];

  const [formData, setFormData] = useState({});

  // Handle input changes
  const handleChange = (e, label) => {
    setFormData({
      ...formData,
      [label]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch("http://localhost:5000/copd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log(result); // Handle the response from the server

      // Display result or show a message to the user
      alert(`Risk: ${result.risk}\nRisk Percentage: ${result.risk_percentage}\nDisease Type: ${result.disease_type}\nReport: ${result.report}`);
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
  };

  const firstHalfLabels = inputLabels.slice(0, Math.ceil(inputLabels.length / 2));
  const secondHalfLabels = inputLabels.slice(Math.ceil(inputLabels.length / 2));

  return (
    <main className="main-container" style={{ display: "flex" }}>
      <div style={{ position: "sticky", left: 0, top: 0, height: "100vh", width: "20%", zIndex: 1 }}>
        <ReportSidebar />
      </div>
      <div style={{ width: "80%", padding: "20px", overflowY: "auto" }}>
        <form className="form-container" onSubmit={handleSubmit} style={{ display: "flex" }}>
          {/* First Half of the Inputs */}
          <div className="form-group1" style={{ flex: 1, marginRight: "20px" }}>
            {firstHalfLabels.map((label, index) => (
              <div key={index} className="form-group">
                <label htmlFor={`input${index}`} className="formbold-form-label">{label}:</label>
                <input
                  type="text"
                  id={`input${index}`}
                  className="formbold-form-input"
                  placeholder={`Enter ${label}`}
                  onChange={(e) => handleChange(e, label)}
                />
              </div>
            ))}
          </div>

          {/* Second Half of the Inputs */}
          <div className="form-group2" style={{ flex: 1 }}>
            {secondHalfLabels.map((label, index) => (
              <div key={index + firstHalfLabels.length} className="form-group">
                <label htmlFor={`input${index + firstHalfLabels.length}`} className="formbold-form-label">{label}:</label>
                <input
                  type="text"
                  id={`input${index + firstHalfLabels.length}`}
                  className="formbold-form-input"
                  placeholder={`Enter ${label}`}
                  onChange={(e) => handleChange(e, label)}
                />
              </div>
            ))}
          </div>
        </form>
        <button type="submit" className="formbold-submit-btn">
          Submit
        </button>
      </div>
    </main>
  );
};

export default COPDForm;
