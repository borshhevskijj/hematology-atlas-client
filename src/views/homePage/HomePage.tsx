import React from "react";
import Main from "./MainScreen/Main";
import AboutProject from "./aboutProject/AboutProject";
import AboutBloodCells from "./aboutBloodCells/AboutBloodCells";
const HomePage = () => {
  return (
    <>
      <Main />
      <AboutBloodCells />
      <AboutProject />
    </>
  );
};

export default HomePage;
