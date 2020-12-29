import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <>
      <div
        class="color"
        style={{
          margin: "20px auto",
          width: "10%",
          backgroundColor: "hotpink",
          border: "3px solid purple",
        }}
      >
        <Link to="/login">Login</Link>
      </div>
      <div
        class="color"
        style={{
          margin: "20px auto",
          width: "10%",
          backgroundColor: "hotpink",
          border: "3px solid purple",
        }}
      >
        <Link to="/register">Register</Link>
      </div>
      <div class="main">
        <h1>
          Welcome to LGBTQ Stories where you can share anonymous stories about
          your own experiences, keep track of your own stories, and even edit or
          delete them at a later time.
        </h1>
      </div>
    </>
  );
};

export default MainPage;
