import React from "react";
import { useAppSelector } from "../../store/hooks";
import { Fragment } from "react";
import ProductCard from "../Product/ProductCard";
import classes from "./PriceRange.module.css";

interface PriceRangeProps {
  range: string;
}

const PriceRange: React.FC<PriceRangeProps> = ({ range }) => {
  const arrayOfPrices = range.split("-");
  const products = useAppSelector((state) => state.data.products);
  const lower = +arrayOfPrices[0].replace("$", "");
  const higher = +arrayOfPrices[1].replace("$", "");
  const inTheRange = products.filter(
    (each) => each.price.raw >= lower && each.price.raw <= higher
  );
  console.log(inTheRange);

  if (inTheRange.length === 0)
    return (
      <div className={classes.none_found}>
        <h1>No Products in This Range!</h1>
      </div>
    );

  return (
    <Fragment>
      <div className={classes.title}>
        <h1>Price Range page for {range}</h1>
      </div>
      <section className={classes.products}>
        {inTheRange.map((each) => (
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
    </Fragment>
  );
};

export default PriceRange;
