import React from "react";
import { useState } from "react";
import LoginOther from "./LoginOther";
import LoginHos from "./LoginHos";

const LoginPage = () => {
  const [user, setUser] = useState("");

  const handleUserSelection = (e) => {
    setUser(e.target.value);
  };

  return (
    <main className="userlogin">
        <div>
          <h1>Select User</h1>
        </div>
        
        <div>
          <form className="selectuser">
            <label>
              <input
                type="radio"
                name="user"
                value="Hospital"
                onChange={handleUserSelection}
              />
              <span></span>
              Hospital
            </label>
            <label>
              <input
                type="radio"
                name="user"
                value="Doctor"
                onChange={handleUserSelection}
              />
              <span></span>
              Doctor
            </label>
            <label>
              <input
                type="radio"
                name="user"
                value="Patient"
                onChange={handleUserSelection}
              />
              <span></span>
              Patient
            </label>
          </form>
        </div>


        {user === 'Hospital' && <LoginHos />}
        {(user === 'Doctor' || user === 'Patient') && <LoginOther user={user} />}

    </main>
  );
};

export default LoginPage;
