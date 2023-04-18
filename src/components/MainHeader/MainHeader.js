import React from "react";
import styles from "./MainHeader.module.css";
import NavBar from "../NavBar/NavBar";

const MainHeader = (props) => {
  return (
    <header className={`${styles["main-header"]}`}>
      <h1>ReactMeals</h1>
      <NavBar
        cartItems={props.cartItems}
        setCartItems={props.setCartItems}
        onAddToCart={(menuItem, quantity) =>
          props.onAddToCart(menuItem, quantity)
        }
      />
    </header>
  );
};

export default MainHeader;
