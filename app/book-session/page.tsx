"use client";

import React, { useState } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { CalApi } from "../types/cal";

// const stripePromise = loadStripe(
//   process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
// );

// const CheckoutForm = ({ onSuccess }: { onSuccess: () => void }) => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [error, setError] = useState<string | null>(null);
//   const [processing, setProcessing] = useState(false);

//   const handleSubmit = async (event: React.FormEvent) => {
//     event.preventDefault();

//     if (!stripe || !elements) {
//       return;
//     }

//     setProcessing(true);

//     const { error: stripeError, paymentMethod } =
//       await stripe.createPaymentMethod({
//         type: "card",
//         card: elements.getElement(CardElement)!,
//       });

//     if (stripeError) {
//       setError(stripeError.message || "An error occurred");
//       setProcessing(false);
//       return;
//     }

//     // Send paymentMethod.id to your server for payment processing
//     const response = await fetch("/api/process-payment", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ paymentMethodId: paymentMethod.id, amount: 2000 }), // $20 for 30 minutes
//     });

//     const result = await response.json();

//     if (result.error) {
//       setError(result.error);
//     } else {
//       onSuccess();
//     }

//     setProcessing(false);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-md mx-auto">
//       <div className="mb-4">
//         <label
//           htmlFor="card-element"
//           className="block text-sm font-medium text-gray-700"
//         >
//           Credit or debit card
//         </label>
//         <div className="mt-1">
//           <CardElement id="card-element" className="p-2 border rounded" />
//         </div>
//       </div>
//       {error && <div className="text-red-500 mb-4">{error}</div>}
//       <button
//         type="submit"
//         disabled={!stripe || processing}
//         className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 disabled:opacity-50"
//       >
//         {processing ? "Processing..." : "Pay $20 for 30 minutes"}
//       </button>
//       <p className="mt-2 text-sm text-gray-500">
//         Your card information is secured and not saved.
//       </p>
//     </form>
//   );
// };

const PaymentPage: React.FC = () => {
  const [paymentComplete, setPaymentComplete] = useState(true);

  React.useEffect(() => {
    if (paymentComplete) {
      (async function () {
        const cal: CalApi = await getCalApi();
        cal("ui", {
          styles: { branding: { brandColor: "#000000" } },
          hideEventTypeDetails: false,
          layout: "month_view",
        });
      })();
    }
  }, [paymentComplete]);

  return (
    <div className="container mx-auto px-4 py-8">
        <Cal
          calLink="techprosupport/triage"
          style={{ width: "100%", height: "600px", overflow: "scroll" }}
          config={{ layout: "month_view" }}
        />
    </div>
  );
};

export default PaymentPage;
