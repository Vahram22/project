import React from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_51RabNJRwg3lAwcbg9jgKzjcZidoBxzUQamV4nGHLzbOhXDeSRiwr6KzLYeqnlyLbLDv9hdEEScppne6vj6s0Eq2a00SLFdCXNA");

export default function Product({ product }) {

  const handleBuy = async () => {
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        { price: product.price_id, quantity: 1 }
      ],
      mode: "payment",
      successUrl: window.location.origin + "/success",
      cancelUrl: window.location.origin + "/cancel",
    });
    if (error) {
      console.error(error);
      alert("Վճարման սխալ տեղի ունեցավ։");
    }
  };

  return (
    <div style={{ position:"relative",left:"50px" }}>
      <button style={{width:"70px",height:"27px",borderRadius:"15px"}} onClick={handleBuy}>купить</button>
    </div>
  );
}



