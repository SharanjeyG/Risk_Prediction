import React from "react";
import Report from "./Report";
import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import AcuteKidneyForm from "./form/AcuteKidneyForm";
import AsthmaForm from "./form/AsthmaFrom";
import CADForm from "./form/CADForm";
import About from "./About";
import RealTime from "./RealTime";
import Scribber from "./Scribber";
import COPDForm from "./form/COPDForm";
import CYSTForm from "./form/CYSTForm";
import ParkinsonForm from "./form/ParkinsonFrom";
import StoneForm from "./form/StoneForm";
import TumorForm from "./form/TumorForm";
import AlzheimerForm from "./form/AlzheimerForm";
import StrokeForm from "./form/StrokeForm";

function DocApp() {
  return (
    <div className="doctor">
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/realtime" element={<RealTime />} />
        <Route path="/scribber" element={<Scribber />} />
        <Route path="/report" element={<Report />} />
        <Route path="/report/acute" element={<AcuteKidneyForm />} />
        <Route path="/report/asthma" element={<AsthmaForm />} />
        <Route path="/report/ckd" element={<CADForm />} />
        <Route path="/report/copd" element={<COPDForm />} />
        <Route path="/report/cyst" element={<CYSTForm />} />
        <Route path="/report/stone" element={<StoneForm />} />
        <Route path="/report/tumor" element={<TumorForm />} />
        <Route path="/report/parkinson" element={<ParkinsonForm />} />
        <Route path="/report/alzheimer" element={<AlzheimerForm />} />
        <Route path="/report/stroke" element={<StrokeForm />} />
      </Routes>
    </div>
  );
}

export default DocApp;
