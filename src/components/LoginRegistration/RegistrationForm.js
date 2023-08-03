import React, { useContext } from "react";
import { CgFacebook } from "react-icons/cg";
import { FcGoogle } from "react-icons/fc";
import Button from "../Button/Button";
import Form from "../Form/Form";
import Input from "../InputBox/InputBox";
import { AuthContext } from "../../provider/AuthProvider";
export default function RegistrationForm() {
  const { createUser } = useContext(AuthContext)
  const handelSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const Username = form.Username.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      })
    console.log(Username, email, password);

  }
  return (
    <div>
      <Form onSubmit={handelSubmit}>
        <Input
          type="text"
          placeholder="Username"
          id='Username'
          className=" outline-none py-4 px-5 mb-5 w-full text-zinc-600 border bg-zinc-50 "
        />
        <Input
          type="email"
          placeholder="Email Address"
          id="email"
          className=" outline-none py-4 px-5 mb-5 w-full text-zinc-600 border bg-zinc-50 "
        />
        <Input
          type="password"
          placeholder="Password"
          id="password"
          className=" outline-none py-4 px-5 mb-2 w-full text-zinc-600 border bg-zinc-50 "
        />
        <Button
          type="submit"
          className="block text-zinc-50 bg-gray-700 w-full py-3 mt-5 cursor-pointer focus:bg-gray-600 uppercase font-light "
        >
          Register
        </Button>
      </Form>
      <div className="flex justify-center items-center mt-5 ">
        <div className="bg-zinc-300 h-[1px] w-10"></div>
        <span className="text-zinc-600 font-light mx-2 ">or Register with</span>
        <div className="bg-zinc-300 h-[1px] w-10"></div>
      </div>
      <div className="flex justify-center gap-4 mt-4">
        <div className="bg-blue-500 inline-block p-2 cursor-pointer text-white">
          <CgFacebook />
        </div>
        <div className="bg-white bordre shadow inline-block p-2 cursor-pointer text-white">
          <FcGoogle />
        </div>
      </div>
    </div>
  );
}
