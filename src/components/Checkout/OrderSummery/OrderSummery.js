import React from "react";
import Button from "../../Button/Button";
import Input from "../../InputBox/InputBox";

export default function OrderSummery() {
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
            <tr>
              <td className="py-2 text-zinc-600 font-light text-sm ">
                Cup x 5
              </td>
              <td className="text-right py-2 text-zinc-600 ">1001 TK.</td>
            </tr>
            <tr>
              <td className="py-2 text-zinc-600 font-light text-sm ">
                Coffe x 7
              </td>
              <td className="text-right py-2 text-zinc-600">1001 TK.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="border-y py-4 mb-5 flex justify-between">
        <span className="text-xl font-light">Total</span>
        <span>500</span>
      </div>
      <div className="mb-5">
        <Input type="checkbox" className="mr-2" />
        <span className=" text-zinc-500 font-light">Cash on delivery</span>
      </div>
      <Button className=" bg-green-500 w-full block py-3 text-center text-zinc-50 font-light hover:bg-green-400 ">
        Place an Order
      </Button>
    </div>
  );
}
