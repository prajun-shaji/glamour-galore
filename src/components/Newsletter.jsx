import { Send } from "@mui/icons-material";
import React from "react";

const Newsletter = () => {
  return (
    <>
      <div className="space-x-3 bg-gray-800 p-5 text-white lg:flex lg:items-center lg:justify-between">
        <h1 className="w-8/12 text-lg font-semibold lg:text-3xl">
          <span className="text-teal-400">Subscribe </span>to our community to
          stay informed about all the latest updates, exclusive offers, and
          insightful articles!
        </h1>
        <div className="inline w-1/5 items-center justify-center space-x-0 sm:px-4 md:flex">
          <input
            className="mb-4 w-4/5 rounded px-2 py-2.5 text-gray-500 focus:outline-none sm:mr-5 sm:w-56 lg:mb-0"
            type="email"
            placeholder="example@gamil.com"
          />
          <button className="mx-0 rounded border-0 bg-teal-400 px-2 py-2 hover:bg-teal-500">
            <Send />
          </button>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
