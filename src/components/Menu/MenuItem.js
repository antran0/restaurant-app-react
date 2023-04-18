import React from "react";
import styles from "./MenuItem.module.css";
import Button from "../UI/Button";

const MenuItem = (props) => {
  const amountRef = React.useRef();

  const addToCartHandler = () => {
    props.onAddToCart(props.menuItems[props.index], amountRef.current.value);
  };

  return (
    <li className={`${styles["menu-item"]}`}>
      <hgroup>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <p>${props.price.toFixed(2)}</p>
      </hgroup>
      <div>
        <label>Amount</label>
        <input type="number" min={1} max={5} defaultValue="1" ref={amountRef} />
        <Button onClick={addToCartHandler}>&#43;Add</Button>
      </div>
    </li>
  );
};

export default MenuItem;
