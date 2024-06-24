import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useLocation } from "react-router-dom";
import useFetch from "../hook/UseFetch";
import { Search } from "@mui/icons-material";

const Products = () => {
  const location = useLocation();
  const id = location.state && location.state.id;
  const { data } = useFetch(`https://fakestoreapi.com/products/category/${id}`);
  const [sortedData, setSortedData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    if (data) {
      setSortedData([...data]);
    }
  }, [data]);

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
    const sorted = [...sortedData].sort((a, b) => {
      if (e.target.value === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    setSortedData(sorted);
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredData = sortedData.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <>
      <div className="flex h-full w-full flex-col items-center">
        {/* FILTER CONTAINER */}
        <div className="mb-10 flex w-full flex-col items-center justify-between gap-2 px-5 py-2 shadow md:flex-row">
          <div className="flex items-center rounded-lg bg-gray-300">
            <input
              className="px-1 py-0.5 focus:outline-none"
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchInputChange}
            />
            <Search />
          </div>
          <div className="flex items-center">
            <h1 className="font-bold">SORT BY:</h1>
            <select
              id="sortSelect"
              value={sortOrder}
              onChange={handleSortChange}
              className="p-0.5 text-sm font-medium focus:outline-none"
            >
              <option value="desc">PRICE: HIGHEST---LOWEST</option>
              <option value="asc">PRICE: LOWEST---HIGHEST</option>
            </select>
          </div>
        </div>
        {/* CATEGORY CONTENT */}
        <div className="mb-10 grid grid-cols-1 gap-10 px-10 md:w-full md:grid-cols-3 lg:grid-cols-4">
          {filteredData.map(({ id, title, image, description, price }) => (
            <ProductCard
              key={id}
              id={id}
              title={title}
              description={description}
              price={price}
              image={image}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
