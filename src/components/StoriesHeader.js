import React from "react";
import { Link } from "react-router-dom";

const StoriesHeader = () => {
  const logout = () => {
    localStorage.clear();
    window.location.href = "/#/login";
  };
  return (
    <>
      <div class="header">
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
            width: "10%",
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
            width: "10%",
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
            width: "10%",
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
        <div
          style={{
            color: "white",
            margin: "20px auto",
            width: "10%",
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
      </div>
    </>
  );
};

export default StoriesHeader;
