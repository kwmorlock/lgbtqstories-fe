import React from "react";
import "./App.css";
import Header from "./components/Header";
import Register from "./components/UserReg";
import Login from "./components/UserLogin";
import { HashRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <p>Welcome</p>
        <Route path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </div>
    </Router>
  );
}

export default App;
