import React from "react";
import styles from "./NavBar.module.css";
import Cart from "../Cart/Cart";

const NavBar = (props) => {
  return (
    <nav>
      <ul className={`${styles["nav-bar__ul"]}`}>
        <li>
          <Cart
            cartItems={props.cartItems}
            onRemoveFromCart={(menuItem, quantity) =>
              props.onRemoveFromCart(menuItem, quantity)
            }
            onAddToCart={(menuItem, quantity) =>
              props.onAddToCart(menuItem, quantity)
            }
          />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
