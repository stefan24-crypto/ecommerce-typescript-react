import React from "react";
import classes from "./FeaturedProducts.module.css";

//Categories for home page: Technology, Clothes, Cooking, Books
const FeaturedProducts = () => {
  return (
    <div className={classes.products}>
      <div className={classes.tech}></div>
      <div className={classes.clothes}></div>
      <div className={classes.cooking}></div>
      <div className={classes.books}></div>
    </div>
  );
};

export default FeaturedProducts;
