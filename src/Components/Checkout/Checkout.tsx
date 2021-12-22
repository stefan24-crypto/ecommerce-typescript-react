import React, { useEffect, useState } from "react";
import classes from "./Checkout.module.css";
import { Paper, Stepper, Step, StepLabel } from "@mui/material";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import { commerce } from "../../lib/commerce";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { UIActions } from "../../store/ui-slice";
import Loader from "react-loader-spinner";

const steps = ["Shipping address", "Payment Details"];

const Checkout: React.FC = () => {
  const cart = useAppSelector((state) => state.data.cart);
  const isLoading = useAppSelector((state) => state.ui.isLoading);
  const [activeStep, setActiveStep] = useState<number>(0);
  const [checkoutToken, setCheckoutToken] = useState<null | any>(null);
  const dispatch = useAppDispatch();
  const [shippingData, setShippingData] = useState({});

  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {
          type: "cart",
        });
        setCheckoutToken(token);
      } catch (error) {
        console.error(error);
      }
    };
    dispatch(UIActions.setIsLoading(true));
    generateToken();
    dispatch(UIActions.setIsLoading(false));
  }, [cart]);

  const nextStep = () => {
    setActiveStep((prev) => prev + 1);
  };

  const backStep = () => {
    setActiveStep((prev) => prev - 1);
  };

  const next = (data: { [key: string]: any }) => {
    setShippingData(data);
    nextStep();
    console.log(data);
  };

  const Form = () => {
    return activeStep === 0 ? (
      <AddressForm checkoutToken={checkoutToken} next={next} />
    ) : (
      <PaymentForm shippingData={shippingData} />
    );
  };

  const Confirmation = () => {
    return <h1>Confirmation</h1>;
  };

  return (
    <>
      {isLoading ? (
        <Loader type="ThreeDots" color="black" />
      ) : (
        <section>
          <Paper className={classes.paper}>
            <div className={classes.title}>
              <h1>Checkout</h1>
            </div>
            <Stepper activeStep={activeStep}>
              {steps.map((step) => (
                <Step key={step}>
                  <StepLabel>{step}</StepLabel>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length ? (
              <Confirmation />
            ) : (
              checkoutToken && <Form />
            )}
          </Paper>
        </section>
      )}
    </>
  );
};

export default Checkout;
