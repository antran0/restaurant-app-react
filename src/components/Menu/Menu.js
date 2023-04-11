import React from "react";
import styles from "./Menu.module.css";
import MenuItem from "./MenuItem";

const DUMMY_MENU_ITEMS = [
  {
    id: Math.random(),
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: Math.random(),
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: Math.random(),
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: Math.random(),
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const Menu = (props) => {
  const menuItems = DUMMY_MENU_ITEMS.map((item) => {
    return (
      <React.Fragment key={item.id}>
        <MenuItem
          name={item.name}
          description={item.description}
          price={item.price}
        />
        <hr />
      </React.Fragment>
    );
  });
  return <ul className={`${styles["menu"]}`}>{menuItems}</ul>;
};

export default Menu;
