import { ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import { categoryHome } from "./categories/categoryData";

const Navbar = () => {
  const navigate = useNavigate();
  const [{ cart, user }, dispatch] = useStateValue();
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  const handleToCategory = (data) => {
    navigate("products", {
      state: {
        id: data.categoryType,
      },
    });
  };
  return (
    <div className="bg-white shadow">
      {/* TOP NAV */}
      <div className="flex h-12 items-center justify-between p-6 shadow md:h-16">
        {/* LEFT */}

        <ul className="flex w-1/12 cursor-pointer list-none items-center gap-3 font-semibold uppercase">
          {categoryHome.map((category) => (
            <li
              className="nav-list hidden lg:block"
              key={category.id}
              onClick={() => handleToCategory(category)}
            >
              {category.title}
            </li>
          ))}
        </ul>
        {/* CENTER */}
        <Link to="/">
          <h1 className="mx-2 cursor-pointer py-2 text-center font-[Poppins] text-[17px] font-black sm:text-2xl md:text-4xl">
            GLAMOUR GALORE
          </h1>
        </Link>
        {/* RIGHT */}
        <ul className="flex cursor-pointer list-none items-center gap-2 font-semibold md:gap-3">
          <Link to={!user && "/register"}>
            <li className="text-[12px] duration-500 hover:text-gray-500 md:text-base">
              REGISTER/LOGIN
            </li>
          </Link>
          <li className="duration-500 hover:text-gray-500">
            <Link to="/cart">
              <Badge color="" badgeContent={totalQuantity}>
                <ShoppingCartOutlined />
              </Badge>
            </Link>
          </li>
        </ul>
      </div>

      {/* BOTTOM NAV */}
      <div className="bg-teal-500 text-xs text-white">
        <p className="p-1 text-center font-semibold italic">
          SHOP SMARTER WITH US!
        </p>
      </div>
    </div>
  );
};

export default Navbar;
