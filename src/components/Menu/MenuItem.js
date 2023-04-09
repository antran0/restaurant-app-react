import React from "react";
import styles from "./MenuItem.module.css";
import Button from "../UI/Button";

const MenuItem = (props) => {
  return (
    <li className={`${styles["menu-item"]}`}>
      <section>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <div>{props.price}</div>
      </section>
      <form>
        <label>Amount</label>
        <input type="number" />
        <Button>+Add</Button>
      </form>
    </li>
  );
};

export default MenuItem;
