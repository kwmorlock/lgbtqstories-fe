import React from "react";
import { Link } from "react-router-dom";
import { HeaderDiv, HeaderH1 } from "./StoriesHeaderStyles";

const StoriesHeader = () => {
  const logout = () => {
    localStorage.clear();
    window.location.href = "/#/login";
  };
  return (
    <>
      <HeaderDiv>
        <HeaderH1>LGBTQ Stories</HeaderH1>
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
            to="/stories"
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
            to="/stories/edit"
          >
            Your Stories
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
            to="/stories/add"
          >
            Add Story
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

export default StoriesHeader;
