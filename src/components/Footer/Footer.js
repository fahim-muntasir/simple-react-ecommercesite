import {
  faFacebookF,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { GoLocation } from "react-icons/go";

export default function Footer() {
  return (
    <footer className=" bg-slate-100 mt-28 pt-20 ">
      <div className="w-11/12 m-auto">
        <div className="mb-10">
          <ul className="flex justify-center gap-5 flex-wrap text-zinc-600 uppercase font-light ">
            <li>
              <a href="@" className="hover:text-green-500">
                Trams and policy
              </a>
            </li>
            <li>
              <a href="@" className="hover:text-green-500">
                About Us
              </a>
            </li>
            <li>
              <a href="@" className="hover:text-green-500">
                Contact Us
              </a>
            </li>
            <li>
              <a href="@" className="hover:text-green-500">
                Blog's
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-between w-72 lg:w-full mb-2 m-auto">
          <div className=" mb-4 lg:mb-0 ">
            <ul className=" line text-zinc-600  font-light leading-loose ">
              <li>
                <a
                  href="@"
                  className="flex items-center justify-center lg:justify-start hover:text-green-500 duration-300 "
                >
                  <AiOutlinePhone className="mr-1" />
                  <span>+09990909</span>
                </a>
              </li>
              <li>
                <a
                  href="@"
                  className="flex items-center hover:text-green-500 justify-center lg:justify-start duration-300"
                >
                  <GoLocation className="mr-1" />
                  <span>Barishal, Bangladesh</span>
                </a>
              </li>
              <li>
                <a
                  href="@"
                  className="flex items-center hover:text-green-500 justify-center lg:justify-start duration-300"
                >
                  <AiOutlineMail className="mr-1" />
                  <span>info@info.com</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="text-center my-10 md:my-0 lg:my-0 ">
            <a href="@" className="text-3xl mb-2 block">
              FM
            </a>
            <div className=" w-24 mb-4 m-auto gap-5 lg:gap-0 lg:m-0 flex justify-center lg:justify-between items-center text-gray-400 text-sm ">
              <a href="@" className="hover:text-green-500 duration-300">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="@" className="hover:text-green-500 duration-300">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="@" className="hover:text-green-500 duration-300">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
          <div className="mb-4 text-center lg:text-left lg:mb-0">
            <h2 className="text-zinc-500 uppercase mb-2">
              Subscribe Our newsletter
            </h2>
            <div className="flex justify-between border-b mt-5 md:mt-0 lg:mt-0 ">
              <input
                type="text"
                placeholder="Enter email"
                className=" bg-transparent outline-none text-zinc-500 "
              />
              <button className="text-zinc-500 hover:text-green-500 duration-300">
                Signup
              </button>
            </div>
          </div>
        </div>

        <div className="text-center py-5 border-t text-zinc-500 mt-5">
          <p>Fahim muntasir &copy; 2022</p>
        </div>
      </div>
    </footer>
  );
}
