import React from "react";
import { useNavigate } from "react-router-dom";

const Patients = ({ patients }) => {
  const navigate = useNavigate();

  const handleRowClick = (patid) => {
    navigate(`/hospital/dashboard/patients/${patid}`);
  };

  return (
    <main>
      <table>
        <thead>
          <tr>
            <th>ID</th>
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
            <tr
              key={patient.id}
              onClick={() => handleRowClick(patient.id)}
              style={{ cursor: "pointer" }}
            >
              <td>{patient.id}</td>
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
