import React from "react";
import "./App.css";
import Register from "./components/UserReg";
import Login from "./components/UserLogin";
import PrivateRoute from "./utils/privateRoute";
import UserStories from "./components/Stories";
import PostStories from "./components/PostStories";
import UserStory from "./components/UserStories";
import MainPage from "./components/MainPage";
import AdminLogin from "./components/AdminLogin";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <PrivateRoute path="/stories/edit" component={UserStory} />
          <PrivateRoute path="/stories/add" component={PostStories} />
          <PrivateRoute path="/stories" component={UserStories} />
          <Route path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/adminlogin" component={AdminLogin} />
          <Route path="/" component={MainPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
