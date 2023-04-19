import React from "react";
import styles from "./MainContent.module.css";
import Card from "../UI/Card";
import Menu from "../Menu/Menu";

const MainContent = (props) => {
  return (
    <main className={`${styles["main-content"]}`}>
      <Card
        className={`${styles["main-content__description"]} ${styles["main-content__container"]}`}
      >
        <hgroup>
          <h2>Delicious Food Delivered To You</h2>
          <p>
            Choose your favorite meal from our broad selection of available
            meals and enjoy a delicious lunch or dinner at home.
          </p>
          <p>
            All our meals are cooked with high-quality ingredients, just-in-time
            and of course by experienced chefs!
          </p>
        </hgroup>
      </Card>
      <Card className={`${styles["main-content__container"]}`}>
        <Menu onAddToCart={props.onAddToCart} />
      </Card>
    </main>
  );
};

export default MainContent;
