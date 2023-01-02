import React, { useState } from "react";

import Login from "./components/login/Login";
import SignUp from "./components/signup/Signup";

import "./App.css";

function App() {
  const [showLoginPage, setShowLoginPage] = useState(true);

  const handleRegisterButton = () => {
    setShowLoginPage(!showLoginPage);
  };
  return (
    <div className="App">
      <h1>SOAP HEALTH</h1>
      <div className="card">
        {showLoginPage ? <Login></Login> : <SignUp></SignUp>}
        <div className="btn-group">
          {showLoginPage ? <button className="register-btn">Login</button> : null}
          <button className="register-btn" onClick={handleRegisterButton}>
            {showLoginPage ? "Register" : "Back to login"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
