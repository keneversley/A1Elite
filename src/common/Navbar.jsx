import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/Buata.png";

const menus = [
  {
    _id: 1,
    name: "Home",
    link: "/",
  },
  {
    _id: 2,
    name: "Donate",
    link: "/donate",
  },
  {
    _id: 3,
    name: "Contact",
    link: "/contact",
  },
];
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between sm:justify-start sm:gap-20 items-center h-24">
          <div className="flex items-center">
            <Link to="" className="text-xl font-bold text-blue-600">
              <img className="w-20 h-20" src={logo} alt="" />
            </Link>
          </div>
          <div className="hidden md:flex space-x-6 uppercase">
            {menus.map((menu) => (
              <NavLink
                key={menu._id}
                to={menu.link}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 font-semibold underline"
                    : "text-gray-600 hover:text-blue-600 hover:underline "
                }
              >
                {menu?.name}
              </NavLink>
            ))}
          </div>
          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col px-4 pb-4 space-y-2">
          {menus.map((menu) => (
            <NavLink
              key={menu._id}
              to={menu.link}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold"
                  : "text-gray-600 hover:text-blue-600"
              }
            >
              {menu?.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
