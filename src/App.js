import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Main from "./Main";
import SignInSide from "./SignIn";
import SignUp from "./SignUp";
import Profile from "./Album";

function App() {

  return (
      <div className="App">
          <Router>
              <Switch>
                  <Route path="/" exact component={Main} />
                  <Route path="/sign-in" exact component={SignInSide} />
                  <Route path="/sign-up" exact component={SignUp} />
                  <Route path="/profile" exact component={Profile} />

              </Switch>
          </Router>
      </div>
  );
}

export default App;
