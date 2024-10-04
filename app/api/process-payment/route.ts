import { NextRequest, NextResponse } from 'next/server';
// import Stripe from 'stripe';

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
//   apiVersion: '2024-09-30.acacia',
// });

// export async function POST(req: NextRequest) {
//   const { paymentMethodId, amount } = await req.json();

//   try {
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount,
//       currency: 'usd',
//       payment_method: paymentMethodId,
//       confirm: true,
//     });

//     return NextResponse.json({ clientSecret: paymentIntent.client_secret });
//   } catch (err) {
//     const error = err as Error;
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }

export async function POST(req: NextRequest) {
    const { paymentMethodId, amount } = await req.json();
    return NextResponse.json({ paymentMethodId, amount });
}