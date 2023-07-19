export default function CardSubtotal({ totalAmount, checkoutHandlear }) {
  return (
    <div className="border p-4 w-full">
      <div className="border-b mb-5">
        <h2 className="text-xl font-light">Checkout Summary</h2>
      </div>
      <div>
        <select
          name="country"
          id=""
          className="border w-full py-2 px-1 text-zinc-600 outline-none mb-5"
        >
          <option value="">Bangladesh</option>
          <option value="">Pakintan</option>
          <option value="">USA</option>
        </select>
      </div>
      <div className="w-full mb-5">
        <table className="w-full">
          <tbody>
            <tr className="border-b">
              <td className="py-3 text-zinc-600 ">Subtotal</td>
              <td className="text-right py-3 text-zinc-600 ">
                {totalAmount} TK.
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-3 text-zinc-600 ">Shipping</td>
              <td className="text-right py-3 text-zinc-600">50 TK.</td>
            </tr>
            <tr className="border-b">
              <td className="py-3 text-zinc-600">Total</td>
              <td className="text-right py-3 text-zinc-600 ">
                {totalAmount + 50} TK.
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-3 text-zinc-600 ">Payable Total</td>
              <td className="text-right py-3 text-zinc-600 ">
                {totalAmount + 50} TK.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <button
        onClick={checkoutHandlear}
        className=" bg-green-500 hover:bg-green-400 py-2 px-5 text-zinc-50 "
      >
        Checkout Now
      </button>
    </div>
  );
}
