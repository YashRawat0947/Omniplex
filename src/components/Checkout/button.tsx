import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
const REACT_APP_STRIPE_PUBLISHABLE_KEY="pk_test_51Q27F2RrwDJM8Z08WydZcAW8mZ7AabdoYCkfexMzD7wIhD445LcnAa7KpS0zjKjsSiwmHysHXOWxhCNRL5nG80Q000vY2xAgOO"

const stripePromise = loadStripe(REACT_APP_STRIPE_PUBLISHABLE_KEY as string);

const CheckoutButton: React.FC = () => {
  const handleCheckout = async () => {
    const stripe = await stripePromise;
    if (!stripe) return;

    await stripe.redirectToCheckout({
      lineItems: [{ price: 'price_1RnexRRrwDJM8Z08aGQv08kV', quantity: 1 }], // Replace with your Price ID from Stripe Dashboard
      mode: 'payment',
      successUrl: window.location.origin + '/success',
      cancelUrl: window.location.origin + '/cancel',
    });
  };

  return (
    <button onClick={handleCheckout}>
      Buy Pro Plan 
    </button>
  );
};

export default CheckoutButton;