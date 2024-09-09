import React from "react";
import ReportSidebar from "../ReportSidebar";
import "../RealTime.css";

const CADForm = () => {
  // Array of input labels, you can customize these values as per your needs.
  const inputLabels = [
    "Age",
    "Gender",
    "Value for Weight (in kg) ",
    "Value for Height (in cm)",
    "Value for BMI",
    "Value for Diabetes Mellitus (0 for No, 1 for Yes)",
    "Value for Hypertension (0 for No, 1 for Yes)",
    "Value for Current Smoker (0 for No, 1 for Yes)",
    "Value for Ex-Smoker (0 for No, 1 for Yes)",
    "Value for Family History of CAD (0 for No, 1 for Yes)",
    "Value for Obesity (0 for No, 1 for Yes)",
    "Value for Chronic Renal Failure (0 for No, 1 for Yes)",
    "Value for Cerebrovascular Accident (0 for No, 1 for Yes)",
    "Value for Airway Disease (0 for No, 1 for Yes)",
    "Value for Thyroid Disease (0 for No, 1 for Yes)",
    "Value for Congestive Heart Failure (0 for No, 1 for Yes)",
    "Value for Dyslipidemia (0 for No, 1 for Yes)",
    "Value for Blood Pressure (systolic)",
    "Value for Pulse Rate",
    "Value for Edema (0 for No, 1 for Yes)",
    "Value for Weak Peripheral Pulse (0 for No, 1 for Yes)",
    "Value for Lung Rales (0 for No, 1 for Yes)",
    "Value for Systolic Murmur (0 for No, 1 for Yes)",
    "Value for Diastolic Murmur (0 for No, 1 for Yes)",
    "Value for Typical Chest Pain (0 for No, 1 for Yes)",
    "Value for Dyspnea (0 for No, 1 for Yes)",
    "Value for Functional Class(0,1,2,3)",
    "Value for Atypical presentation (0 for No, 1 for Yes)",
    "Value for Nonanginal (0 for No, 1 for Yes)",
    "Value for Exertional Chest Pain (0 for No, 1 for Yes)",
    "Value for Low Threshold Angina (0 for No, 1 for Yes)",
    "Value for Q Wave (0 for No, 1 for Yes)",
    "Value for ST Elevation (0 for No, 1 for Yes)",
    "Value for ST Depression (0 for No, 1 for Yes)",
    "Value for T Inversion (0 for No, 1 for Yes)",
    "Value for Left Ventricular Hypertrophy (0 for No, 1 for Yes)",
    "Value for Poor R Progression (0 for No, 1 for Yes)",
    "Value for Fasting Blood Sugar",
    "Value for Creatinine Level",
    "Value for Triglycerides Level",
    "Value for LDL Level",
    "Value for HDL Level",
    "Value for Blood Urea Nitrogen",
    "Value for Erythrocyte Sedimentation Rate",
    "Value for Hemoglobin Level",
    "Value for Potassium Level",
    "Value for Sodium Level",
    "Value for Lymphocyte Count",
    "Value for Neutrophil Count",
    "Value for Platelet Count",
    "Value for Ejection Fraction by TTE",
    "Value for Regional Wall Motion Abnormality (0 for No, 1 for Yes)",
    "Value for Valvular Heart Disease (0 for No, 1 for Yes)",
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

export default CADForm;
