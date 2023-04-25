import React from "react";
import styles from "./CartItems.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const CartItems = (props) => {
  const cartContext = React.useContext(CartContext);

  const totalAmount = cartContext.cartItems.reduce((sum, currItem) => {
    return sum + currItem.menuItem.price * currItem.quantity;
  }, 0);

  const orderHandler = (event) => {
    event.preventDefault();
    console.log("Ordering");
  };

  return (
    <Card className={`${styles["cart-items"]}`}>
      <form onSubmit={orderHandler}>
        <ol className={styles["cart-items__entries"]}>
          {cartContext.cartItems.map((item, index) => (
            <React.Fragment key={item.menuItem.id}>
              <CartItem
                name={item.menuItem.name}
                price={item.menuItem.price}
                quantity={item.quantity}
                index={index}
              />
              <hr />
            </React.Fragment>
          ))}
        </ol>
        <section>
          <header className={`${styles["cart-items__summary"]}`}>
            <h3>Total Amount</h3>
            <p>{`$${(Math.round(totalAmount * 100) / 100).toFixed(2)}`}</p>
          </header>
          <div className={`${styles["cart-items__summary-buttons"]}`}>
            <Button type="button" onClick={props.onHideCart}>
              Close
            </Button>
            {cartContext.cartItems.reduce(
              (sum, cartItem) => sum + cartItem.quantity,
              0
            ) > 0 && <Button type="submit">Order</Button>}
          </div>
        </section>
      </form>
    </Card>
  );
};

export default CartItems;
