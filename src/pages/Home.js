import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Product";
import Hero from "../components/Hero";

const Home = () => {
  const { products } = useContext(ProductContext);
  // console.log(products);
  const filterProduct = products.filter((items) => {
    return (
      items.category === "men's clothing" ||
      items.category === "women's clothing"
    );
  });
  console.log(filterProduct);
  return (
    <div>
      <Hero />
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:max-0">
            {filterProduct.map((product) => {
              return (
                <Product product={product} key={product.id} />
                // <div className="w-full h-[300px] bg-pink-200" key={product.id}>
                //   {product.title}
                // </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
