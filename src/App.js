import React from "react";
import "./App.css";
import Register from "./components/users/UserReg";
import Login from "./components/users/UserLogin";
import PrivateRoute from "./utils/privateRoute";
import UserStories from "./components/users/Stories";
import PostStories from "./components/users/PostStories";
import UserStory from "./components/users/UserStories";
import MainPage from "./components/main/MainPage";
import AdminLogin from "./components/admin/AdminLogin";
import AdminStories from "./components/admin/AdminStories";
import UserList from "./components/admin/UserList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <PrivateRoute path="/adminstories" component={AdminStories} />
          <PrivateRoute path="/userlist" component={UserList} />
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
