import React, { useState } from "react";
import ReportSidebar from "../ReportSidebar";

const CYSTForm = () => {
  const [fileName, setFileName] = useState("No file chosen");
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFileName(selectedFile.name);
      setFile(selectedFile);
    } else {
      setFileName("No file chosen");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!file) {
      alert("Please choose a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setResult(data);
      } else {
        console.error("Error uploading file:", response.statusText);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

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
      <div style={{ width: "80%", padding: "20px" }}>
        <form id="uploadForm" onSubmit={handleSubmit}>
          <h1>Upload or Select a File</h1>
          <input
            type="file"
            id="fileInput"
            className="file-input"
            name="file"
            onChange={handleFileChange}
          />
          <p id="fileName" className="file-name">
            {fileName}
          </p>
          <button type="submit" className="submit-btn">
            Upload
          </button>
        </form>
        {result && (
          <div className="result">
            <h3>Prediction Results</h3>
            <p>Risk Name: {result.risk_name}</p>
            <p>Predicted Class: {result.predicted_class}</p>
            <p>Risk Score: {result.risk_score}</p>
            <p>Wellness Report: {result.wellness_report}</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default CYSTForm;
