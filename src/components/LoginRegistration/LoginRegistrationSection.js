import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";

export default function LoginRegistrationSection({ showHide, hideController }) {
  const [loginOrRegister, setLoginOrRegister] = useState(false);

  const loginRegisterHandlear = () => {
    setLoginOrRegister((prev) => !prev);
  };

  return (
    <div
      className={`fixed transition-all bg-zinc-800 h-[100%] w-full top-0 left-0 bottom-0 right-0 duration-300  bg-opacity-60 z-50 overflow-hidden  ${
        showHide ? "visible opacity-100" : "invisible opacity-0"
      } `}
    >
      <div
        className={` translate-x-full transition-all duration-300 absolute right-0 top-0 bottom-0 w-80 bg-zinc-100 h-[100%] px-5 pt-8 pb-5 ${
          showHide ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        } `}
      >
        <AiOutlineClose
          onClick={hideController}
          className=" text-zinc-200 duration-300 hover:rotate-180 absolute top-4 -left-10 text-2xl cursor-pointer "
        />

        <div className=" flex text-center text-2xl font-light text-zinc-700 border-b mb-8 mt-5 ">
          <span
            onClick={loginRegisterHandlear}
            className={`w-[50%] py-3 transition ease-in duration-200 cursor-pointer relative ${
              !loginOrRegister
                ? "after:contains[''] after:absolute after:bg-green-500 after:h-[1px] after:w-[100%] after:-bottom-[1px] after:left-0"
                : "hover:after:contains[''] hover:after:absolute hover:after:bg-green-500 hover:after:h-[1px] hover:after:w-[100%] hover:after:-bottom-[1px] hover:after:left-0"
            }`}
          >
            Login
          </span>
          <span
            onClick={loginRegisterHandlear}
            className={`w-[50%] py-3 transition ease-in duration-200 cursor-pointer relative ${
              loginOrRegister
                ? "after:contains[''] after:absolute after:bg-green-500 after:h-[1px] after:w-[100%] after:-bottom-[1px] after:left-0"
                : "hover:after:contains[''] hover:after:absolute hover:after:bg-green-500 hover:after:h-[1px] hover:after:w-[100%] hover:after:-bottom-[1px] hover:after:left-0"
            }`}
          >
            Register
          </span>
        </div>

        {loginOrRegister ? <RegistrationForm /> : <LoginForm />}
      </div>
    </div>
  );
}
