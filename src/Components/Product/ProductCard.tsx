import React, { useRef, Fragment, useState } from "react";
import classes from "./ProductCard.module.css";
import Button from "../UI/Button";
import parse from "html-react-parser";
import { commerce } from "../../lib/commerce";
import { useAppDispatch } from "../../store/hooks";
import { dataActions } from "../../store/data-slice";
import AddToCart from "../Animation/AddToCart";

interface ProductCardProps {
  id?: string;
  image?: string;
  name?: string;
  price?: number;
  description: string;
  formattedPrice?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  name,
  price,
  description,
  formattedPrice,
  id,
}) => {
  const [showAnimation, setShowAnimation] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const addToCartHandler = async () => {
    setShowAnimation(true);
    const item = await commerce.cart.add(id!, 1);
    dispatch(dataActions.setCart(item.cart));
    setTimeout(() => setShowAnimation(false), 1500);
  };

  //Try adding intersection observer

  return (
    <Fragment>
      {showAnimation ? <AddToCart /> : ""}
      <section className={classes.card}>
        <header className={classes.header}>
          <img src={image} className={classes.img} alt="product_image" />
        </header>
        <main className={classes.main}>
          <p className={classes.name}>{name}</p>
          <div className={classes.content}>{parse(description)}</div>
          <p className={classes.price}>{formattedPrice}</p>
        </main>
        <footer className={classes.footer}>
          <button className={classes.btn} onClick={addToCartHandler}>
            Add to Cart
          </button>
        </footer>
      </section>
    </Fragment>
  );
};

export default ProductCard;
