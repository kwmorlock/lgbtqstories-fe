import React from "react";
import Header from "./Header";
import { MainDiv, MainH1 } from "./MainPageStyles";

const MainPage = () => {
  return (
    <>
      <Header />
      <MainDiv>
        <MainH1>
          Welcome to LGBTQ Stories where you can share anonymous stories about
          your own experiences, keep track of your own stories, and even edit or
          delete them at a later time.
        </MainH1>
      </MainDiv>
    </>
  );
};

export default MainPage;
