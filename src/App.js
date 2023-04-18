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

  return (
    <React.Fragment>
      <MainHeader cartItems={cartItems} setCartItems={setCartItems} />
      <MainContent />
    </React.Fragment>
  );
}

export default App;
