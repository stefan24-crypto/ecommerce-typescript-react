import React from "react";
import classes from "./FeaturedCategories.module.css";
import Button from "../UI/Button";
import { useNavigate } from "react-router";

const FeaturedCategories = () => {
  const navigate = useNavigate();
  const goToPage = (e: React.MouseEvent<HTMLElement>) => {
    const el: HTMLElement =
      e.currentTarget.parentElement!.getElementsByTagName("h1")[0];
    navigate(`/category/${el.textContent}`);
  };
  return (
    <div className={classes.products}>
      <div className={classes.tech}>
        <div className={classes.overlay}>
          <div className={classes.content}>
            <h1>Technology</h1>
            <Button onClick={goToPage}>Shop</Button>
          </div>
        </div>
      </div>
      <div className={classes.clothes}>
        <div className={classes.overlay}>
          <div className={classes.content}>
            <h1>Clothes</h1>
            <Button onClick={goToPage}>Shop</Button>
          </div>
        </div>
      </div>
      <div className={classes.cooking}>
        <div className={classes.overlay}>
          <div className={classes.content}>
            <h1>Cooking</h1>
            <Button onClick={goToPage}>Shop</Button>
          </div>
        </div>
      </div>
      <div className={classes.books}>
        <div className={classes.overlay}>
          <div className={classes.content}>
            <h1>Books</h1>
            <Button onClick={goToPage}>Shop</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategories;
