import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Icons from "./Icons";

function Header() {
  return (
    <header className="w-full p-4 px-5 sm:px-10 flex items-center justify-between m-2">
      <Logo />
      <Navbar trigger={true} />
    </header>
  );
}

export default Header;
