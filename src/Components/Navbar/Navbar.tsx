import React, { useState } from "react";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { Badge, IconButton } from "@mui/material";
import { Tooltip, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router";
import { useAppSelector } from "../../store/hooks";

const Navbar: React.FC = () => {
  const cart = useAppSelector((state) => state.data.cart);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>();
  const navigate = useNavigate();
  const open = Boolean(anchorEl);
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const goToPrice = (e: React.MouseEvent<HTMLElement>) => {
    navigate(`/${e.currentTarget.textContent}`);
  };
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
          <IconButton sx={{ color: "rgb(27, 27, 27)" }} onClick={handleClick}>
            <LocalOfferIcon />
          </IconButton>
        </Tooltip>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem onClick={goToPrice}>$25 - $50</MenuItem>
          <MenuItem onClick={goToPrice}>$50 - $100</MenuItem>
          <MenuItem onClick={goToPrice}>$100 - $150</MenuItem>
          <MenuItem onClick={goToPrice}>$150 - $250</MenuItem>
          <MenuItem onClick={goToPrice}>$250 - $500</MenuItem>
        </Menu>
        <Link to="/cart" className={classes.link}>
          <Badge
            badgeContent={cart.total_items}
            color="primary"
            sx={{ fontFamily: "Poppins" }}
          >
            <ShoppingCartIcon />
          </Badge>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
