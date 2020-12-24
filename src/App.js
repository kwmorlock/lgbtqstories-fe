import React from "react";
import "./App.css";
import Header from "./components/Header";
import Register from "./components/UserReg";
import { HashRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <p>Welcome</p>
        <Route path="/register" component={Register} />
      </div>
    </Router>
  );
}

export default App;
