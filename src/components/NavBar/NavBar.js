import React from "react";
import styles from "./NavBar.module.css";
import Card from "../UI/Card";
import Cart from "../Cart/Cart";

const NavBar = (props) => {
  return (
    <nav className={`${styles["nav-bar"]}`}>
      <ul>
        <li>
          <Cart />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
