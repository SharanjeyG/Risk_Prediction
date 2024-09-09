import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DocDetails = ({ doctors }) => {
  const { id } = useParams();
  console.log(id);
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    const foundDoctor = doctors.find(doctor => doctor.id === id);
    setDoctor(foundDoctor);
  }, [id, doctors]);

  return (
    <main>
      {doctor ? (
        <>
          <h1>Doctor Details</h1>
          <h2>Name: {doctor.name}</h2>
          <p>Email: {doctor.email}</p>
          <p>User ID: {doctor.userid}</p>
          <p>Password: {doctor.password}</p>
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </main>
  );
};

export default DocDetails;
