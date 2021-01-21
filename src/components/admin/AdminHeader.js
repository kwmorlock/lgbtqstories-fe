import React from "react";
import { Link } from "react-router-dom";
import { HeaderDiv } from "./AdminHeaderStyles";

const AdminHeader = () => {
  const logout = () => {
    localStorage.clear();
    window.location.href = "/#/adminlogin";
  };
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
            to="/adminstories"
          >
            All Stories
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
            to="/userlist"
          >
            Users
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
        <div
          style={{
            color: "white",
            margin: "20px auto",
            fontSize: "2rem",
            background: "none",
          }}
        >
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
        </div>
      </HeaderDiv>
    </>
  );
};

export default AdminHeader;
