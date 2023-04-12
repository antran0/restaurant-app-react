import React from "react";
import styles from "./Cart.module.css";
import Backdrop from "../UI/Backdrop";
import Card from "../UI/Card";

const Cart = (props) => {
  const [backdropDisplayed, setBackdropDisplayed] = React.useState(false);
  const displayCartHandler = () => {
    console.log("Displaying Cart");
    setBackdropDisplayed(true);
  };

  const hideCartHandler = () => {
    setBackdropDisplayed(false);
  };

  return (
    <Card>
      <h2 onClick={displayCartHandler}>Your Cart</h2>
      {backdropDisplayed ? <Backdrop onClick={hideCartHandler} /> : ""}
    </Card>
  );
};

export default Cart;
