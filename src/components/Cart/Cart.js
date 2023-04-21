import React from "react";
import ReactDOM from "react-dom";
import styles from "./Cart.module.css";
import Backdrop from "../UI/Backdrop";
import Card from "../UI/Card";
import CartItems from "./CartItems";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const [backdropDisplayed, setBackdropDisplayed] = React.useState(false);
  const cartContext = React.useContext(CartContext);

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
          {cartContext.cartItems.reduce(
            (sum, cartItem) => sum + cartItem.quantity,
            0
          )}
        </Card>
      </Card>
      {backdropDisplayed &&
        ReactDOM.createPortal(
          <Backdrop onClick={hideCartHandler} />,
          document.body
        )}
      {backdropDisplayed &&
        ReactDOM.createPortal(
          <CartItems onHideCart={hideCartHandler} />,
          document.body
        )}
    </React.Fragment>
  );
};

export default Cart;
