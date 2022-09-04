export default function handler(req: any, res: any) {
  if(req.method === 'GET') {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send({
        publishableKey: process.env.STRIPE_PUBLISHABLE_KEY_TEST
    });
  } else {
    res.setHeader('Content-Type', 'application/json');
    res.status(405).send({
        message: 'Method not allowed'
    });
  }
}