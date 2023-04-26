import React from "react";
import styles from "./CartItems.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const CartItems = (props) => {
  const cartContext = React.useContext(CartContext);

  return (
    <ol className={styles["cart-items"]}>
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
  );
};

export default CartItems;
