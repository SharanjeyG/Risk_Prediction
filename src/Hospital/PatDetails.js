import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PatDetails = ({ patients }) => {
  const { id } = useParams();
  console.log(id);
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    const fetchpatient = patients.find((patient) => id === patient.id);
    setPatient(fetchpatient);
  }, [id, patients]);

  return (
    <main>
      {patient ? (
        <>
          <h1>Patient Details</h1>
          <h2>Name: {patient.name}</h2>
          <p>Gender: {patient.gender}</p>
          <p>Age: {patient.age}</p>
          <p>Email: {patient.email}</p>
          <p>Risk: {patient.risk}</p>
          <p>Visits: {patient.visits}</p>
          <p>Feedback: {patient.feedback}</p>
          <p>User ID: {patient.userid}</p>
          <p>Password: {patient.password}</p>
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </main>
  );
};

export default PatDetails;
