import React, { useContext, useEffect, useState } from "react";
import { BsBag } from "react-icons/bs";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import logo from "../img/logo.svg";

const Header = () => {
  const [isactive, setiactive] = useState(false);
  const { setisOpen, isOpen } = useContext(SidebarContext);
  const { Amount } = useContext(CartContext);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setiactive(true) : setiactive(false);
    });
  });
  return (
    <header
      className={`${
        isactive ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed w-full z-10 transition-all`}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        <Link to={"/"}>
          <div>
            <img className="w-[40px]" src={logo} alt="i" />
          </div>
        </Link>
        <div
          className="cursor-pointer flex relative"
          onClick={() => setisOpen(!isOpen)}
        >
          <BsBag className="text-2xl" />
          <div className="bg-red-500 -right-2  -bottom-2 absolute text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
            {Amount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
