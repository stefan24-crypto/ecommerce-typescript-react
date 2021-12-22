import React, { Fragment } from "react";
import classes from "./FeaturedProducts.module.css";
import ProductCard from "../Product/ProductCard";
import { useAppSelector } from "../../store/hooks";
import Loader from "react-loader-spinner";

const FeaturedProducts: React.FC = () => {
  const products = useAppSelector((state) => state.data.products);
  const isLoading = useAppSelector((state) => state.ui.isLoading);

  return (
    <Fragment>
      {isLoading ? (
        <div className={classes.loader}>
          <Loader type="ThreeDots" color="black" />
        </div>
      ) : (
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
      )}
    </Fragment>
  );
};

export default FeaturedProducts;
