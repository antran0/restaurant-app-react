import React from "react";
import MainHeader from "./components/MainHeader/MainHeader";
import MainContent from "./components/MainContent/MainContent";

const DUMMY_CART = [
  {
    menuItem: {
      id: Math.random(),
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
    },
    quantity: 4,
  },
  {
    menuItem: {
      id: Math.random(),
      name: "Schnitzel",
      description: "A german specialty!",
      price: 16.5,
    },
    quantity: 3,
  },
  {
    menuItem: {
      id: Math.random(),
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 12.99,
    },
    quantity: 2,
  },
  {
    menuItem: {
      id: Math.random(),
      name: "Green Bowl",
      description: "Healthy...and green...",
      price: 18.99,
    },
    quantity: 1,
  },
];

function App() {
  const [cartItems, setCartItems] = React.useState(DUMMY_CART);

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
    <React.Fragment>
      <MainHeader
        cartItems={cartItems}
        onRemoveFromCart={removeFromCartHandler}
        onAddToCart={addToCartHandler}
      />
      <MainContent onAddToCart={addToCartHandler} />
    </React.Fragment>
  );
}

export default App;
