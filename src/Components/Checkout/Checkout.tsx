import React, { useEffect, useState } from "react";
import classes from "./Checkout.module.css";
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Divider,
  CircularProgress,
} from "@mui/material";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import { commerce } from "../../lib/commerce";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { UIActions } from "../../store/ui-slice";
import Loader from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { dataActions } from "../../store/data-slice";

interface CheckoutProps {
  errorMessage: string;
  onCaptureCheckout: (checkoutTokenID: any, newOrder: any) => void;
}

const steps = ["Shipping address", "Payment Details"];

const Checkout: React.FC<CheckoutProps> = ({
  onCaptureCheckout,
  errorMessage,
}) => {
  const cart = useAppSelector((state) => state.data.cart);
  const isLoading = useAppSelector((state) => state.ui.isLoading);
  const [activeStep, setActiveStep] = useState<number>(0);
  const [checkoutToken, setCheckoutToken] = useState<null | any>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [shippingData, setShippingData] = useState({});
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {
          type: "cart",
        });
        setCheckoutToken(token);
      } catch (error) {
        navigate("/");
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
  const timeout = () => {
    setTimeout(() => {
      setIsFinished(true);
    }, 3000);
  };

  const Form = () => {
    return activeStep === 0 ? (
      <AddressForm checkoutToken={checkoutToken} next={next} />
    ) : (
      <PaymentForm
        shippingData={shippingData}
        checkoutToken={checkoutToken}
        backStep={backStep}
        onCaptureCheckout={onCaptureCheckout}
        nextStep={nextStep}
        timeout={timeout}
      />
    );
  };
  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();
    dispatch(dataActions.setCart(newCart));
  };

  const order = useAppSelector((state) => state.data.order);
  let Confirmation = () =>
    order.customer ? (
      <>
        <div>
          <h1>
            Thank you for your purchase, {order.customer.firstname}{" "}
            {order.customer.lastname}
          </h1>
          <Divider />
          <p>Order ref: {order.customer_reference}</p>
          <br />
          <button
            className={classes.btn}
            onClick={() => {
              navigate("/");
              refreshCart();
            }}
          >
            Back to home
          </button>
        </div>
      </>
    ) : isFinished ? (
      <>
        <div>
          <h1>Thank you for your purchase!</h1>
          <br />
          <button
            className={classes.btn}
            onClick={() => {
              navigate("/");
              refreshCart();
            }}
          >
            Back to home
          </button>
        </div>
      </>
    ) : (
      <div className={classes.spinner}>
        <CircularProgress />
      </div>
    );

  if (errorMessage) {
    <>
      <h1>Error: {errorMessage}</h1>
      <br />
      <button
        className={classes.btn}
        onClick={() => {
          navigate("/");
        }}
      >
        Back to home
      </button>
    </>;
  }
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
