import React, { useState, useEffect } from "react";
import { useStateValue } from "../context/StateProvider";
import currencyFormatter from "../currencyFormatter.js";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const [{ user, cart }, dispatch] = useStateValue();
  const [showCard, setShowCard] = useState(true);
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [name, setName] = useState("");
  const [formValid, setFormValid] = useState(false);
  const navigate = useNavigate();

  const totalItemsInCart = cart.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  const calculateDiscount = () => {
    let discount = 0;
    if (subtotal > 80) {
      discount = 10;
    } else if (subtotal > 0) {
      discount = 3;
    }
    return discount;
  };

  const subtotal = cart.reduce(
    (total, item) => total + item.quantity * item.price,
    0,
  );

  const totalAmount = subtotal - calculateDiscount();

  const handleClick = () => {
    setShowCard(!showCard);
    dispatch({
      type: "EMPTY_CART",
    });
  };

  const checkFormValidity = () => {
    if (cardNumber && expiryDate && cvv && name) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  };

  useEffect(() => {
    checkFormValidity();
  }, [cardNumber, expiryDate, cvv, name]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="m-5 h-screen p-2">
      <div className="mb-5 flex flex-col items-center">
        <h1 className="text-xl font-bold tracking-widest">DELIVERY ADDRESS</h1>
        <section className="flex flex-col items-center">
          <p className="font-semibold">
            ID: <span className="ml-2 text-sm italic">{user?.email}</span>
          </p>
          <p className="font-semibold">
            ADDRESS: <span className="ml-2 text-sm italic">Your address,</span>
            <span className="ml-2 text-sm italic">Street address</span>
          </p>
        </section>
      </div>

      {showCard === true ? (
        <div className="mb-5 flex flex-col items-center">
          <h1 className="text-xl font-bold tracking-widest">PAYMENT</h1>
          <form
            className="w-full space-y-5 p-5 md:w-1/2"
            onSubmit={handleSubmit}
          >
            <p className="font-bold">
              YOUR TOTAL AMOUNT:
              {currencyFormatter.format(totalAmount)}{" "}
            </p>
            <div>
              <label htmlFor="cardNumber">Card Number:</label>
              <input
                type="text"
                id="cardNumber"
                value={cardNumber}
                onChange={(e) => {
                  const inputVal = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
                  if (inputVal.length <= 16) {
                    setCardNumber(inputVal);
                  }
                }}
                placeholder="Enter card number"
                minLength={16}
                maxLength={16}
                required
                className="ml-2 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="expiryDate">Expiry Date:</label>
              <input
                type="text"
                id="expiryDate"
                value={expiryDate}
                onChange={(e) => {
                  let inputVal = e.target.value.replace(/\D/g, "");
                  if (inputVal.length > 2) {
                    inputVal = inputVal.slice(0, 2) + "/" + inputVal.slice(2);
                  }
                  setExpiryDate(inputVal);
                }}
                placeholder="MM/YY"
                minLength={5}
                maxLength={5}
                required
                className="ml-2 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="cvv">CVV:</label>
              <input
                type="text"
                id="cvv"
                value={cvv}
                onChange={(e) => {
                  const inputVal = e.target.value.replace(/\D/g, "");
                  setCvv(inputVal.slice(0, 3));
                }}
                placeholder="CVV"
                maxLength={3}
                required
                className="ml-2 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="name">Name on Card:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                required
                className="ml-2 focus:outline-none"
              />
            </div>
            <button
              onClick={handleClick}
              className={`cursor-pointer rounded-md border bg-slate-300 px-5 py-1 active:bg-slate-400 ${
                !formValid && "cursor-not-allowed opacity-50"
              }`}
              disabled={!formValid}
            >
              PAY
            </button>
          </form>
        </div>
      ) : (
        <div className="mb-5 flex flex-col items-center">
          <h1 className="text-xl font-bold tracking-widest">
            YOUR PAYMENT WAS SUCCESSFUL
          </h1>
          <p className="my-3 font-bold tracking-widest">HAPPY SHOPPING!</p>
          <button
            onClick={() => navigate("/")}
            className="cursor-pointer rounded-md border bg-slate-300 px-5 py-1 active:bg-slate-400"
          >
            BACK TO HOME
          </button>
        </div>
      )}
    </div>
  );
};

export default Payment;
