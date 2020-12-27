import React from "react";
import "./App.css";
import Header from "./components/Header";
import Register from "./components/UserReg";
import Login from "./components/UserLogin";
import PrivateRoute from "./utils/privateRoute";
import UserStories from "./components/Stories";
import PostStories from "./components/PostStories"
import UserStory from "./components/UserStories"
import { HashRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <p>Welcome</p>
        <Route path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute path="/stories/add" component={PostStories} />
        <PrivateRoute path="/stories" component={UserStories} />
        <PrivateRoute path="/stories/edit" component={UserStory} />
      </div>
    </Router>
  );
}

export default App;
