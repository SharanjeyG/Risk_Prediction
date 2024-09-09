import React from "react";
import { Link } from "react-router-dom";

const Header = ({name}) => {
  return (
    <header>
      <div className="name">
        <h1>
          <Link to="/hospital/">Hospital Name</Link>
        </h1>
      </div>

      <div className="nav">
        <nav>
          <ul className="items">
            <li>
              <Link to="/hospital/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/hospital/offers">Offers</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="profile">
        <img src="profile-pic.jpg" alt="Profile" className="profile-pic" />
        <span className="profile-name">John Doe</span>
      </div>
    </header>
  );
};

export default Header;
