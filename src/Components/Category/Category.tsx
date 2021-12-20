import React from "react";
import classes from "./Category.module.css";
import { useAppSelector } from "../../store/hooks";
import ProductCard from "../Product/ProductCard";

interface CategoryProps {
  category: string;
}

const Category: React.FC<CategoryProps> = ({ category }) => {
  const products = useAppSelector((state) => state.data.products);
  if (!products || products.length === 0) return <h1>No Products</h1>;
  console.log(products[0].categories[0].name);
  console.log(category);
  const theseProducts = products.filter(
    (each) => each.categories[0]?.name === category
  );
  console.log(theseProducts);
  if (theseProducts.length === 0)
    return (
      <div className={classes.none_found}>
        <h1>No Products in this Category!</h1>
      </div>
    );
  return (
    <section>
      <header className={classes.header}>
        <h1>Results for "{category}"</h1>
      </header>
      <main className={classes.products}>
        {theseProducts.map((each) => (
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
      </main>
    </section>
  );
};

export default Category;
