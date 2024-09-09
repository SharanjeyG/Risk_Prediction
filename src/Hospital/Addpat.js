import React from "react";

const Addpat = ({
  risk,
  setRisk,
  patName,
  setPatname,
  handlePatSubmit,
  patEmail,
  setPatemail,
  setFeedback,
  feedback,
  setAge,
  age,
  setGender,
  gender,
  setVisits,
  visits,
}) => {
  return (
    <main>
      <form className="patientdet" onSubmit={(e) => handlePatSubmit(e)}>
        <div className="first">
          <label htmlFor="name">Patient Name: </label>
          <input
            className="patentry"
            id="name"
            type="text"
            placeholder="Enter Patient Name"
            required
            value={patName}
            onChange={(e) => setPatname(e.target.value)}
          />
          <label htmlFor="gender">Gender: </label>
          <label htmlFor="mgender">Male</label>
          <input
            id="mgender"
            type="radio"
            value="Male"
            onChange={(e) => setGender(e.target.value)}
          />

          <label htmlFor="fgender">Female</label>
          <input
            id="fgender"
            type="radio"
            value="Female"
            onChange={(e) => setGender(e.target.value)}
          />

          <label htmlFor="age">Patient Age: </label>
          <input
            className="patentry"
            id="age"
            type="text"
            placeholder="Enter Patient Age"
            required
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <label htmlFor="email">Email: </label>
          <input
            className="patentry"
            id="email"
            type="email"
            placeholder="Enter Patient Email"
            value={patEmail}
            onChange={(e) => setPatemail(e.target.value)}
            required
          />
        </div>
        <div className="second">
          <label htmlFor="risk">Risk: </label>
          <input
            className="patentry"
            id="risk"
            type="text"
            placeholder="Enter Patient Risk"
            value={risk}
            onChange={(e) => setRisk(e.target.value)}
            required
          />
          <label htmlFor="visits">Visits: </label>
          <input
            className="patentry"
            id="visits"
            type="text"
            placeholder="No. of Visits"
            required
            value={visits}
            onChange={(e) => setVisits(e.target.value)}
          />
          <label htmlFor="feedback">Feedback Score: </label>
          <input
            className="patentry"
            id="feedback"
            type="text"
            placeholder="Patient Feedback"
            required
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
          <button>Submit</button>
        </div>
      </form>
    </main>
  );
};

export default Addpat;
