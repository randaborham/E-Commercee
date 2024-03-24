import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";

import CartItem from "../components/CartItem";
import SidebarProvider, { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";

const Sidebar = () => {
  const { isOpen, handleColse } = useContext(SidebarContext);
  const { Cart, clearcart, decrease, totle, Amount } = useContext(CartContext);
  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } bg-white fixed top-0 w-full h-full shadow-2xl md:w-[40vw]
       xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex justify-between items-center py-6 border-b">
        <div className="uppercase text-sm font-semibold">
          Shopping bag ({Amount})
        </div>
        <div
          onClick={handleColse}
          className=" cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div className=" flex flex-col gsp-y-2 h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b">
        {Cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
        <div className="flex flex-col gap-y-3 py-4 mt-4">
          <div className="flex w-full items-center justify-between">
            <div className="uppercase font-semibold">
              <span className="mr-2">Total:</span>$
              {parseFloat(totle).toFixed(2)}
            </div>
            <div
              onClick={clearcart}
              className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl"
            >
              <FiTrash2 />
            </div>
          </div>
        </div>

        <Link
          to={"/"}
          className="bg-gray-200 mb-4 flex p-4 justify-center items-center text-primary font-meduim w-full"
        >
          View Cart
        </Link>
        <Link
          to={"/"}
          className="bg-primary  flex p-4 justify-center items-center text-white font-meduim w-full"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
