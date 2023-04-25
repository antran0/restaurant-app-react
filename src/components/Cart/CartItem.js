import React from "react";

import styles from "./CartItem.module.css";
import Button from "../UI/Button";
import CartContext from "../../store/cart-context";

const CartItem = (props) => {
  const cartContext = React.useContext(CartContext);

  const decrementItemHandler = () => {
    cartContext.onRemoveFromCart(
      cartContext.cartItems[props.index].menuItem,
      1
    );
  };

  const incrementItemHandler = () => {
    cartContext.onAddToCart(cartContext.cartItems[props.index].menuItem, 1);
  };

  return (
    <li className={styles["cart-item"]}>
      <div>
        <h3 className={styles["cart-item__name"]}>{props.name}</h3>
        <span className={styles["cart-item__price"]}>
          {props.price.toFixed(2)}
        </span>
        <span className={styles["cart-item__quantity"]}>
          &times; {props.quantity}
        </span>
      </div>
      <div>
        <Button
          className={styles["cart-item__button"]}
          onClick={decrementItemHandler}
        >
          &minus;
        </Button>
        <Button
          className={styles["cart-item__button"]}
          onClick={incrementItemHandler}
        >
          &#43;
        </Button>
      </div>
    </li>
  );
};

export default CartItem;
