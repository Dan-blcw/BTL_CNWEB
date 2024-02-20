import React from "react";
import { NavLink } from "react-router-dom";
import { FaRegListAlt } from "react-icons/fa";
import { IoIosCreate } from "react-icons/io";

const SIDE_BAR = [
  {
    id: 1,
    name: "Product list",
    url: "/admin/product-list",
    icon: <FaRegListAlt />,
  },
  {
    id: 2,
    name: "Add product",
    url: "/admin/create",
    icon: <IoIosCreate />,
  },
];

function Sidebar(props) {
  return (
    <div className="pt-2 bg-slate-600 col-span-1 md:col-span-2">
      {SIDE_BAR.map((nav) => {
        return (
          <NavLink
            key={nav.id}
            to={nav.url}
            className={({ isActive }) =>
              `uppercase flex items-center lg:justify-start justify-center text-white my-1 py-2 md:px-12 cursor-pointer ${
                isActive ? "bg-blue-800 " : ""
              }`
            }
          >
            <div className="md:mr-2 font-medium text-lg ">{nav.icon}</div>
            <span className="hidden md:block text-sm">{nav.name}</span>
          </NavLink>
        );
      })}
    </div>
  );
}

export default Sidebar;
