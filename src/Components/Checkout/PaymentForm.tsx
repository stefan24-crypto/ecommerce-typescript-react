import React from "react";

interface PaymentFormProps {
  shippingData: { [key: string]: any };
}

const PaymentForm: React.FC<PaymentFormProps> = ({ shippingData }) => {
  return <div>PaymentForm</div>;
};

export default PaymentForm;
