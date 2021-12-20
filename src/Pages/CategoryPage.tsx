import React from "react";
import { useParams } from "react-router";
import Category from "../Components/Category/Category";

const CategoryPage: React.FC = () => {
  const params = useParams();
  return <Category category={params.category!} />;
};

export default CategoryPage;
