import React from "react";
import styles from "./MenuItem.module.css";
import Button from "../UI/Button";
import CartContext from "../../store/cart-context";

const MenuItem = (props) => {
  const amountRef = React.useRef();
  const cartContext = React.useContext(CartContext);

  const addToCartHandler = () => {
    cartContext.onAddToCart(
      props.menuItems[props.index],
      amountRef.current.value
    );
  };

  return (
    <li className={`${styles["menu-item"]}`}>
      <hgroup>
        <h3>{props.name}</h3>
        <p className={`${styles["menu-item__description"]}`}>
          {props.description}
        </p>
        <p className={`${styles["menu-item__price"]}`}>
          ${props.price.toFixed(2)}
        </p>
      </hgroup>
      <div className={`${styles["menu-item__form-controls"]}`}>
        <label>Amount</label>
        <input type="number" min={1} max={5} defaultValue="1" ref={amountRef} />
        <Button
          className={`${styles["menu-item__add-Button"]}`}
          onClick={addToCartHandler}
        >
          &#43; Add
        </Button>
      </div>
    </li>
  );
};

export default MenuItem;
