import React, { Fragment, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import { Routes, Route } from "react-router";
import HomePage from "./Pages/HomePage";
import CartPage from "./Pages/CartPage";
import CheckoutPage from "./Pages/CheckoutPage";
import PriceRangePage from "./Pages/PriceRangePage";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { commerce } from "./lib/commerce";
import { dataActions } from "./store/data-slice";
import CategoryPage from "./Pages/CategoryPage";

//In commerce js under extra fields. Add a category field so that the user can easil select a different catery.
// Also allow the user to select a specific price range and fileter the list of products
// Have a hero seciton on home page with some GSAP animations
//Add sticky navbar
// Add footer with contact information

const App: React.FC = () => {
  const products = useAppSelector((state) => state.data.products);
  const dispatch = useAppDispatch();
  const fetchProductData = async () => {
    const { data } = await commerce.products.list();
    console.log(data);
    dispatch(dataActions.setProducts(data));
  };
  useEffect(() => {
    fetchProductData();
  }, []);
  console.log(products);
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/:price" element={<PriceRangePage />} />
        <Route path="/category/:category" element={<CategoryPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
