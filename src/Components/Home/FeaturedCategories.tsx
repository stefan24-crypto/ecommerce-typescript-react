import React from "react";
import classes from "./FeaturedCategories.module.css";
import Button from "../UI/Button";

const FeaturedCategories = () => {
  return (
    <div className={classes.products}>
      <div className={classes.tech}>
        <div className={classes.overlay}>
          <div className={classes.content}>
            <h1>Technology</h1>
            <Button>Shop</Button>
          </div>
        </div>
      </div>
      <div className={classes.clothes}>
        <div className={classes.overlay}>
          <div className={classes.content}>
            <h1>Clothes</h1>
            <Button>Shop</Button>
          </div>
        </div>
      </div>
      <div className={classes.cooking}>
        <div className={classes.overlay}>
          <div className={classes.content}>
            <h1>Cooking</h1>
            <Button>Shop</Button>
          </div>
        </div>
      </div>
      <div className={classes.books}>
        <div className={classes.overlay}>
          <div className={classes.content}>
            <h1>Books</h1>
            <Button>Shop</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategories;
