import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../../../Auth/userSlice";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import userApi from "../../../../apis/userApi";
import productApi from "../../../../apis/productApi";
ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
};

function ProductItem({ product }) {
  const dispatch = useDispatch();
  const infoUser = useSelector((state) => state.user.current);
  const isAuthenication = !!infoUser.id;

  const handleClickAdd = async (e) => {
    e.preventDefault();
    if (isAuthenication) {
      const inFormationProductAdded = await productApi.get(product.id)
      dispatch(addProductToCart({ product: inFormationProductAdded }));
      toast.success("Add product to cart successfully 🥳🤩🤩🤩", {
        autoClose: 3000,
      });
    } else {
      toast.error("Please login account to add product to cart 👌!", {
        autoClose: 3000,
      });
    }
  };

  return (
    <Link
      to={`/product-detail/${product.id}`}
      className="hover:cursor-pointer hover:scale-105 transition-transform w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <div to={`/product-detail/${product.id}`}>
        <img
          className="rounded-t-lg h-40 w-full object-contain"
          src={product.pictureURL}
          alt="product img"
        />
      </div>
      <div className="mt-2 px-4 pb-2">
        <span className="font-medium text-base tracking-tight line-clamp-2 text-gray-900 dark:text-white truncate">
          {product.name}
        </span>

        <div className="flex items-center justify-between mt-2">
          <span className="text-xl mr-3 font-bold text-gray-900 dark:text-white">
            ${product.price}
          </span>
          <button
            onClick={handleClickAdd}
            className="w-full text-sm mt-2 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg  px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <ShoppingCartIcon className="text-xs mr-2" />
            THÊM
          </button>
        </div>
      </div>
    </Link>
  );
}

export default ProductItem;
