import React, { createContext, useState, useEffect } from "react";
import Product from "../components/Product";
export const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [Cart, setCart] = useState([]);
  const [Amount, setAmount] = useState(0);
  const [totle, settotle] = useState(0);

  useEffect(() => {
    if (Cart) {
      const amount = Cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);
      setAmount(amount);
    }
  }, [Cart]);
  useEffect(() => {
    if (Cart) {
      const totle = Cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.price * currentItem.amount;
      }, 0);
      settotle(totle);
    }
    // console.log(totle);
  });

  const addtocart = (product, id) => {
    console.log(id);
    const newarra = { ...id, amount: 1 };
    const CartItem = Cart.find((item) => {
      return item.id === id.id;
    });
    if (CartItem) {
      const newCart = [...Cart].map((item) => {
        if (item.id === id.id) {
          return { ...item, amount: CartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...Cart, newarra]);
    }
  };
  // console.log(Cart);
  const removecart = (id) => {
    const newCart = Cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  const clearcart = () => {
    setCart([]);
  };
  const increase = (id) => {
    const cartitem = Cart.find((item) => item.id === id);
    // console.log(cartitem);
    // const item = Cart.find((item) => item.id === id);
    addtocart(id, cartitem);
  };
  const decrease = (id) => {
    const cartitem = Cart.find((item) => {
      return item.id === id;
    });
    if (cartitem) {
      const newCart = Cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartitem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }

    if (cartitem.amount < 2) {
      removecart(id);
    }
  };

  return (
    <CartContext.Provider
      value={{
        Cart,
        addtocart,
        removecart,
        clearcart,
        increase,
        decrease,
        Amount,
        setAmount,
        totle,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
