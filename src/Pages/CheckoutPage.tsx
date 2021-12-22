import React from "react";
import Checkout from "../Components/Checkout/Checkout";

interface CheckoutPageProps {
  errorMessage: string;
  handleCaptureCheckout: (checkoutTokenID: any, newOrder: any) => void;
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({
  errorMessage,
  handleCaptureCheckout,
}) => {
  return (
    <Checkout
      errorMessage={errorMessage}
      onCaptureCheckout={handleCaptureCheckout}
    />
  );
};

export default CheckoutPage;
