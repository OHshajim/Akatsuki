import { NextApiRequest } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2024-11-20.acacia",
});

export const Post = async (req: NextApiRequest) => {
  try {
    const { items, success_url, cancel_url } = req.body;

    // Create a session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: items.map(
        (item: { name: string; price: number; quantity: number }) => ({
          price_data: {
            currency: "usd",
            product_data: {
              name: item.name,
            },
            unit_amount: item.price * 100,
          },
          quantity: item.quantity || 1,
        })
      ),
      mode: "payment",
      success_url,
      cancel_url,
    });
    return new Response(JSON.stringify({ sessionId: session.id }), {
      status: 201,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error }), {
      status: 500,
    });
  }
};
