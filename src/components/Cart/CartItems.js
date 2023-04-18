import React from "react";
import styles from "./CartItems.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const CartItems = (props) => {
  const items = props.cartItems;
  const setItems = props.setCartItems;

  const totalAmount = items.reduce((sum, currItem) => {
    return sum + currItem.menuItem.price * currItem.quantity;
  }, 0);

  const decrementItemHandler = (index) => {
    if (items[index].quantity === 1) {
      console.log(`Removing item "${items[index].menuItem.name}" from cart.`);
      items.splice(index, 1);
    } else {
      items[index].quantity--;
      console.log(
        `Removing x1 "${items[index].menuItem.name}." Total: quantity: ${items[index].quantity}`
      );
    }

    setItems([...items]);
  };

  const incrementItemHandler = (index) => {
    items[index].quantity++;
    console.log(
      `Adding x1 "${items[index].menuItem.name}." Total quantity: ${items[index].quantity}`
    );
    setItems([...items]);
  };

  const orderHandler = (event) => {
    event.preventDefault();
    console.log("Ordering");
  };

  return (
    <Card className={`${styles["cart-items"]}`}>
      <form onSubmit={orderHandler}>
        <div>
          {items.map((item, index) => (
            <div key={item.menuItem.id}>
              <div>
                <h3>{item.menuItem.name}</h3>
                <div>
                  <div>{`$${item.menuItem.price.toFixed(2)}`}</div>
                  <div>&times;{item.quantity}</div>
                </div>
              </div>
              <div>
                <Button
                  type="button"
                  onClick={(event) => {
                    decrementItemHandler(index);
                  }}
                >
                  -
                </Button>
                <Button
                  type="button"
                  onClick={(event) => incrementItemHandler(index)}
                >
                  +
                </Button>
              </div>
            </div>
          ))}
        </div>
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
