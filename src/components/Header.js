import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div>
        <h1>LGBTQ Stories</h1>
        <div
          class="color"
          style={{
            margin: "20px auto",
            width: "10%",
            backgroundColor: "hotpink",
            border: "3px solid purple",
          }}
        >
          <Link to="/">Home</Link>
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
      </div>
    </>
  );
};

export default Header;
