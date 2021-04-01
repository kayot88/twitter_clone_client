import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "./pages";
import { SignIn } from "./pages";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
