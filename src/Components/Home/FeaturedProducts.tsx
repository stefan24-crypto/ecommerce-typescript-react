import React from "react";
import classes from "./FeaturedProducts.module.css";
import ProductCard from "../Product/ProductCard";
import { useAppSelector } from "../../store/hooks";

const FeaturedProducts: React.FC = () => {
  const products = useAppSelector((state) => state.data.products);
  return (
    <section className={classes.products}>
      {products.map((each) => (
        <ProductCard
          key={each.id}
          name={each.name}
          id={each.id}
          image={each.image.url}
          price={each.price.raw}
          formattedPrice={each.price.formatted_with_symbol}
          description={each.description}
        />
      ))}
    </section>
  );
};

export default FeaturedProducts;
