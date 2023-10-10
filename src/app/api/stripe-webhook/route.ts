import { NextRequest, NextResponse } from "next/server";
import getStripePromise from "@/lib/stripe";
import Stripe from "stripe";
import { NextApiResponse } from "next";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2023-08-16",
});
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET as string;

export async function POST(request: NextRequest, response: NextApiResponse) {
  try {
    const rawBody = await request.text();
    const sig = request.headers.get("stripe-signature") as string;
    const event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret);
    if ("checkout.session.completed" === event.type) {
      const session = event.data.object;
      console.log(session);
      return NextResponse.json({ session });
    } else {
      response.setHeader("Allow", "POST");
      // res.status(405).end("Method Not Allowed");
    }
  } catch (err: any) {
    console.log("Error in webhook----------", err);
    // res.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }
}
