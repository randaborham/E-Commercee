import { useContext } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";
import { Container } from "postcss";

const ProductDetails = () => {
  const { products } = useContext(ProductContext);
  const { addtocart } = useContext(CartContext);
  const { id } = useParams();
  const product = products.find((item) => {
    return item.id === parseInt(id);
  });
  console.log(product);

  console.log(id);
  if (!product) {
    return (
      <section>
        <div className="h-screen flex justify-center items-center">
          loading.....
        </div>
      </section>
    );
  }
  const { image, category, title, description, price } = product;
  return (
    <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex flex-1 justify-center items-center mb-8  lg:mb-0">
            <img className="max-w-[200px] lg-max-w-sm  " src={image}></img>
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
              {title}
            </h1>
            <div className="text-xl font-medium text-red-500 mb-6">
              {" "}
              ${price}
            </div>
            <p className="mb-8">{description}</p>
            <button
              onClick={() => addtocart(product.id, product)}
              className="bg-primary py-4 px-8  text-white"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
