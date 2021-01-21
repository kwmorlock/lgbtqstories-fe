import React from "react";
import Header from "./Header";
import { MainDiv } from "./MainPageStyles";

const MainPage = () => {
  return (
    <>
      <Header />
      <MainDiv>
        <h1 class="whitetext">
          Welcome to LGBTQ Stories where you can share anonymous stories about
          your own experiences, keep track of your own stories, and even edit or
          delete them at a later time.
        </h1>
      </MainDiv>
    </>
  );
};

export default MainPage;
