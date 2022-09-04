import Stripe from "stripe";

export default async function createPaymentIntentHandler(req: any, res: any){
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? '', { apiVersion: '2020-08-27' });
    if(req.method === 'POST') {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: +`${process.env.DATABASE_CLASS_PRICE ?? 200}`,
            currency: 'usd',
            payment_method_types: ['card'],
        });
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send({clientSecret: paymentIntent.client_secret});
    }
}