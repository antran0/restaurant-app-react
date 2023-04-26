import React from "react";
import styles from "./OrderForm.module.css";
import Button from "../UI/Button";

const OrderForm = (props) => {
  const totalQuantity = props.items.reduce(
    (sum, cartItem) => sum + cartItem.quantity,
    0
  );

  const totalAmount = props.items.reduce((sum, currItem) => {
    return sum + currItem.menuItem.price * currItem.quantity;
  }, 0);

  const orderHandler = (event) => {
    console.log("Ordering");
  };

  return (
    <section className={styles["order-form"]}>
      <header className={`${styles["order-form__summary"]}`}>
        <h3>Total Amount</h3>
        <p>{`$${(Math.round(totalAmount * 100) / 100).toFixed(2)}`}</p>
      </header>
      <footer className={`${styles["order-form__buttons"]}`}>
        <Button type="button" onClick={props.onHideCart}>
          Close
        </Button>
        {totalQuantity > 0 && (
          <Button type="button" onClick={orderHandler}>
            Order
          </Button>
        )}
      </footer>
    </section>
  );
};

export default OrderForm;
