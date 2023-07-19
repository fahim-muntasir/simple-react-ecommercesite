import { useEffect, useState } from "react";
import Button from "../../Button/Button";
import Input from "../../InputBox/InputBox";
import StripePaymentGetway from "../../PaymentGetway/StripePaymentGetway";

export default function OrderSummery() {
  const [isCashOneDelivery, setCashOneDelivery] = useState(false);
  const [isPayByCard, setPayByCard] = useState(false);
  const [allCardItems, setAllcardItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(null);
  const deliveryCharge = 50;

  useEffect(() => {
    setAllcardItems(JSON.parse(localStorage.getItem("cardItems")) || []);
    const getAllCardProducts = JSON.parse(localStorage.getItem("cardItems"));
    let totalPrice = 0;
    getAllCardProducts.map((p) => (totalPrice += p.price * p.qt));
    setTotalAmount(totalPrice + deliveryCharge);
  }, []);

  const paymentHandlear = (e) => {
    if (e.target.name === "cashOneDelivery") {
      setCashOneDelivery(!isCashOneDelivery);
      setPayByCard(false);
    } else if (e.target.name === "payByCard") {
      setPayByCard(!isPayByCard);
      setCashOneDelivery(false);
    }
  };

  return (
    <div className="border p-4 w-full">
      <div className="border-b mb-5 pb-2">
        <h2 className="text-xl font-light">Your Order</h2>
      </div>
      <div className="w-full mb-5">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left text-zinc-500 text-xl font-light ">
                Product
              </th>
            </tr>
          </thead>
          <tbody>
            {allCardItems.map((p) => (
              <tr key={p.productid + p.name}>
                <td className="py-2 text-zinc-600 font-light text-sm ">
                  {p.name} X {p.qt}
                </td>
                <td className="text-right py-2 text-zinc-600 ">
                  ${p.price * p.qt}
                </td>
              </tr>
            ))}
            <tr>
              <td className="py-2 text-zinc-600 font-light text-sm ">
                Delivery Charge
              </td>
              <td className="text-right py-2 text-zinc-600 ">
                ${deliveryCharge}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="border-y py-4 mb-5 flex justify-between">
        <span className="text-xl font-light">Total</span>
        <span>${totalAmount}</span>
      </div>
      <div className="mb-5">
        <Input
          type="checkbox"
          name="cashOneDelivery"
          onChange={paymentHandlear}
          className="mr-2"
          checked={isCashOneDelivery}
        />
        <span className=" text-zinc-500 font-light">Cash on delivery</span>
      </div>
      <div className="mb-5">
        <Input
          type="checkbox"
          name="payByCard"
          onChange={paymentHandlear}
          className="mr-2"
          checked={isPayByCard}
        />
        <span className=" text-zinc-500 font-light">Payment by Card</span>
      </div>

      {isPayByCard && <StripePaymentGetway totalAmount={totalAmount} />}
      {isCashOneDelivery && (
        <Button className=" mt-5 bg-green-500 w-full block py-3 text-center text-zinc-50 font-light hover:bg-green-400 ">
          Place an Order ${totalAmount}
        </Button>
      )}
    </div>
  );
}
