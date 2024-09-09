import React from "react";
import ReportSidebar from "../ReportSidebar";
import "../RealTime.css";

const AcuteKidneyForm = () => {
  // Array of input labels, you can customize these values as per your needs.
  const inputLabels = [
    "Value for ID",
    "Value for Age",
    "Value for BP",
    "Value for SG",
    "Value for AL",
    "Value for SU",
    "Value for RBC",
    "Value for PC",
    "Value for PCC",
    "Value for BA",
    "Value for BGR",
    "Value for BU",
    "Value for SC",
    "Value for SOD",
    "Value for POT",
    "Value for HEMO",
    "Value for PCV",
    "Value for WC",
    "Value for RC",
    "Value for HTN",
    "Value for DM",
    "Value for CAD",
    "Value for APPET",
    "Value for PE",
    "Value for ANE",
    "Value for GFR",
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

export default AcuteKidneyForm;
