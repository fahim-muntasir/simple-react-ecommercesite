import React from "react";
import { BsArrowRight } from "react-icons/bs";

export default function HomeCarousel() {
  return (
    <section>
      <div
        id="carouselDarkVariant"
        className="carousel slide carousel-fade carousel-dark relative h-[500px] "
        data-bs-ride="carousel"
      >
        {/* <!-- Indicators --> */}
        {/* <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button
            data-bs-target="#carouselDarkVariant"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            data-bs-target="#carouselDarkVariant"
            data-bs-slide-to="1"
            aria-label="Slide 1"
          ></button>
          <button
            data-bs-target="#carouselDarkVariant"
            data-bs-slide-to="2"
            aria-label="Slide 1"
          ></button>
        </div> */}

        {/* <!-- Inner --> */}
        <div className="carousel-inner relative w-full overflow-hidden h-full">
          {/* <!-- Single item --> */}
          <div className="carousel-item active relative float-left w-full h-full">
            <img
              src="images/banner02.jpg"
              className="block w-full h-full"
              alt="Motorbike Smoke"
            />
            <div className="carousel-caption absolute lg:top-[50%] lg:-translate-y-[50%] lg:left-[450px] left-[55px] md:left-[180px] top-[200px] w-full  ">
              <p
                className="text-3xl text-zinc-600 mb-3 relative
                after:contents[''] after:absolute after:bg-green-400 after:top-5 after:left-[180px] after:h-[3px] after:w-10
              "
              >
                Online Store
              </p>
              <h5 className="text-5xl md:text-6xl lg:text-6xl text-zinc-700 mb-4 ">
                Our New Item
              </h5>
              <a href="@" className="inline-block">
                <button className="flex outline-none bg-green-500 py-3 px-4 items-center text-zinc-100 hover:bg-green-400 ">
                  Shop Now <BsArrowRight />
                </button>
              </a>
            </div>
          </div>

          {/* <!-- Single item --> */}
          {/* <div className="carousel-item relative float-left w-full h-full ">
            <img
              src="images/banner05.jpg"
              className="block w-full h-full"
              alt="Motorbike Smoke"
            />
            <div className="carousel-caption absolute lg:top-[50%] lg:-translate-y-[50%] lg:left-[450px] left-[55px] md:left-[180px] top-[200px] w-full  ">
              <p
                className="text-3xl text-zinc-600 mb-3 relative
                after:contents[''] after:absolute after:bg-purple-400 after:top-5 after:left-[180px] after:h-[3px] after:w-10
              "
              >
                Online Store
              </p>
              <h5 className=" text-5xl md:text-6xl lg:text-6xl text-zinc-700 mb-4 ">
                Our New Item
              </h5>
              <a href="@">
                <button className="flex outline-none bg-zinc-600 py-3 px-4 items-center text-zinc-200 ">
                  Shop Now <BsArrowRight />
                </button>
              </a>
            </div>
          </div> */}
        </div>
        {/* <!-- Inner --> */}

        {/* <!-- Controls --> */}
        <button
          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselDarkVariant"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselDarkVariant"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}
