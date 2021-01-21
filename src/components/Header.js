import React from "react";
import { Link } from "react-router-dom";
import { HeaderDiv, HeaderH1, LinkDiv, ButtonDiv } from "./HeaderStyles";

const Header = () => {
  return (
    <>
      <HeaderDiv>
        <HeaderH1>LGBTQ Stories</HeaderH1>
        <LinkDiv>
          <Link
            style={{
              color: "white",
              textDecoration: "none",
            }}
            to="/"
          >
            Home
          </Link>
        </LinkDiv>
        <LinkDiv>
          <Link
            style={{
              color: "white",
              textDecoration: "none",
            }}
            to="/login"
          >
            Login
          </Link>
        </LinkDiv>
        <LinkDiv>
          <Link
            style={{
              color: "white",
              textDecoration: "none",
            }}
            to="/register"
          >
            Register
          </Link>
        </LinkDiv>
        <LinkDiv>
          <Link
            style={{
              color: "white",
              textDecoration: "none",
            }}
            to="/adminlogin"
          >
            Admin
          </Link>
        </LinkDiv>
        <ButtonDiv>
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
        </ButtonDiv>
      </HeaderDiv>
    </>
  );
};

export default Header;
