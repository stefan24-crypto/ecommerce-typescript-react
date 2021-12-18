import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import { Routes, Route } from "react-router";
import HomePage from "./Pages/HomePage";
import CartPage from "./Pages/CartPage";
import CheckoutPage from "./Pages/CheckoutPage";
import ProductDetailPage from "./Pages/ProductDetailPage";

//In commerce js under extra fields. Add a category field so that the user can easil select a different catery.
// Also allow the user to select a specific price range and fileter the list of products
// Have a hero seciton on home page with some GSAP animations
//After have some featured products
//Add sticky navbar
// Add footer with contact information

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/:productID" element={<ProductDetailPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
