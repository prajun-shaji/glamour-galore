import React from "react";
import { useStateValue } from "../context/StateProvider";
import { Delete } from "@mui/icons-material";
import currencyFormatter from "../currencyFormatter.js";

const CartItems = ({ id, title, description, image, price, quantity }) => {
  const [{ cart }, dispatch] = useStateValue();

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };

  const decreaseQuantity = () => {
    dispatch({
      type: "UPDATE_CART_ITEM_QUANTITY",
      itemId: id,
      quantity: -1,
    });
  };

  const increaseQuantity = () => {
    dispatch({
      type: "UPDATE_CART_ITEM_QUANTITY",
      itemId: id,
      quantity: 1,
    });
  };

  return (
    <>
      <div className="mb-10 flex flex-col items-center gap-4 rounded-lg border border-gray-300 p-4 shadow md:flex-row">
        <div>
          <img
            className="max-h-[200px] min-h-[80px] min-w-[80px] object-contain md:max-w-[200px]"
            src={image}
            alt={title}
          />
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex flex-col items-start gap-1.5 text-sm font-semibold md:flex-row md:items-center md:gap-3 md:text-base">
            <p>Price: {currencyFormatter.format(price * quantity)}</p>
            <p className="flex">
              Quantity:
              <button
                className="pl-1.5"
                onClick={decreaseQuantity}
                disabled={quantity <= 1}
              >
                -
              </button>
              <span className="mx-2">{quantity}</span>
              <button onClick={increaseQuantity}>+</button>
            </p>
            <button className="text-red-700" onClick={removeFromCart}>
              <Delete />
            </button>
          </div>
          <h2 className="text-sm font-bold md:text-base">{title}</h2>
          <p className="line-clamp-2 lg:line-clamp-4">{description}</p>
        </div>
      </div>
    </>
  );
};

export default CartItems;
