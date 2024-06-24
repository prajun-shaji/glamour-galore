import React from "react";
import { categoryHome } from "./categoryData.js";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const navigate = useNavigate();

  const handleToCategory = (data) => {
    navigate("products", {
      state: {
        id: data.categoryType,
      },
    });
  };
  return (
    <div className="mt-20 w-full space-y-7">
      <h1 className="mb-7 text-center text-xl font-semibold"> CATEGORIES</h1>
      <div className="grid grid-cols-2 md:grid-cols-4">
        {categoryHome.map((category) => (
          <div
            className="w-full sm:h-4/5 md:h-full"
            key={category.id}
            onClick={() => handleToCategory(category)}
          >
            <div className="group relative cursor-pointer">
              <div className="blur-0 duration-500 group-hover:blur-xs">
                <img src={category.img} />
              </div>
              <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
                <h2 className="border p-1 text-lg font-bold text-white md:px-5">
                  {category.title}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
