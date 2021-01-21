import React from "react";
import { Link } from "react-router-dom";
import { HeaderDiv, HeaderH1, LinkDiv, ButtonDiv } from "./AdminHeaderStyles";

const AdminHeader = () => {
  const logout = () => {
    localStorage.clear();
    window.location.href = "/#/adminlogin";
  };
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
            to="/adminstories"
          >
            All Stories
          </Link>
        </LinkDiv>
        <LinkDiv>
          <Link
            style={{
              color: "white",
              textDecoration: "none",
            }}
            to="/userlist"
          >
            Users
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
        <ButtonDiv>
          <button
            style={{
              color: "white",
              textDecoration: "none",
              background: "none",
              border: "none",
              fontSize: "2rem",
            }}
            onClick={() => logout(false)}
          >
            Logout
          </button>
        </ButtonDiv>
      </HeaderDiv>
    </>
  );
};

export default AdminHeader;
