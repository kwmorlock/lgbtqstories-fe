import React from "react";
import { Link } from "react-router-dom";
import {
  HeaderDiv,
  HeaderH1,
  LinkDiv,
  ButtonDiv,
  HeaderButton,
} from "./StoriesHeaderStyles";

const StoriesHeader = () => {
  const logout = () => {
    localStorage.clear();
    window.location.href = "/#/login";
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
            to="/stories"
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
            to="/stories/edit"
          >
            Your Stories
          </Link>
        </LinkDiv>
        <LinkDiv>
          <Link
            style={{
              color: "white",
              textDecoration: "none",
            }}
            to="/stories/add"
          >
            Add Story
          </Link>
        </LinkDiv>
        <ButtonDiv>
          <a href="https://github.com/kwmorlock/lgbtqstories-be">
            <HeaderButton>Github</HeaderButton>
          </a>
        </ButtonDiv>
        <ButtonDiv>
          <HeaderButton onClick={() => logout(false)}>Logout</HeaderButton>
        </ButtonDiv>
      </HeaderDiv>
    </>
  );
};

export default StoriesHeader;
