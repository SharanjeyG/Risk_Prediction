import React, { useState, useEffect } from 'react';
import CheckPat from './CheckPat'
import SelectedPatients from './SelectedPatients';

const PatientApp = ({patients}) => {
  const [selectedPatients, setSelectedPatients] = useState([]);
  const [search, setSearch] = useState("")
  const [searchRes, setSearchRes] = useState([])

  useEffect(() => {
    const patfetch = patients.filter((patient) =>
      patient.name.toLowerCase().includes(search.toLowerCase())
    );

    setSearchRes(patfetch.reverse());
  }, [patients, search]);

  const handleSelection = (patients) => {
    setSelectedPatients(patients);
  };

  return (
    <main className='offers'>
      <CheckPat patients={searchRes} handleSelection={handleSelection} search={search} setSearch={setSearch} setSearchRes={setSearchRes}/>
      <br></br><br></br>
      <SelectedPatients selectedPatients={selectedPatients} />
    </main>
  );
};

export default PatientApp;

