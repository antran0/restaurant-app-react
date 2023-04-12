import React from "react";
import ReactDOM from "react-dom";
import styles from "./Cart.module.css";
import Backdrop from "../UI/Backdrop";
import Card from "../UI/Card";
import CartItems from "./CartItems";

const Cart = (props) => {
  const [backdropDisplayed, setBackdropDisplayed] = React.useState(false);
  const displayCartHandler = () => {
    console.log("Displaying Cart");
    setBackdropDisplayed(true);
  };

  const hideCartHandler = () => {
    console.log("Closing cart");
    setBackdropDisplayed(false);
  };

  return (
    <Card>
      <h2 onClick={displayCartHandler}>Your Cart</h2>
      {backdropDisplayed
        ? ReactDOM.createPortal(
            <Backdrop onClick={hideCartHandler} />,
            document.getElementsByTagName("body")[0]
          )
        : ""}
      {backdropDisplayed
        ? ReactDOM.createPortal(
            <CartItems />,
            document.getElementsByTagName("body")[0]
          )
        : ""}
    </Card>
  );
};

export default Cart;
