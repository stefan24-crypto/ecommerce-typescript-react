import React, { Fragment } from "react";
import classes from "./Cart.module.css";
import { useAppSelector } from "../../store/hooks";
import CartCard from "./CartCard";
import { Link, useNavigate } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Loader from "react-loader-spinner";

const Cart: React.FC = () => {
  const cart = useAppSelector((state) => state.data.cart);
  const isLoading = useAppSelector((state) => state.ui.isLoading);
  const navigate = useNavigate();
  if (!cart.line_items) return <h1>No Items</h1>;
  if (cart.total_items === 0)
    return (
      <div className={classes.no_items}>
        <h1>There are no items in your cart!</h1>
      </div>
    );
  return (
    <section>
      <header className={classes.header}>
        <h1>Shopping Cart</h1>
      </header>
      {isLoading ? (
        <div className={classes.loader}>
          <Loader type="ThreeDots" color="black" />
        </div>
      ) : (
        <Fragment>
          <main className={classes.main}>
            <div className={classes.product_list}>
              {cart.line_items.map((each: any) => {
                return (
                  <CartCard
                    key={each.id}
                    id={each.id}
                    name={each.name}
                    image={String(each.image.url)}
                    total_price={each.line_total.formatted}
                    quantity={each.quantity}
                  />
                );
              })}
            </div>
            <footer className={classes.footer}>
              <div className={classes.back}>
                <ArrowBackIosIcon sx={{ fontSize: "0.8rem" }} />
                <Link className={classes.link} to="/">
                  Continue Shopping
                </Link>
              </div>
              <div className={classes.total}>
                <h1>Total</h1>
                <p>{cart.subtotal.formatted_with_symbol}</p>
              </div>
            </footer>
          </main>
          <footer className={classes.checkout}>
            <button
              className={classes.btn}
              onClick={() => {
                navigate("/checkout");
              }}
            >
              Continue to checkout
            </button>
          </footer>
        </Fragment>
      )}
    </section>
  );
};

export default Cart;
