import React, { useState } from 'react';

const Patients = ({ setSearchRes, setSearch, search, patients, handleSelection }) => {
  const [selectedPatients, setSelectedPatients] = useState([]);

  const handleCheckboxChange = (patient) => {
    let updatedSelection;
    if (selectedPatients.includes(patient)) {
      updatedSelection = selectedPatients.filter(p => p !== patient);
    } else {
      updatedSelection = [...selectedPatients, patient];
    }
    setSelectedPatients(updatedSelection);
    handleSelection(updatedSelection); // Pass the selected patients to the parent
  };

  return (
    <main>
        <form onSubmit={(e)=>e.preventDefault()}>
        <input
            className='search'
            type='text'
            placeholder='Search Patients'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />  
      </form>
        <table>
            <thead>
            <tr>
                <th>Select</th>
                <th>Patient ID</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Age</th>
                <th>Email</th>
                <th>Risk</th>
                <th>Visits</th>
                <th>Feedback</th>
                <th>User ID</th>
                <th>Password</th>
            </tr>
            </thead>
            <tbody>
            {patients.map((patient) => (
                <tr key={patient.id}>
                  <td>
                      <input
                      type="checkbox"
                      checked={selectedPatients.includes(patient)}
                      onChange={() => handleCheckboxChange(patient)}
                      />
                  </td>
                  <td>{patient.name}</td>
                  <td>{patient.gender}</td>
                  <td>{patient.age}</td>
                  <td>{patient.email}</td>
                  <td>{patient.risk}</td>
                  <td>{patient.visits}</td>
                  <td>{patient.feedback}</td>
                  <td>{patient.userid}</td>
                  <td>{patient.password}</td>
                </tr>
            ))}
            </tbody>
        </table>
    </main>
  );
};

export default Patients;
