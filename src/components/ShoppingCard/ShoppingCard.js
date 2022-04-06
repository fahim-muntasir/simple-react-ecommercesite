import React from "react";
import CardItems from "./CardItems/CardItems";
import CardSubtotal from "./CardSubtotal/CardSubtotal";

export default function ShoppingCard() {
  return (
    <div className="lg:flex gap-5 ">
      <div className=" w-full lg:w-[70%] mb-10">
        <CardItems />
      </div>
      <div className="lg:w-[30%]">
        <CardSubtotal />
      </div>
    </div>
  );
}
