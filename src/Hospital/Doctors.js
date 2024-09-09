import React from "react";
import { useNavigate } from "react-router-dom";

const Doctors = ({ doctors }) => {
    const navigate = useNavigate();

    const handleRowClick = (docid) => {
      navigate(`/hospital/dashboard/doctors/${docid}`);
    };

  return (
    <main>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Specialization</th>
            <th>User ID</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor) => (
            <tr key={doctor.id} onClick={()=>handleRowClick(doctor.id)} style={{cursor:"pointer"}}>
              <td>{doctor.name}</td>
              <td>{doctor.email}</td>
              <td>{doctor.special}</td>
              <td>{doctor.userid}</td>
              <td>{doctor.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default Doctors;
