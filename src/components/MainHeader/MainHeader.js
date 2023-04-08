import React from "react";
import styles from "./MainHeader.module.css";
import NavBar from "../NavBar/NavBar";

const MainHeader = (props) => {
  return (
    <header className={`${styles["main-header"]}`}>
      <h1>ReactMeals</h1>
      <NavBar />
    </header>
  );
};

export default MainHeader;
