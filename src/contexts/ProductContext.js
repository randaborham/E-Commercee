import React, { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

const Productprovider = ({ children }) => {
  const [products, setproducts] = useState([]);
  useEffect(() => {
    const fetchproduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products`);
      const data = await response.json();
      setproducts(data);
    };
    fetchproduct();
  }, []);
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default Productprovider;
