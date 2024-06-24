import React from "react";
import useFetch from "../hook/UseFetch";
import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
  const { data, loading, error } = useFetch(
    "https://fakestoreapi.com/products",
  );

  return (
    <div className="mx-[100px] my-[50px]">
      <div className="flex flex-col items-center justify-between gap-5">
        <div className="space-y-2">
          <h1 className="flex-2 text-center text-xl font-semibold">
            FEATURED PRODUCTS
          </h1>
          <p className="flex-3 text-xs italic text-gray-400 md:text-sm">
            "What you wear is how you present yourself to the world, especially
            today, when human contacts are so quick. Fashion is instant
            language." —Miuccia Prada
          </p>
        </div>
        <div className="flex flex-col justify-center gap-12 md:flex-row">
          {error
            ? "ERROR! SOMETHING WENT WRONG"
            : loading
              ? "LOADING..."
              : data
                  ?.slice(10, 13)
                  .map(({ id, title, description, image, price }) => (
                    <ProductCard
                      key={id}
                      id={id}
                      title={title}
                      description={description}
                      image={image}
                      price={price}
                    />
                  ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
