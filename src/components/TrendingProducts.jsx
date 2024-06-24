import React from "react";
import useFetch from "../hook/UseFetch";
import ProductCard from "./ProductCard";

const TrendingProducts = () => {
  const { data, loading, error } = useFetch(
    "https://fakestoreapi.com/products",
  );

  return (
    <div className="mx-[100px] my-[50px]">
      <div className="flex flex-col items-center justify-between gap-5">
        <div className="space-y-2">
          <h1 className="flex-2 text-center text-xl font-semibold">
            TRENDING PRODUCTS
          </h1>
          <p className="flex-3 text-xs italic text-gray-400 md:text-sm">
            "I think there is beauty in everything. What 'normal' people
            perceive as ugly, I can usually see something of beauty in
            it."—Alexander McQueen
          </p>
        </div>
        <div className="flex flex-col justify-center gap-12 md:flex-row">
          {error
            ? "ERROR! SOMETHING WENT WRONG"
            : loading
              ? "LOADING..."
              : data
                  ?.slice(0, 3)
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

export default TrendingProducts;
