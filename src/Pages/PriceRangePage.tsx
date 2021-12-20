import React from "react";
import { useParams } from "react-router";
import PriceRange from "../Components/PriceRange/PriceRange";

const PriceRangePage: React.FC = () => {
  const params = useParams();
  return (
    <section>
      <PriceRange range={params.price!} />
    </section>
  );
};

export default PriceRangePage;
