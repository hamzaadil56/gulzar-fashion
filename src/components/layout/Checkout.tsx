"use client";
import getStripePromise from "@/lib/stripe";
import { useCartStore } from "@/state/cartState";
import Button from "../shared/Button";

const StripeCheckOutButton = () => {
  const { cartItems } = useCartStore();

  const handleCheckout = async () => {
    if (!cartItems.length) {
      console.log("Add items to cart!");
      return;
    }
    try {
      const stripe = await getStripePromise();
      const response = await fetch("/api/stripe-session/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        cache: "no-cache",
        body: JSON.stringify(cartItems),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      if (data.session) {
        stripe?.redirectToCheckout({ sessionId: data.session.id });
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <div className="py-5">
      <Button onClick={handleCheckout}>Check out</Button>
    </div>
  );
};

export default StripeCheckOutButton;