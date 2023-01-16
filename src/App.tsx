import { useState } from "react";
import Login from "./components/login/Login";
import SignUp from "./components/signup/Signup";
import { Button, Grid } from "semantic-ui-react";

import "semantic-ui-css/semantic.min.css";
import "./App.css";

function App() {
  const [showLoginPage, setShowLoginPage] = useState(true);

  const handleRegisterButton = () => {
    setShowLoginPage(!showLoginPage);
  };
  return (
    <div className="card">
      {showLoginPage ? <Login></Login> : <SignUp></SignUp>}
      <Grid
        textAlign="center"
        style={{ height: "10vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
            {showLoginPage ? <Button primary size="large" fluid>Login</Button>: null}
            {showLoginPage ? <Button secondary size="large" fluid onClick={handleRegisterButton}>Register</Button> : null}
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default App;
