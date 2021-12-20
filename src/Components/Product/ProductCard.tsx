import React from "react";
import classes from "./ProductCard.module.css";
import Button from "../UI/Button";
import parse from "html-react-parser";

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
}) => {
  return (
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
        <button className={classes.btn}>Add to Cart</button>
      </footer>
    </section>
  );
};

export default ProductCard;
