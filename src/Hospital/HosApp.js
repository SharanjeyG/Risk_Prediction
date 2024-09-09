import React from "react";
import About from "./About";
import { Route, Routes } from "react-router-dom";
import apid from "../api/doctor";
import apip from "../api/patient";
import AddDoc from "./AddDoc";
import Addpat from "./Addpat";
import Special from "./Special";
import Header from "./Header";
import Offers from "./Offers";
import Dashboard from "./Dashboard";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PatDetails from "./PatDetails";
import DocDetails from "./DocDetails";

const HosApp = () => {
  const [doctors, setDoctors] = useState([]);
  const [patients, setPatients] = useState([]);
  const [docName, setDocname] = useState("");
  const [docEmail, setDocemail] = useState("");
  const [patName, setPatname] = useState("");
  const [patEmail, setPatemail] = useState("");
  const [risk, setRisk] = useState("");
  const [patSearch, setpatSearch] = useState("");
  const [patSearchRes, setpatSearchRes] = useState([]);
  const [docSearch, setdocSearch] = useState("");
  const [docSearchRes, setdocSearchRes] = useState([]);
  const [visits, setVisits] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [feedback, setFeedback] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDoctor = async () => {
      const response = await apid.get("/doctor");
      setDoctors(response.data);
      console.log("Hii");
    };
    fetchDoctor();
  }, []);

  useEffect(() => {
    const fetchPatient = async () => {
      const response = await apip.get("/patient");
      setPatients(response.data);
    };
    fetchPatient();
  }, []);

  useEffect(() => {
    const patfetch = patients.filter((patient) =>
      patient.name.toLowerCase().includes(patSearch.toLowerCase())
    );

    setpatSearchRes(patfetch.reverse());
  }, [patients, patSearch]);

  useEffect(() => {
    const docfetch = doctors.filter((doctor) =>
      doctor.name.toLowerCase().includes(docSearch.toLowerCase())
    );

    setdocSearchRes(docfetch.reverse());
  }, [doctors, docSearch]);

  const handleDocSubmit = async (e, special) => {
    e.preventDefault();
    const id = doctors.length ? doctors[doctors.length - 1].id + 1 : 1;
    const userid = `${docName
      .toLowerCase()
      .replace(" ", "")}doc.${id}@gmail.com`;
    const password = `${docName
      .toLowerCase()
      .replace(" ", "")}@${special.toLowerCase()}`;

    const newdoctor = {
      id,
      name: docName,
      email: docEmail,
      special: special,
      userid: userid,
      password: password,
    };

    try {
      const response = await apid.post("/doctor", newdoctor);
      const alldoc = [...doctors, response.data];
      console.log(special);
      setDoctors(alldoc);
      setDocemail("");
      setDocname("");

      // await emailService.send({
      //   to: docEmail,
      //   subject: "Your Doctor Portal Credentials",
      //   text: `Your user ID is ${userid} and your password is ${password}. Please log in to access your account.`,
      // });

      navigate("/hospital/dashboard");
    } catch (err) {
      console.log(err.Message);
    }
  };

  const handlePatSubmit = async (e, special) => {
    e.preventDefault();
    const id = patients.length ? patients[patients.length - 1].id + 1 : 1;
    const userid = `${patName
      .toLowerCase()
      .replace(" ", "")}pat.${id}@gmail.com`;
    const password = `${patName
      .toLowerCase()
      .replace(" ", "")}@${risk.toLowerCase()}`;

    const newdoctor = {
      id,
      name: patName,
      email: patEmail,
      risk: risk,
      gender: gender,
      age: age,
      feedback: feedback,
      visits: visits,
      userid: userid,
      password: password,
    };
    try {
      const response = await apip.post("/patient", newdoctor);
      const alldoc = [...patients, response.data];
      console.log(special);
      setPatients(alldoc);
      setPatemail("");
      setPatname("");
      setRisk("");
      navigate("/dashboard");
    } catch (err) {
      console.log(err.Message);
    }
  };
  return (
    <div className="hospital">
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/adddoc">
          <Route index element={<AddDoc />} />
          <Route
            path=":special"
            element={
              <Special
                docName={docName}
                setDocname={setDocname}
                handleDocSubmit={handleDocSubmit}
                docEmail={docEmail}
                setDocemail={setDocemail}
              />
            }
          />
        </Route>

        <Route
          path="/dashboard"
          element={
            <Dashboard
              patSearch={patSearch}
              setpatSearch={setpatSearch}
              patSearchRes={patSearchRes}
              docSearch={docSearch}
              setdocSearch={setdocSearch}
              docSearchRes={docSearchRes}
            />
          }
        />
        <Route
          path="/dashboard/patients/:id"
          element={<PatDetails patients={patients} />}
        />
        <Route
          path="/dashboard/doctors/:id"
          element={<DocDetails doctors={doctors} />}
        />
        <Route
          path="/addpat"
          element={
            <Addpat
              setFeedback={setFeedback}
              feedback={feedback}
              setAge={setAge}
              age={age}
              setGender={setGender}
              gender={gender}
              setVisits={setVisits}
              visits={visits}
              patName={patName}
              setPatname={setPatname}
              patEmail={patEmail}
              setPatemail={setPatemail}
              handlePatSubmit={handlePatSubmit}
              risk={risk}
              setRisk={setRisk}
            />
          }
        />
        <Route path="/offers" element={<Offers patients={patients} />} />
      </Routes>
    </div>
  );
};

export default HosApp;
