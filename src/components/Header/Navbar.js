import React, { useState } from "react";
import {
    AiOutlineMenu,
    AiOutlineShoppingCart,
    AiOutlineUser,
} from "react-icons/ai";
import { BsArrowLeft, BsHeart, BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import LoginRegistrationSection from "../LoginRegistration/LoginRegistrationSection";

export default function Navbar() {
    const [navShowHide, setShowHide] = useState(false);
    const [loginRegShowHide, setLoginRegShowHide] = useState(false);

    const loginRegShow = () => {
        setLoginRegShowHide(true);
    };

    const loginRegHide = () => {
        setLoginRegShowHide(false);
    };

    const navShow = () => {
        setShowHide(true);
    };

    const navHide = () => {
        setShowHide(false);
    };

    return (
        <div className=" w-11/12 m-auto flex justify-between py-8 items-center ">
            <div className=" md:block lg:hidden block text-3xl mb-2 cursor-pointer text-gray-700 mr-2 ">
                <AiOutlineMenu onClick={navShow} />
            </div>
            <div className="w-3/12">
                <Link to={"/"} className="text-4xl">
                    <img src="images/logo.png" alt="logo" className="w-10" />
                </Link>
            </div>
            <div className="w-6/12">
                <nav className=" hidden md:hidden lg:block ">
                    <ul className="flex w-auto justify-center text-lg gap-5 text-gray-700">
                        <li className=" relative ">
                            <Link
                                className="after:content-[''] after:absolute after:bg-green-500 after:w-[0] after:h-[2px] after:left-0 after:top-6 ease-out after:duration-300 hover:after:w-[100%] "
                                to={"/"}
                            >
                                Home
                            </Link>
                        </li>
                        <li className=" relative ">
                            <a
                                className="after:content-[''] after:absolute after:bg-green-500  after:w-[0] after:h-[2px] after:left-0 after:top-6 ease-out after:duration-300 hover:after:w-[100%] "
                                href="@"
                            >
                                Shop
                            </a>
                        </li>
                        <li className=" relative ">
                            <a
                                className="after:content-[''] after:absolute after:bg-green-500  after:w-[0] after:h-[2px] after:left-0 after:top-6 ease-out after:duration-300 hover:after:w-[100%] "
                                href="@"
                            >
                                About
                            </a>
                        </li>
                        <li className=" relative ">
                            <a
                                className="after:content-[''] after:absolute after:bg-green-500  after:w-[0] after:h-[2px] after:left-0 after:top-6 ease-out after:duration-300 hover:after:w-[100%] "
                                href="@"
                            >
                                Blog
                            </a>
                        </li>
                        <li className=" relative ">
                            <a
                                className="after:content-[''] after:absolute after:bg-green-500  after:w-[0] after:h-[2px] after:left-0 after:top-6 ease-out after:duration-300 hover:after:w-[100%] "
                                href="@"
                            >
                                Contuct
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* responsive nav bar */}
                <div
                    className={`fixed md:fixed lg:hidden bg-zinc-800 h-[100%] w-full top-0 left-0 bottom-0 right-0 transition-all duration-300  bg-opacity-60 z-50 overflow-hidden ${
                        navShowHide
                            ? " visible opacity-100 "
                            : "invisible opacity-0 "
                    }`}
                >
                    <nav
                        className={`w-72 h-[100%] transition-all duration-300 px-3 pt-4 bg-zinc-900 relative ${
                            navShowHide
                                ? "translate-0 opacity-100"
                                : " -translate-x-full opacity-0 "
                        }`}
                    >
                        <div className="flex mb-4 ">
                            <input
                                className=" w-10/12 px-2 py-1 outline-0 bg-transparent border border-zinc-800 text-neutral-200  focus:border-zinc-600 "
                                type="text"
                                placeholder="Search..."
                            />
                            <button className=" w-2/12 flex justify-center items-center bg-green-500  text-neutral-200 ">
                                <BsSearch />
                            </button>
                        </div>
                        <ul
                            className={` transition  text-neutral-200 ${
                                navShowHide
                                    ? "duration-600 opacity-100 "
                                    : "duration-75 opacity-0 "
                            } `}
                        >
                            <li className=" border-b border-zinc-800 pl-2 mb-3 pb-2 hover:bg-green-500  duration-300 ">
                                <a href="@">Home</a>
                            </li>
                            <li className=" border-b border-zinc-800 pl-2 mb-3 pb-2 hover:bg-green-500  duration-300 ">
                                <a href="@">Shop</a>
                            </li>
                            <li className=" border-b border-zinc-800 pl-2 mb-3 pb-2 hover:bg-green-500  duration-300 ">
                                <a href="@">About</a>
                            </li>
                            <li className=" border-b border-zinc-800 pl-2 mb-3 pb-2 hover:bg-green-500  duration-300 ">
                                <a href="@">Contuct</a>
                            </li>
                        </ul>
                        <BsArrowLeft
                            onClick={navHide}
                            className=" absolute right-4 bottom-4 text-3xl bg-green-500  text-neutral-200 w-12 rounded cursor-pointer "
                        />
                    </nav>
                </div>
                {/* responsive nav bar */}
            </div>
            <div className="w-3/12">
                <ul className="flex justify-end gap-6 text-gray-600 cursor-pointer text-3xl">
                    <li>
                        <BsSearch className=" hover:text-green-500  duration-300 " />
                    </li>
                    <li>
                        <BsHeart className=" hover:text-green-500  duration-300 " />
                    </li>
                    <li>
                        <Link to={"/cart"} className=" relative ">
                            <AiOutlineShoppingCart className=" hover:text-green-500 duration-300" />
                            <div className=" text-sm text-white rounded-full absolute w-6 h-6 bg-green-500 -top-3 -right-2 flex items-center justify-center ">
                                <span>7</span>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <AiOutlineUser
                            onClick={loginRegShow}
                            className=" hover:text-green-500  duration-300 "
                        />
                    </li>
                </ul>
                {/* login registration form  */}
                <LoginRegistrationSection
                    showHide={loginRegShowHide}
                    hideController={loginRegHide}
                />
                {/* login registration form  */}
            </div>
        </div>
    );
}
