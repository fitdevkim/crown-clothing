import React from 'react';
import StripeCheckOut from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_3orLCLYg7tF8oPf0xpKESfS400idDQoYDG';

  const onToken = token => {
    alert('Payment Successful');
    console.log(token);
  };

  return (
    <StripeCheckOut
      label="Pay Now"
      name="Crown Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
      currency="SGD"
    />
  );
};

export default StripeCheckoutButton;
