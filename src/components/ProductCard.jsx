import React, { useState } from "react";
import { Link } from "react-router-dom";
import currencyFormatter from "../currencyFormatter.js";
import { ShoppingBagOutlined } from "@mui/icons-material";
import { useStateValue } from "../context/StateProvider";

const ProductCard = ({ id, title, description, image, price }) => {
  const [{ cart }, dispatch] = useStateValue();
  const [quantity, setQuantity] = useState(1);

  const addToCart = () => {
    const index = cart.findIndex((item) => item.id === id);

    if (index !== -1) {
      dispatch({
        type: "UPDATE_CART_ITEM_QUANTITY",
        itemId: id,
        quantity: 1,
      });
    } else {
      dispatch({
        type: "ADD_TO_CART",
        item: {
          id: id,
          title: title,
          description: description,
          image: image,
          price: price,
          quantity: 1,
        },
      });
    }
  };

  return (
    <div
      className="flex w-[200px] flex-col gap-2 rounded-lg border border-gray-200 bg-white p-3 shadow duration-500 hover:scale-105 hover:shadow-xl md:w-[300px]"
      id={id}
    >
      <Link to={`/product/${id}`}>
        <img className="h-[200px] w-full object-contain" src={image} />
        <h1 className="mt-2 line-clamp-1 font-semibold">{title}</h1>
        <p className="line-clamp-1 text-sm font-medium md:line-clamp-2">
          {description}
        </p>
      </Link>
      <div className="flex items-center gap-3 pt-2">
        <span className="text-lg font-semibold">
          {currencyFormatter.format(price)}
        </span>
        <div onClick={addToCart} className="group">
          <button className="hidden cursor-pointer rounded border border-black p-1 px-1 active:scale-95 active:shadow-lg group-hover:inline">
            <img className="h-6" src="../../images/icons8-shopping-bag.gif" />
          </button>
          <button className="cursor-pointer rounded border border-black p-1 px-1 group-hover:hidden">
            <ShoppingBagOutlined />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
