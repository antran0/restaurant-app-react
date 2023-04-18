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
    console.log("Closing Cart");
    setBackdropDisplayed(false);
  };

  return (
    <Card>
      <h2 onClick={displayCartHandler}>Your Cart</h2>
      {backdropDisplayed
        ? ReactDOM.createPortal(
            <Backdrop onClick={hideCartHandler} />,
            document.body
          )
        : ""}
      {backdropDisplayed
        ? ReactDOM.createPortal(
            <CartItems
              cartItems={props.cartItems}
              setCartItems={props.setCartItems}
              onAddToCart={(menuItem, quantity) =>
                props.onAddToCart(menuItem, quantity)
              }
              onHideCart={hideCartHandler}
            />,
            document.body
          )
        : ""}
    </Card>
  );
};

export default Cart;
