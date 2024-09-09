import React, { useState } from 'react';

const ReportPage = () => {
  const [query, setQuery] = useState('');
  const [pdfFile, setPdfFile] = useState(null);

  const handleFileChange = (e) => {
    setPdfFile(e.target.files[0]);
  };

  const handleSubmit = () => {
    // Logic to handle the form submission
    console.log('Query:', query);
    console.log('Uploaded PDF:', pdfFile);
  };

  return (
    <div className="report-container">
      <h2>Submit Your Report</h2>
      <div className="report-form">
        <div className="form-group">
          <label htmlFor="query">Query:</label>
          <input 
            type="text" 
            id="query" 
            value={query} 
            onChange={(e) => setQuery(e.target.value)} 
            placeholder="Enter your query here..." 
          />
        </div>
        <div className="form-group">
          <label htmlFor="pdfFile">PDF:</label>
          <input 
            type="file" 
            id="pdfFile" 
            accept=".pdf" 
            onChange={handleFileChange} 
          />
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default ReportPage;
