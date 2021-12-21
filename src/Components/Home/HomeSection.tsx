import React from "react";
import classes from "./HomeSection.module.css";
import controller from "../../images/xbox-hero.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FeaturedCategories from "./FeaturedCategories";
import FeaturedProducts from "./FeaturedProducts";

const HomeSection = () => {
  return (
    <section className={classes.home}>
      <header className={classes.hero}>
        <div className={classes.content}>
          <h1>We have the newest technology at the best prices</h1>
          <p>
            Checkout all our products in various categories, offering you the
            best quality money can buy. All while offering you a great user
            experience shopping.
          </p>
        </div>
        <div className={classes.image}>
          <img src={controller} className={classes.img} alt="hero_img" />
        </div>
      </header>
      <div className={classes.animation}>
        <KeyboardArrowDownIcon
          className={classes.icon}
          sx={{ fontSize: "3rem" }}
        />
      </div>
      <main className={classes.main}>
        <FeaturedCategories />
        <FeaturedProducts />
      </main>
      <footer>
        {/* Add social media and email address here if possible */}
      </footer>
    </section>
  );
};

export default HomeSection;
