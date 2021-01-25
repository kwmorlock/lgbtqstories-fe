import React from "react";
import {
  HeaderDiv,
  HeaderH1,
  LinkDiv,
  ButtonDiv,
  HeaderButton,
  HeaderLink,
} from "../styles/AdminHeaderStyles";

const AdminHeader = () => {
  const logout = () => {
    localStorage.clear();
    window.location.href = "/adminlogin";
  };
  return (
    <>
      <HeaderDiv>
        <HeaderH1>LGBTQ Stories</HeaderH1>
        <LinkDiv>
          <HeaderLink to="/adminstories">All Stories</HeaderLink>
        </LinkDiv>
        <LinkDiv>
          <HeaderLink to="/userlist">Users</HeaderLink>
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

export default AdminHeader;
