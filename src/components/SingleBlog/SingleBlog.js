import React from "react";
import { BiChat } from "react-icons/bi";
import { HiOutlineShare } from "react-icons/hi";

export default function SingleBlog() {
  return (
    <div className=" w-auto m-auto md:w-auto lg:w-auto shadow overflow-hidden ">
      <div className="h-60">
        <img className="h-full w-full" src="images/banner04.jpg" alt="banner" />
      </div>
      <div className="text-center px-4 pb-5">
        <a
          href="@"
          className=" text-2xl text-zinc-600 hover:text-green-500 duration-300 mt-5 mb-4 block "
        >
          This is healthy food
        </a>
        <div className="flex justify-center items-center mb-4 ">
          <img
            className="w-8 h-8 rounded-full mr-2"
            src="images/profilepic.png"
            alt=""
          />
          <a
            href="@"
            className="text-zinc-600 hover:text-green-500 duration-300 mr-3 "
          >
            By <b>Fahim</b>
          </a>
          <a
            href="@"
            className="flex items-center text-zinc-600 hover:text-green-500 duration-300 mr-3"
          >
            <BiChat className="text-2xl mr-1" /> 0
          </a>
          <span>
            <HiOutlineShare className="text-xl text-zinc-500 cursor-pointer" />
          </span>
        </div>
        <p className="text-zinc-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime totam
          deleniti sapiente magni dolor fugit.{" "}
          <a
            href="@"
            className=" underline font-medium hover:text-green-500 duration-300 block lg:inline-block  "
          >
            Read more
          </a>{" "}
        </p>
      </div>
    </div>
  );
}
