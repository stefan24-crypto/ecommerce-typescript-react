import React from "react";
import classes from "./AddToCart.module.css";
import added from "../../images/added.gif";

const AddToCart: React.FC = () => {
  return (
    <section className={classes.backdrop}>
      <main className={classes.main}>
        <img src={added} className={classes.img} alt="animation" />
        <h1>Your item has been added</h1>
      </main>
    </section>
  );
};

export default AddToCart;
