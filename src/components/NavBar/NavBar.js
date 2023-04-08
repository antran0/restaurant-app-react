import React from "react";
import styles from "./NavBar.module.css";
import Card from "../UI/Card";

const NavBar = (props) => {
  return (
    <nav className={`${styles["nav-bar"]}`}>
      <ul>
        <li>
          <Card>Your Cart</Card>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
