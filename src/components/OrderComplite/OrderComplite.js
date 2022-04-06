import React from "react";

export default function OrderComplite() {
  return (
    <div>
      <div className=" px-5 lg:px-0 md:px-0 w-full border border-green-500 py-10 flex justify-center items-center">
        <img src="images/correct.png" alt="" className=" w-10 h-10 mr-2" />
        <span className=" text-2xl md:text-3xl lg:text-3xl font-light text-green-500">
          Thank you. Your order has been received
        </span>
      </div>
      <div className="grid grid-cols-1 gap-y-10 lg:gap-0  md:grid-cols-3 lg:grid-cols-6 mt-20">
        <div className=" md:border-r lg:border-r ">
          <span className="block text-center font-light text-zinc-600">
            Order Number:
          </span>
          <span className="block text-center text-xl font-light text-zinc-700 ">
            500
          </span>
        </div>
        <div className="md:border-r lg:border-r  ">
          <span className="block text-center font-light text-zinc-600">
            Status:
          </span>
          <span className="block text-center text-xl font-light text-zinc-700 ">
            Oricessub
          </span>
        </div>
        <div className=" lg:border-r ">
          <span className="block text-center font-light text-zinc-600">
            Date:
          </span>
          <span className="block text-center text-xl font-light text-zinc-700 ">
            Aprin, 06, 2022
          </span>
        </div>
        <div className="md:border-r lg:border-r  ">
          <span className="block text-center font-light text-zinc-600">
            Email:
          </span>
          <span className="block text-center text-xl font-light text-zinc-700 ">
            example@gmail.com
          </span>
        </div>
        <div className="md:border-r lg:border-r ">
          <span className="block text-center font-light text-zinc-600">
            Total:
          </span>
          <span className="block text-center text-xl font-light text-zinc-700 ">
            500
          </span>
        </div>
        <div>
          <span className="block text-center font-light text-zinc-600">
            Payment Method:
          </span>
          <span className="block text-center text-xl font-light text-zinc-700 ">
            Cash on delivery
          </span>
        </div>
      </div>
    </div>
  );
}
