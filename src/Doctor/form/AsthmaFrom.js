import React from "react";
import ReportSidebar from "../ReportSidebar";
import "../RealTime.css";

const AsthmaForm = () => {
  // Array of input labels, you can customize these values as per your needs.
  const inputLabels = [
    "Enter Age",
    "Gender",
    "Tiredness (1 = Yes, 0 = No)",
    "Dry Cough (1 = Yes, 0 = No)",
    "Sore Throat (1 = Yes, 0 = No)",
    "No Symptoms (1 = Yes, 0 = No)",
    "Pains (1 = Yes, 0 = No)",
    "Nasal Congestion (1 = Yes, 0 = No)",
    "Runny Nose (1 = Yes, 0 = No)",
    "No Symptoms (1 = Yes, 0 = No)"
  ];

  const firstHalfLabels = inputLabels.slice(
    0,
    Math.ceil(inputLabels.length / 2)
  );
  const secondHalfLabels = inputLabels.slice(Math.ceil(inputLabels.length / 2));

  return (
    <main className="main-container" style={{ display: "flex" }}>
      <div
        style={{
          position: "sticky",
          left: 0,
          top: 0,
          height: "100vh",
          width: "20%",
          zIndex: 1,
        }}
      >
        <ReportSidebar />
      </div>
      <div style={{ width: "80%", padding: "20px", overflowY: "auto" }}>
        <form className="form-container" style={{ display: "flex" }}>
          {/* First Half of the Inputs */}
          <div className="form-group1" style={{ flex: 1, marginRight: "20px" }}>
            {firstHalfLabels.map((label, index) => (
              <div key={index} className="form-group">
                <label
                  htmlFor={`input${index}`}
                  className="formbold-form-label"
                >
                  {label}:
                </label>
                <input
                  type="text"
                  id={`input${index}`}
                  className="formbold-form-input"
                  placeholder={`Enter ${label}`}
                />
              </div>
            ))}
          </div>

          {/* Second Half of the Inputs */}
          <div className="form-group2" style={{ flex: 1 }}>
            {secondHalfLabels.map((label, index) => (
              <div key={index + firstHalfLabels.length} className="form-group">
                <label
                  htmlFor={`input${index + firstHalfLabels.length}`}
                  className="formbold-form-label"
                >
                  {label}:
                </label>
                <input
                  type="text"
                  id={`input${index + firstHalfLabels.length}`}
                  className="formbold-form-input"
                  placeholder={`Enter ${label}`}
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

export default AsthmaForm;
