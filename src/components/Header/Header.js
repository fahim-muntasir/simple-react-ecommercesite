import React from "react";
import Navbar from "./Navbar";
import NavbarTop from "./NavbarTop";

export default function Header() {
  return (
    <header>
      <NavbarTop />
      <Navbar />
    </header>
  );
}
