import React from "react";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";

const Navbar: React.FC = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.logo}>
        <h1>Ecommerce</h1>
      </div>
      <div className={classes.links}>
        <Link to="/" className={classes.link}>
          <HomeIcon />
        </Link>
        <Link to="/cart" className={classes.link}>
          <ShoppingCartIcon />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
