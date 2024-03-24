import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { CartContext } from "../contexts/CartContext";

const CartItem = ({ item }) => {
  const { removecart, increase, decrease } = useContext(CartContext);
  const { id, image, price, amount, title } = item;
  return (
    <div className="flex gap-x-3  py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
      <div className="w-full min-h-[150px] flex items-center  gap-x-4">
        <Link to={`/Product/:${id}`}>
          <img className="max-w-[80px]" src={image} alt="image" />
        </Link>
        <div className="w-full flex flex-col">
          <div className="flex justify-between mb-2">
            <Link
              className="text-sm uppercase font-medium max-w-[240px] hover:underline text-primary"
              to={`/Product/:${id}`}
            >
              {title}
            </Link>
            <div
              onClick={() => removecart(id)}
              className="text-xl cursor-pointer"
            >
              <IoMdClose className="text-gray-500 hover:text-red-500  transtition"></IoMdClose>
            </div>
          </div>
          <div className=" flex gap-x-2 h-[36px]">
            <div className="flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium">
              <div
                onClick={() => decrease(id)}
                className="flex-1 flex  h-full justify-center items-center cursor-pointer"
              >
                <IoMdRemove></IoMdRemove>
              </div>
              <div className="h-full  flex  justify-center items-center px-2">
                {amount}
              </div>
              <div
                onClick={() => increase(id)}
                className="flex-1 flex h-full justify-center items-center cursor-pointer"
              >
                <IoMdAdd />
              </div>
            </div>
            {/* <div className="flex-1 flex h-full justify-center items-center cursor-pointer">
              <IoMdAdd />
            </div> */}
            <div className="flex-1 flex justify-around items-center ">
              ${price}
            </div>
            <div className="flex-1 flex justify-end items-center text-primary font-medium">{`$ ${parseFloat(
              price * amount
            ).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
