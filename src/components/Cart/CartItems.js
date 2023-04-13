import React from "react";
import styles from "./CartItems.module.css";
import Card from "../UI/Card";

const CartItems = (props) => {
  const totalAmount = 0;

  const orderHandler = () => {
    console.log("Ordering");
  };

  return (
    <Card className={`${styles["cart-items"]}`}>
      <section className={`${styles["cart-items__summary"]}`}>
        <h3>Total Amount</h3>
        {`$${(Math.round(totalAmount * 100) / 100).toFixed(2)}`}
      </section>
      <footer className={`${styles["cart-items__footer"]}`}>
        <Card onClick={props.onHideCart}>Close</Card>
        <Card onClick={orderHandler}>Order</Card>
      </footer>
    </Card>
  );
};

export default CartItems;
