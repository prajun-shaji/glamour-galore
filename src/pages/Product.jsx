import React, { useState } from "react";
import UseFetch from "../hook/UseFetch";
import { useParams } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import {
  Add,
  Compare,
  FavoriteBorderOutlined,
  Remove,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import currencyFormatter from "../currencyFormatter.js";

function generateUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

const uniqueId = generateUUID();

const Product = () => {
  const { id } = useParams();
  const [{ cart }, dispatch] = useStateValue();
  const { data, loading, error } = UseFetch(
    `https://fakestoreapi.com/products/${id}`,
  );
  const [quantity, setQuantity] = useState(1);
  const addToCart = () => {
    const index = cart.findIndex((item) => item.id === id);

    if (index !== -1) {
      dispatch({
        type: "UPDATE_CART_ITEM_QUANTITY",
        itemId: id,
        quantity: quantity, // Use the quantity state
      });
    } else {
      const uniqueId = generateUUID();
      dispatch({
        type: "ADD_TO_CART",
        item: {
          id: uniqueId,
          title: data.title,
          description: data.description,
          image: data.image,
          price: data.price,
          quantity: quantity, // Use the quantity state
        },
      });
    }
  };

  return (
    <>
      {error ? (
        "ERROR! SOMETHING WENT WRONG"
      ) : loading ? (
        "LOADING..."
      ) : (
        <div className="m-0 flex flex-col gap-11 px-12 py-5 md:flex-row">
          {/* IMAGE */}
          <div id={data?.id} className="flex-5">
            <img
              src={data?.image}
              className="max-h-[600px] min-h-[300px] w-full object-contain"
            />
          </div>
          {/* DETAILS */}
          <div className="flex flex-1 flex-col gap-2">
            <h1 className="text-sm font-bold md:text-lg">{data?.title}</h1>
            <p className="text-xs font-medium text-gray-500 md:text-base">
              {data?.description}
            </p>
            <span className="text-lg font-semibold">
              {currencyFormatter.format(data?.price * quantity)}
            </span>
            <div className="gap- flex items-center">
              <button
                className="flex h-12 w-12 cursor-pointer items-center justify-center border-none"
                onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
              >
                <Remove />
              </button>
              {quantity}
              <button
                className="flex h-12 w-12 cursor-pointer items-center justify-center border-none"
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                <Add />
              </button>
            </div>
            <button
              onClick={addToCart}
              className="flex w-1/2 items-center justify-center gap-5 rounded-lg border-none bg-green-500 p-2 text-xs font-medium text-white active:bg-green-600 md:w-64 md:text-base"
            >
              ADD TO CART <ShoppingCartOutlined />
            </button>
            <div className="flex gap-3 text-sm">
              <div className="flex cursor-pointer items-center gap-2 rounded-md border border-pink-400 p-2 text-pink-400 active:bg-pink-500 active:text-white">
                WISHLIST
                <FavoriteBorderOutlined />
              </div>
              <div className="flex cursor-pointer items-center gap-2 rounded-md border border-blue-400 p-2 text-blue-400 active:bg-blue-500 active:text-white">
                COMPARE <Compare />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Product;
