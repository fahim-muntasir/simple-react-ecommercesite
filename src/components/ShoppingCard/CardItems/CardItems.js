import React from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function CardItems() {
  return (
    <table className="w-full text-center ">
      <thead className="text-xl font-light border-b ">
        <tr>
          <th className="text-left font-light">Product</th>
          <th className="font-light">Price</th>
          <th className="font-light">Quantity</th>
          <th className="font-light">Subtotal</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b font-normal text-zinc-600">
          <td className="flex items-center ">
            <div className=" w-20 lg:w-28 my-5 mr-2 ">
              <img src="images/banner01.jpg" alt="" />
            </div>
            <span className="text-sm">NNN</span>
          </td>
          <td>
            <span>$101</span>
          </td>
          <td>
            <input
              type="number"
              min={1}
              className="border px-2 py-1 outline-none w-20"
            />
          </td>
          <td>
            <span>$101</span>
          </td>
          <td>
            <AiOutlineClose className="text-xl cursor-pointer" />
          </td>
        </tr>
        <tr className="border-b font-normal text-zinc-600">
          <td className="flex items-center ">
            <div className=" w-20 lg:w-28 my-5 mr-2 ">
              <img src="images/banner01.jpg" alt="" />
            </div>
            <span className="text-sm">NNN</span>
          </td>
          <td>
            <span>$101</span>
          </td>
          <td>
            <input
              type="number"
              min={1}
              className="border px-2 py-1 outline-none w-20 "
            />
          </td>
          <td>
            <span>$101</span>
          </td>
          <td>
            <AiOutlineClose className="text-xl cursor-pointer" />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
