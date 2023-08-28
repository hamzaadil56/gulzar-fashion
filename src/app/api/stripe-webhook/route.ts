import { NextRequest, NextResponse } from "next/server";
import getStripePromise from "@/lib/stripe";

export async function POST(request: NextRequest) {
  const event = await request.json();
  if (event.type === "payment_intent.succeeded") {
    const paymentIntent = event.data.object;
    console.log(paymentIntent);
    console.log("PaymentIntent was successful!");
  }
  return NextResponse.json({
    message: "PaymentIntent was successful!",
    received: true,
  });
}
