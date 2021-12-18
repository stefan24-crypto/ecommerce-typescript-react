import React from "react";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { IconButton } from "@mui/material";
import { Tooltip } from "@mui/material";

//Add logic for selecting price range either here or go to a next page and let the user select.

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
        <Tooltip title="Price Range" className={classes.toolTip}>
          <IconButton className={classes.icon}>
            <LocalOfferIcon />
          </IconButton>
        </Tooltip>
        <Link to="/cart" className={classes.link}>
          <ShoppingCartIcon />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
