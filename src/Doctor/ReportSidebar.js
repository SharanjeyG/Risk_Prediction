import React, { useState } from "react";
import "./RealTime.css";
import { Link } from "react-router-dom";

const ReportSidebar = () => {
  const [openSections, setOpenSections] = useState({
    kidney: false,
    neurology: false,
    cancer: false,
    heart: false,
    respiratory: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <main style={{ display: "flex", flexDirection: "row" }}>
      <div
        className="sidebar"
        style={{
          background: "radial-gradient(circle at top, #918c9b, #bdbde3)",
          height: "100vh",
          width: "max-content",
          padding: "15px",
        }}
      >
        <div className="sidebar-section">
          <button
            onClick={() => toggleSection("kidney")}
            className="sidebar-button"
          >
            KIDNEY {openSections.kidney ? "▲" : "▼"}
          </button>
          {openSections.kidney && (
            <div className="sidebar-content">
              <ul className="disease">
                <li>
                  <Link to="/doctor/report/acute">
                    Acute Kidney Infectionst
                  </Link>
                </li>
                <li>
                  <Link to="/doctor/report/ckd">Chronic Kidney Disease</Link>
                </li>
                <li>
                  <Link to="/doctor/report/stone">Stone</Link>
                </li>
                <li>
                  <Link to="/doctor/report/cyst">Cyst</Link>
                </li>
                <li>
                  <Link to="/doctor/report/tumor">Tumor</Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="sidebar-section">
          <button
            onClick={() => toggleSection("neurology")}
            className="sidebar-button"
          >
            NEUROLOGY {openSections.neurology ? "▲" : "▼"}
          </button>
          {openSections.neurology && (
            <div className="sidebar-content">
              <ul className="disease">
                <li><Link to="/doctor/report/parkinson">Parkinsons</Link></li>
                <li>
                  <Link to="/doctor/report/tumor">Tumor</Link>
                </li>
                <li><Link to="/doctor/report/stroke">Stroke</Link></li>
                <li>
                  <Link to="/doctor/report/alzheimer">Alzheimer</Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="sidebar-section">
          <button
            onClick={() => toggleSection("cancer")}
            className="sidebar-button"
          >
            CANCER {openSections.cancer ? "▲" : "▼"}
          </button>
          {openSections.cancer && (
            <div className="sidebar-content">
              <ul className="disease">
                <li>
                  <Link to="/doctor/report/upload">Kidney tumor</Link>
                </li>
                <li>
                  <Link to="/doctor/report/upload">Lung tumor</Link>
                </li>
                <li>
                  <Link to="/doctor/report/upload">Brain tumor</Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="sidebar-section">
          <button
            onClick={() => toggleSection("heart")}
            className="sidebar-button"
          >
            HEART {openSections.heart ? "▲" : "▼"}
          </button>
          {openSections.heart && (
            <div className="sidebar-content">
              <ul className="disease">
                <li>Heart attack</li>
                <li>Heart failure</li>
                <li>Stroke</li>
                <li>
                  <Link to="/doctor/report/upload">Arythmia</Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="sidebar-section">
          <button
            onClick={() => toggleSection("respiratory")}
            className="sidebar-button"
          >
            RESPIRATORY {openSections.respiratory ? "▲" : "▼"}
          </button>
          {openSections.respiratory && (
            <div className="sidebar-content">
              <ul className="disease">
                <li>
                  <Link to="/doctor/report/asthma">Asthma</Link>
                </li>
                <li><Link to="/doctor/report/copd">COPD</Link></li>
                <li>Lung Cancer</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* <div className="content" style={{ padding: "50px" }}>
        <section>
          <h1>Enter the inputs for the respective disease</h1>
        </section>
      </div> */}
    </main>
  );
};

export default ReportSidebar;
