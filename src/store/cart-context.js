import React from "react";

const CartContext = React.createContext({
  cartItems: [],
  onAddToCart: (menuItem, quantity) => {},
  onRemoveFromCart: (menuItem, quantity) => {},
});

export const CartContextProvider = (props) => {
  const [cartItems, setCartItems] = React.useState([]);

  const removeFromCartHandler = (menuItem, quantity) => {
    quantity = +quantity;
    const index = cartItems
      .map((cartItem) => cartItem.menuItem.id)
      .indexOf(menuItem.id);

    if (index === -1) {
      console.log(`Error: item ${menuItem.name} does not exist in cart.`);
    } else if (quantity > cartItems[index].quantity) {
      console.log(
        `Error: cannot remove x${quantity} of ${menuItem.name} because there is only x${cartItems[index].quantity} in the cart.`
      );
    } else if (quantity === cartItems[index].quantity) {
      console.log(`Removing item "${menuItem.name}" from cart.`);
      cartItems.splice(index, 1);
      setCartItems([...cartItems]);
    } else {
      cartItems[index].quantity -= quantity;
      console.log(
        `Removing x${quantity} "${menuItem.name}." Total quantity: ${cartItems[index].quantity}`
      );
      setCartItems([...cartItems]);
    }
  };

  const addToCartHandler = (menuItem, quantity) => {
    quantity = +quantity;
    const index = cartItems
      .map((cartItem) => cartItem.menuItem.id)
      .indexOf(menuItem.id);

    if (index === -1) {
      console.log(`Adding new item(s): ${menuItem.name} x${quantity}`);
      setCartItems([...cartItems, { menuItem: menuItem, quantity: quantity }]);
    } else {
      cartItems[index].quantity += quantity;
      console.log(
        `Adding x${quantity} more "${menuItem.name}." Total quantity: ${cartItems[index].quantity}`
      );
      setCartItems([...cartItems]);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems: cartItems,
        onAddToCart: addToCartHandler,
        onRemoveFromCart: removeFromCartHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
