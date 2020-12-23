import React from "react";
import "./App.css";
import Header from "./components/Header";
import Register from "./components/UserReg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <p>Hello</p>
        <Switch>
          <Route path="/register" component={Register} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
