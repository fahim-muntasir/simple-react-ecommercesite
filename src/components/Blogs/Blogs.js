import React from "react";
import SingleBlogs from "../SingleBlog/SingleBlog";

export default function Blogs() {
  return (
    <section className=" mt-28 w-11/12 m-auto ">
      <div className=" text-center mb-20 ">
        <h1 className=" inline-block relative font-light  text-zinc-700 text-3xl after:contents[''] after:absolute after:w-full after:left-0 after:h-5 after:bottom-0 after:bg-green-500 after:opacity-30 after:-z-1 ">
          Our Article
        </h1>
      </div>
      <div className="grid gap-x-8 gap-y-8 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 ">
        <SingleBlogs />
        <SingleBlogs />
        <SingleBlogs />
      </div>
    </section>
  );
}
