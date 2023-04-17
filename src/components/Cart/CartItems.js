import React from "react";
import styles from "./CartItems.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const CartItems = (props) => {
  const [items, setItems] = React.useState([
    {
      menuItem: {
        id: Math.random(),
        name: "Sushi",
        description: "Finest fish and veggies",
        price: 22.99,
      },
      quantity: 2,
    },
    {
      menuItem: {
        id: Math.random(),
        name: "Barbecue Burger",
        description: "American, raw, meaty",
        price: 12.99,
      },
      quantity: 3,
    },
  ]);

  const totalAmount = items.reduce((sum, currItem) => {
    return sum + currItem.menuItem.price * currItem.quantity;
  }, 0);

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
                <Button type="button">-</Button>
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
