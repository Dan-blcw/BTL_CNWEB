import { Button, Divider, Paper, Rating } from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useProductDetail from "../hooks/useProductHookDetail";
import ProductDetailSkeleto from "./ProductDetailSkeleto";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../../Auth/userSlice";

function ProductDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  // phần này để lấy sp và trạng thái
  const { product_list } = useSelector((state) => state.products);
  console.log(product_list);
  // const { product, loading } = useProductDetail(id);
  const [quanity, setQuanity] = useState(0);
  const infoUser = useSelector((state) => state.user.current);
  const isAuthenication = !!infoUser.id;

  const handleChangeQuanity = (e) => {
    const currentQuanity = parseInt(e.target.value);
    if (currentQuanity < 0) setQuanity(0);
    else {
      setQuanity(currentQuanity);
    }
  };
  const product = product_list.find((item) => item.id === id);
  console.log(product);
  console.log(id);

  const handleAddToCart = () => {
    if (quanity > 0) {
      if (isAuthenication) {
        dispatch(
          addProductToCart({
            product: product,
            count: quanity,
          })
        );
        toast.success("Add product to cart successfully 🥳🤩🤩🤩", {
          autoClose: 3000,
        });
      } else {
        toast.error("Please login account to add product to cart 👌", {
          autoClose: 3000,
        });
      }
    } else {
      toast.warn(
        "Quanity product that you want to add to cart must greater than 0 👌"
      );
    }
  };

  const handleBuyProduct = () => {
    toast.info("Sorry, This function is in development ");
  };

  return (
    <div className="mt-[var(--height-header)] flex items-center h-[calc(120vh-var(--height-header))]">
      <Paper className=" p-4 w-3/4 mx-auto h-[90%] bg-slate-100">
        {false && <ProductDetailSkeleto />}
        {true && (
          <>
            <div className="flex pb-4">
              <div className="rounded-xl">
                <img
                  className="h-[25rem]  rounded-xl border border-solid border-slate-500"
                  src={product.pictureURL}
                  alt=""
                />
              </div>
              <div className="ml-12 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="mb-2 font-bold text-4xl">{product.name}</h2>
                  <div className="flex items-center">
                    Rating:
                    <Rating name="read-only" value={5} readOnly />
                  </div>
                  <span className="mb-4 block">Sold: 9999+</span>
                  <p className=" line-clamp-6">{product.description}</p>
                  <h2 className="text-3xl font-medium mt-6">
                    PRICE: ${product.price}
                  </h2>
                </div>
                <div className="w-64">
                  <input
                    value={quanity}
                    onChange={handleChangeQuanity}
                    type="number"
                    className="w-full outline-none border border-solid border-black p-2 mb-2 rounded"
                  />
                  <div className="flex justify-between">
                    <Button
                      onClick={handleAddToCart}
                      className="mr-2"
                      variant="outlined"
                    >
                      Add to cart
                    </Button>
                    <Button onClick={handleBuyProduct} variant="outlined">
                      Buy now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <Divider />
            <div>
              <h2 className="text-center uppercase text-lg my-2">
                Related products
              </h2>
              <div className="flex justify-evenly">
                <div className="flex flex-col justify-center items-center border border-solid border-black rounded p-2">
                  <img className="h-32 w-32" src={product.pictureURL} alt="" />
                  <h2 className="text-sm mt-2">{product.name}</h2>
                  <div className="flex justify-between items-center w-full">
                    <span className="font-medium">${product.price}</span>
                    <span className="text-xs font-thin text-slate-500">
                      sold: 999
                    </span>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center border border-solid border-black rounded p-2">
                  <img className="h-32 w-32" src={product.pictureURL} alt="" />
                  <h2 className="text-sm mt-2">{product.name}</h2>
                  <div className="flex justify-between items-center w-full">
                    <span className="font-medium">${product.price}</span>
                    <span className="text-xs font-thin text-slate-500">
                      sold: 999
                    </span>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center border border-solid border-black rounded p-2">
                  <img className="h-32 w-32" src={product.pictureURL} alt="" />
                  <h2 className="text-sm mt-2">{product.name}</h2>
                  <div className="flex justify-between items-center w-full">
                    <span className="font-medium">${product.price}</span>
                    <span className="text-xs font-thin text-slate-500">
                      sold: 999
                    </span>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center border border-solid border-black rounded p-2">
                  <img className="h-32 w-32" src={product.pictureURL} alt="" />
                  <h2 className="text-sm mt-2">{product.name}</h2>
                  <div className="flex justify-between items-center w-full">
                    <span className="font-medium">${product.price}</span>
                    <span className="text-xs font-thin text-slate-500">
                      sold: 999
                    </span>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center border border-solid border-black rounded p-2">
                  <img className="h-32 w-32" src={product.pictureURL} alt="" />
                  <h2 className="text-sm mt-2">{product.name}</h2>
                  <div className="flex justify-between items-center w-full">
                    <span className="font-medium">${product.price}</span>
                    <span className="text-xs font-thin text-slate-500">
                      sold: 999
                    </span>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center border border-solid border-black rounded p-2">
                  <img className="h-32 w-32" src={product.pictureURL} alt="" />
                  <h2 className="text-sm mt-2">{product.name}</h2>
                  <div className="flex justify-between items-center w-full">
                    <span className="font-medium">${product.price}</span>
                    <span className="text-xs font-thin text-slate-500">
                      sold: 999
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </Paper>
    </div>
  );
}

export default ProductDetail;
