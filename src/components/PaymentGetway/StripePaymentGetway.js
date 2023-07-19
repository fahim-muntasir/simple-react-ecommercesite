import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripeTestPromise = loadStripe(
  "pk_test_51LIHtiHOQKfXpGRq0gmaoocCQpMJcy3aoP42i4g9YgXhWB6v0dXB1YKiopEwADY4LiCbyzSV9oMMSir8umNgSOmp00oqBbj8qh"
);

export default function StripePaymentGetway({ totalAmount }) {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm totalAmount={totalAmount} />
    </Elements>
  );
}
