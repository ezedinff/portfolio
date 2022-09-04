import Stripe from 'stripe';
import { buffer } from 'micro';


export const config = {
    api: {
        bodyParser: false,
    },
}

export default async function webhookHandler(req: any, res: any) {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? '', { apiVersion: '2020-08-27' });
    if(req.method === 'POST') {
        const payload = await buffer(req);
        const sig = req.headers['stripe-signature'];
        const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
        let event;
        try {
            if (!sig || !webhookSecret) {
                return;
            }
            event = stripe.webhooks.constructEvent(payload, sig, webhookSecret);
        }
        catch(err: any) {
            console.log(`⚠️  Webhook signature verification failed. ${err.message}`);
            return res.status(400).send(`Webhook signature verification failed. ${err.message}`);
        }
        console.log(`🔔  Webhook received: ${event.type}`);
        switch (event.type) {
        }
    }
}
