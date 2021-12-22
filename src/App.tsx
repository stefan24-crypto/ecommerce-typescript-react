import React, { Fragment, useEffect, useState } from "react";
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
import { UIActions } from "./store/ui-slice";

// Have a hero seciton on home page with some GSAP animations
//Have a personalized message on cart screen saying something like GOOD EVENING JOHN DOE.
// Add footer with contact information
const App: React.FC = () => {
  const cart = useAppSelector((state) => state.data.cart);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useAppDispatch();
  const fetchProductData = async () => {
    dispatch(UIActions.setIsLoading(true));
    const { data } = await commerce.products.list();
    dispatch(dataActions.setProducts(data));
    dispatch(UIActions.setIsLoading(false));
  };
  const fetchCart = async () => {
    dispatch(dataActions.setCart(await commerce.cart.retrieve()));
  };

  const handleCaptureCheckout = async (checkoutTokenID: any, newOrder: any) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenID,
        newOrder
      );
      dispatch(dataActions.setOrder(incomingOrder));
    } catch (err: any) {
      setErrorMessage(err.data.error.message);
    }
  };

  useEffect(() => {
    fetchProductData();
    fetchCart();
  }, []);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route
          path="/checkout"
          element={
            <CheckoutPage
              errorMessage={errorMessage}
              handleCaptureCheckout={handleCaptureCheckout}
            />
          }
        />
        <Route path="/:price" element={<PriceRangePage />} />
        <Route path="/category/:category" element={<CategoryPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
