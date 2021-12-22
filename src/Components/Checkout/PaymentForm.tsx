import React from "react";
import {
  Elements,
  CardElement,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Review from "./Review";
import { Divider } from "@mui/material";
import classes from "./PaymentForm.module.css";

interface PaymentFormProps {
  shippingData: { [key: string]: any };
  checkoutToken: any;
  backStep: () => void;
  onCaptureCheckout: (checkoutTokenID: any, newOrder: any) => void;
  nextStep: () => void;
  timeout: () => void;
}

const stripePromise = loadStripe(
  process.env.REACT_APP_STRIPE_PUBLIC_KEY!.toString()
);

const PaymentForm: React.FC<PaymentFormProps> = ({
  shippingData,
  checkoutToken,
  backStep,
  onCaptureCheckout,
  nextStep,
  timeout,
}) => {
  const handleSubmit = async (
    e: React.FormEvent,
    elements: any,
    stripe: any
  ) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });
    if (error) {
      console.log(error);
    } else {
      const orderData = {
        line_items: checkoutToken.live.line_items,
        customer: {
          firstname: shippingData.firstName,
          lastname: shippingData.lastName,
          email: shippingData.email,
        },
        shipping: {
          name: "Primary",
          street: shippingData.address1,
          town_city: shippingData.city,
          county_state: shippingData.shippingSubdivision,
          postal_zip_code: shippingData.zip,
          country: shippingData.shippingCountry,
        },
        fulfillment: { shipping_method: shippingData.shippingOption },
        payment: {
          gateway: "stripe",
          stripe: {
            payment_method_id: paymentMethod.id,
          },
        },
      };
      onCaptureCheckout(checkoutToken.id, orderData);
      timeout();
      nextStep();
    }
  };
  return (
    <div>
      <Review checkoutToken={checkoutToken} />
      <Divider />
      <h1>Payment Method</h1>
      <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {({ elements, stripe }) => (
            <form
              onSubmit={(e: React.FormEvent) =>
                handleSubmit(e, elements, stripe)
              }
            >
              <CardElement className={classes.card_info} />
              <div className={classes.btns}>
                <button className={classes.btn} onClick={backStep}>
                  Back
                </button>
                <button
                  type="submit"
                  disabled={!stripe}
                  className={classes.btn}
                >
                  Pay {checkoutToken.live.subtotal.formatted_with_symbol}
                </button>
              </div>
            </form>
          )}
        </ElementsConsumer>
      </Elements>
    </div>
  );
};

export default PaymentForm;
