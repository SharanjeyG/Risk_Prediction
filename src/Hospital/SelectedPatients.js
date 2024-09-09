import React, { useState } from 'react';

const SelectedPatients = ({ selectedPatients }) => {
  const [offers, setOffers] = useState({});

  if (selectedPatients.length === 0) {
    return <p>No patients selected</p>;
  }

  // Function to generate offers for selected patients
  const generateOffers = async () => {
    const offerResponses = {};

    for (const patient of selectedPatients) {
      // Fetch the offer for each patient from the Flask backend
      try {
        const response = await fetch('http://localhost:5000/generate_offer', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            patient_id: patient.id,
            patient_name: patient.name,
            risk: patient.risk,
            visits: patient.visits,
            feedback_score: patient.feedback, // Make sure the 'feedback' field maps to feedback_score in Flask
          }),
        });

        const result = await response.json();
        offerResponses[patient.id] = result.personalized_offer;
      } catch (error) {
        console.error(`Failed to fetch offer for patient ${patient.id}:`, error);
        offerResponses[patient.id] = "Error generating offer.";
      }
    }

    setOffers(offerResponses);
  };

  return (
    <div className='offerpat'>
      <h1>Selected Patients</h1>
      <button onClick={generateOffers}>Generate Offers</button>
      <ul className='select'>
        {selectedPatients.map((patient) => (
          <li key={patient.id}>
            {patient.id} - {patient.name} - {patient.risk} - {patient.visits} - {patient.feedback}
            {offers[patient.id] && <p>{offers[patient.id]}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectedPatients;
