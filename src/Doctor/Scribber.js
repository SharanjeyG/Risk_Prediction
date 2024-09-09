import React, { useState } from 'react';
import './RealTime.css'

const Scribber = () => {
  const [inputs, setInputs] = useState({
    patientId: '',
    doctorId: '',
    code: '',
    additionalCodes: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddInput = () => {
    setInputs((prev) => ({
      ...prev,
      additionalCodes: [...prev.additionalCodes, ''],
    }));
  };

  const handleRemoveInput = (index) => {
    setInputs((prev) => ({
      ...prev,
      additionalCodes: prev.additionalCodes.filter((_, i) => i !== index),
    }));
  };

  const handleAdditionalCodeChange = (index, value) => {
    const newCodes = [...inputs.additionalCodes];
    newCodes[index] = value;
    setInputs((prev) => ({ ...prev, additionalCodes: newCodes }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted:', inputs);
  };

  return (
    <main className="form-container">
      <h1>Report Form</h1>
      <form id="sampleForm" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="patientId">Patient Id:</label>
          <input
            type="text"
            id="patientId"
            name="patientId"
            value={inputs.patientId}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="doctorId">Doctor Id:</label>
          <input
            type="text"
            id="doctorId"
            name="doctorId"
            value={inputs.doctorId}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="code">CODE:</label>
          <input
            type="text"
            id="code"
            name="code"
            value={inputs.code}
            onChange={handleChange}
            required
          />
          <button
            type="button"
            className="add-button"
            onClick={handleAddInput}
          >
            +
          </button>
        </div>

        {inputs.additionalCodes.map((code, index) => (
          <div key={index} className="form-group">
            <input
              type="text"
              value={code}
              onChange={(e) => handleAdditionalCodeChange(index, e.target.value)}
              required
              style={{ width: '90%' }} // Ensure the input takes full width
            />
            <button
              type="button"
              className="remove-button"
              onClick={() => handleRemoveInput(index)}
            >
              -
            </button>
          </div>
        ))}

        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default Scribber;
