import React from "react";
import {
  HeaderDiv,
  HeaderH1,
  LinkDiv,
  ButtonDiv,
  HeaderButton,
  HeaderLink,
} from "../styles/HeaderStyles";

const Header = () => {
  return (
    <>
      <HeaderDiv>
        <HeaderH1>LGBTQ Stories</HeaderH1>
        <LinkDiv>
          <HeaderLink to="/">Home</HeaderLink>
        </LinkDiv>
        <LinkDiv>
          <HeaderLink to="/login">Login</HeaderLink>
        </LinkDiv>
        <LinkDiv>
          <HeaderLink to="/register">Register</HeaderLink>
        </LinkDiv>
        <LinkDiv>
          <HeaderLink to="/adminlogin">Admin</HeaderLink>
        </LinkDiv>
        <ButtonDiv>
          <a href="https://github.com/kwmorlock/lgbtqstories-be">
            <HeaderButton>Github</HeaderButton>
          </a>
        </ButtonDiv>
      </HeaderDiv>
    </>
  );
};

export default Header;
