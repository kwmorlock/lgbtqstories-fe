import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div class="header">
        <h1>LGBTQ Stories</h1>
        <div
          style={{
            margin: "20px auto",
            width: "10%",
            fontSize: "2rem",
          }}
        >
          <Link
            style={{
              color: "white",
              textDecoration: "none",
            }}
            to="/"
          >
            Home
          </Link>
        </div>
        <div
          style={{
            margin: "20px auto",
            width: "10%",
            fontSize: "2rem",
          }}
        >
          <Link
            style={{
              color: "white",
              textDecoration: "none",
            }}
            to="/login"
          >
            Login
          </Link>
        </div>
        <div
          style={{
            color: "white",
            margin: "20px auto",
            width: "10%",
            fontSize: "2rem",
          }}
        >
          <Link
            style={{
              color: "white",
              textDecoration: "none",
            }}
            to="/register"
          >
            Register
          </Link>
        </div>
        <div
          style={{
            color: "white",
            margin: "20px auto",
            width: "10%",
            fontSize: "2rem",
            background: "none",
          }}
        >
          <a href="https://github.com/kwmorlock/lgbtqstories-fe">
            <button
              style={{
                color: "white",
                textDecoration: "none",
                background: "none",
                border: "none",
                fontSize: "2rem",
              }}
            >
              FE Github
            </button>
          </a>
        </div>
        <div
          style={{
            color: "white",
            margin: "20px auto",
            width: "10%",
            fontSize: "2rem",
            background: "none",
          }}
        >
          <a href="https://github.com/kwmorlock/lgbtqstories-be">
            <button
              style={{
                color: "white",
                textDecoration: "none",
                background: "none",
                border: "none",
                fontSize: "2rem",
              }}
            >
              BE Github
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
