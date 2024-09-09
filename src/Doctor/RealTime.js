import React from "react";
import SideBar from "./SideBar";
import "./RealTime.css";
import MainReal from "./MainReal";

const RealTime = () => {
  return (
    <main
      className="realtime"
      style={{ display: "flex", flexDirection: "row" }}
    >
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="mainreal">
        <MainReal />
      </div>
    </main>
  );
};

export default RealTime;
