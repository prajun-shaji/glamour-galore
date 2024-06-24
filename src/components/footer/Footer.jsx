import React from "react";
import ItemsContainer from "./ItemsContainer";
import {
  FacebookOutlined,
  Instagram,
  Pinterest,
  Twitter,
} from "@mui/icons-material";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <ItemsContainer />
      <div className="grid grid-cols-1 gap-10 pb-8 pt-3 text-center text-sm lg:grid-cols-3">
        <p>Copyright © {year}. All rights reserved.</p>
        <p>Terms - Privacy Policy</p>
        <div className="inline-flex items-center justify-center space-x-1 text-teal-400">
          <div>
            <FacebookOutlined className="hover:text-teal-500" />
          </div>
          <div>
            <Instagram className="hover:text-teal-500" />
          </div>
          <div>
            <Twitter className="hover:text-teal-500" />
          </div>
          <div>
            <Pinterest className="hover:text-teal-500" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
