import React from "react";
import { useParams } from "react-router-dom";
import AddDoc from "./AddDoc";

const Special = ({
  DocName,
  setDocname,
  setDocemail,
  handleDocSubmit,
  docEmail,
}) => {
  const { special } = useParams();

  return (
    <main>
      <AddDoc />
      <h1>{special} Specialization</h1>
      <h2>Doctor Informations</h2>
      <form onSubmit={(e) => handleDocSubmit(e, special)}>
        <label>Name: </label>
        <input
          id="name"
          type="text"
          placeholder="Enter Doctor Name"
          value={DocName}
          onChange={(e) => setDocname(e.target.value)}
          required
        />
        <label htmlFor="email">Email: </label>
        <input
          id="email"
          type="email"
          placeholder="Enter Doctor Email"
          value={docEmail}
          onChange={(e) => setDocemail(e.target.value)}
          required
        />
        <button>Submit</button>
      </form>
    </main>
  );
};

export default Special;
