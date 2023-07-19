import CheckoutForm from "./CheckoutForm/CheckoutForm";
import OrderSummery from "./OrderSummery/OrderSummery";

export default function Checkout() {
  return (
    <div className="lg:flex gap-5 ">
      <div className=" w-full lg:w-[70%] mb-10">
        <CheckoutForm />
      </div>
      <div className="lg:w-[30%]">
        <OrderSummery />
      </div>
    </div>
  );
}
