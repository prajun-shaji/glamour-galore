import React from "react";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import CartItems from "../components/CartItems";
import currencyFormatter from "../currencyFormatter.js";
import {
  DeleteForever,
  DoubleArrowOutlined,
  LocalMall,
} from "@mui/icons-material";

const Cart = () => {
  const navigate = useNavigate();
  const [{ cart, user }, dispatch] = useStateValue();

  const totalItemsInCart = cart.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  const subtotal = cart.reduce(
    (total, item) => total + item.quantity * item.price,
    0,
  );

  const handleCheckout = () => {
    if (user) {
      navigate("/payment");
    } else {
      navigate("/login");
    }
  };

  // Calculate discount based on subtotal
  const discount = subtotal > 80 ? 10 : subtotal > 0 ? 3 : 0;

  return (
    <div>
      <div className="flex flex-col bg-gray-100 px-2 py-1 shadow">
        <div className="flex justify-between">
          <h1 className="text-lg font-bold">YOUR BAG</h1>
          {user && (
            <p className="text-[11px] font-medium italic md:text-sm">
              Hello, {user.email}
            </p>
          )}
        </div>
        <p className="text-sm md:text-base">
          Items in your bag are not reserved — check out now to make them yours.
        </p>
      </div>

      {cart.length === 0 ? (
        <div className="flex h-screen flex-col items-center justify-center gap-2">
          <h1 className="text-xl font-bold tracking-widest">
            YOUR BAG IS EMPTY
          </h1>
          <button
            className="border border-black px-2.5 py-2 font-semibold tracking-widest hover:bg-black hover:text-white"
            onClick={() => navigate("/")}
          >
            CONTINUE SHOPPING
            <DoubleArrowOutlined />
          </button>
        </div>
      ) : (
        <div className="p-5">
          <div className="flex justify-between">
            <div>
              <h1 className="mb-1 font-bold">ORDER SUMMARY:</h1>
              <div className="md:text:sm text-[13px] font-medium">
                <p>
                  AMOUNT ({totalItemsInCart}{" "}
                  {totalItemsInCart === 1 ? "item" : "items"}):
                  <strong>{currencyFormatter.format(subtotal)}</strong>
                </p>
                <p>
                  DISCOUNT:
                  <strong>- {currencyFormatter.format(discount)}</strong>
                </p>
                <p className="font-semibold">
                  ORDER TOTAL:
                  <strong>
                    {currencyFormatter.format(subtotal - discount)}
                  </strong>
                </p>
                <button
                  onClick={handleCheckout}
                  className="my-3 flex items-center border border-black px-2 py-1 tracking-widest active:bg-black active:text-white"
                >
                  CHECKOUT NOW
                  <LocalMall />
                </button>
              </div>
            </div>
            <button
              onClick={() => dispatch({ type: "EMPTY_CART" })}
              className="flex h-7 items-center text-sm text-red-500"
            >
              EMPTY CART
              <DeleteForever />
            </button>
          </div>
          {cart.map((item) => (
            <CartItems
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              description={item.description}
              price={item.price}
              quantity={item.quantity}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
