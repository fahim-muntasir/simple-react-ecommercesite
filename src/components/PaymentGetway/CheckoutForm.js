import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useState } from "react";

export default function CheckoutForm({ totalAmount }) {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post("http://localhost:4000/payment", {
          amount: totalAmount,
          id,
        });

        if (response.data.success) {
          console.log("Successful payment");
          console.log(response);
          setSuccess(true); // TODO
          setLoading(false);
        }
      } catch (error) {
        console.log("Error", error);
        setLoading(false);
      }
    } else {
      console.log(error.message);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset className="FormGroup">
        <div className="FormRow">
          <CardElement />
        </div>
      </fieldset>
      {!loading ? (
        <button className=" mt-5 bg-green-500 w-full block py-3 text-center text-zinc-50 font-light hover:bg-green-400 ">
          Pay ${totalAmount}
        </button>
      ) : (
        <button
          disabled
          className=" mt-5 bg-green-400 w-full block py-3 text-center text-zinc-50 font-light cursor-wait "
        >
          Pay ${totalAmount}
        </button>
      )}
    </form>
  );
}
