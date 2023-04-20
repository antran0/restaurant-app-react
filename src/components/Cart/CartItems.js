import React from "react";
import styles from "./CartItems.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import CartContext from "../../store/cart-context";

const CartItems = (props) => {
  const cartContext = React.useContext(CartContext);
  const items = cartContext.cartItems;

  const totalAmount = items.reduce((sum, currItem) => {
    return sum + currItem.menuItem.price * currItem.quantity;
  }, 0);

  const decrementItemHandler = (index) => {
    cartContext.onRemoveFromCart(items[index].menuItem, 1);
  };

  const incrementItemHandler = (index) => {
    cartContext.onAddToCart(items[index].menuItem, 1);
  };

  const orderHandler = (event) => {
    event.preventDefault();
    console.log("Ordering");
  };

  return (
    <Card className={`${styles["cart-items"]}`}>
      <form onSubmit={orderHandler}>
        <div className={styles["cart-items__entries"]}>
          {items.map((item, index) => (
            <React.Fragment key={item.menuItem.id}>
              <section className={`${styles["cart-items__entry"]}`}>
                <div>
                  <h3>{item.menuItem.name}</h3>
                  <div>
                    <span
                      className={styles["cart-items__entry__price"]}
                    >{`$${item.menuItem.price.toFixed(2)}`}</span>
                    <span className={styles["cart-items__entry__quantity"]}>
                      &times; {item.quantity}
                    </span>
                  </div>
                </div>
                <div>
                  <Button
                    type="button"
                    onClick={(event) => {
                      decrementItemHandler(index);
                    }}
                  >
                    &minus;
                  </Button>
                  <Button
                    type="button"
                    onClick={(event) => incrementItemHandler(index)}
                  >
                    &#43;
                  </Button>
                </div>
              </section>
              <hr />
            </React.Fragment>
          ))}
        </div>
        <section>
          <header className={`${styles["cart-items__summary"]}`}>
            <h3>Total Amount</h3>
            <p>{`$${(Math.round(totalAmount * 100) / 100).toFixed(2)}`}</p>
          </header>
          <div className={`${styles["cart-items__summary-buttons"]}`}>
            <Button type="button" onClick={props.onHideCart}>
              Close
            </Button>
            {items.reduce((sum, cartItem) => sum + cartItem.quantity, 0) >
              0 && <Button type="submit">Order</Button>}
          </div>
        </section>
      </form>
    </Card>
  );
};

export default CartItems;
