import React from "react";
import {
  HeaderDiv,
  HeaderH1,
  LinkDiv,
  ButtonDiv,
  HeaderButton,
  HeaderLink,
} from "../styles/StoriesHeaderStyles";

const StoriesHeader = () => {
  const logout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };
  return (
    <>
      <HeaderDiv>
        <HeaderH1>LGBTQ Stories</HeaderH1>
        <LinkDiv>
          <HeaderLink to="/stories">All Stories</HeaderLink>
        </LinkDiv>
        <LinkDiv>
          <HeaderLink to="/stories/edit">Your Stories</HeaderLink>
        </LinkDiv>
        <LinkDiv>
          <HeaderLink to="/stories/add">Add Story</HeaderLink>
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
