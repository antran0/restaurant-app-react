import React from "react";
import styles from "./CartItems.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const CartItems = (props) => {
  const totalAmount = 0;

  const orderHandler = (event) => {
    event.preventDefault();
    console.log("Ordering");
  };

  return (
    <Card className={`${styles["cart-items"]}`}>
      <form
        className={`${styles["cart-items__footer"]}`}
        onSubmit={orderHandler}
      >
        <div>
          <h3>Total Amount</h3>
          {`$${(Math.round(totalAmount * 100) / 100).toFixed(2)}`}
          <Card onClick={props.onHideCart}>
            <Button type="button">Close</Button>
          </Card>
          <Card>
            <Button type="submit">Order</Button>
          </Card>
        </div>
      </form>
    </Card>
  );
};

export default CartItems;
