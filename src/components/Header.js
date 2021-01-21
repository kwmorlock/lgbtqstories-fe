import React from "react";
import { Link } from "react-router-dom";
import { HeaderDiv } from "./HeaderStyles";

const Header = () => {
  return (
    <>
      <HeaderDiv>
        <h1
          style={{
            marginLeft: "1%",
          }}
        >
          LGBTQ Stories
        </h1>
        <div
          style={{
            margin: "20px auto",
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
            margin: "20px auto",
            fontSize: "2rem",
          }}
        >
          <Link
            style={{
              color: "white",
              textDecoration: "none",
            }}
            to="/adminlogin"
          >
            Admin
          </Link>
        </div>
        <div
          style={{
            color: "white",
            margin: "20px auto",
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
              Github
            </button>
          </a>
        </div>
      </HeaderDiv>
    </>
  );
};

export default Header;
