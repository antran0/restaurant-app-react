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
    <React.Fragment>
      <Card className={`${styles["cart"]}`} onClick={displayCartHandler}>
        <h2>Your Cart</h2>
        <Card className={`${styles["cart__quantity"]}`}>
          {props.cartItems.reduce(
            (sum, cartItem) => sum + cartItem.quantity,
            0
          )}
        </Card>
      </Card>
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
              onRemoveFromCart={(menuItem, quantity) =>
                props.onRemoveFromCart(menuItem, quantity)
              }
              onAddToCart={(menuItem, quantity) =>
                props.onAddToCart(menuItem, quantity)
              }
              onHideCart={hideCartHandler}
            />,
            document.body
          )
        : ""}
    </React.Fragment>
  );
};

export default Cart;
