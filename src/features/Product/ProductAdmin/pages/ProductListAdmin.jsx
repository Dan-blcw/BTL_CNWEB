import React, { useEffect, useState } from "react";
import { MdDeleteOutline, MdOutlineCreate } from "react-icons/md";
import ProductUpdate from "./ProductUpdate";
import productApi from "../../../../apis/productApi";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Pagination,
} from "@mui/material";
import { useSelector } from "react-redux";

const PRODUCT_HEADER_LABEL = [
  { id: 1, name: "Name" },
  { id: 2, name: "Image" },
  { id: 3, name: "Color" },
  { id: 4, name: "Brand" },
  { id: 5, name: "Coutry" },
  { id: 6, name: "Price" },
  { id: 7, name: "Action" },
];

function ProductListAdmin() {
  const [productList, setProductList] = useState([]);
  const { product_list } = useSelector((state) => state.products);
  const [updatingProduct, setUpdatingProduct] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [open, setOpen] = React.useState(false);
  const [productToDelete, setProductToDelete] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;

  // Calculate the index range for the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = product_list.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handleClickOpen = (product) => {
    setProductToDelete(product);
    setOpen(true);
  };

  const handleClose = () => {
    setProductToDelete(null);
    setOpen(false);
  };

  const handleDeleteProduct = async () => {
    // Gọi API delete product ở đây
    if (productToDelete) {
      // const res = await productApi.removeProduct(productToDelete.id);
      // Add any additional logic after deletion if needed
      console.log("Product deleted:", productToDelete);
      // Reset the productToDelete state
      setProductToDelete(null);
      // Close the confirmation dialog
      setOpen(false);
    }
  };

  // Call API lấy dạnh sách sản phẩm
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const { data } = await productApi.getAll();
  //       setProductList(data);
  //     } catch (error) {
  //       console.log("Error: ", error);
  //     }
  //   })();
  // }, [productList]);

  const handleUpdateProduct = (product) => {
    setSelectedProduct(product);
    setUpdatingProduct(true);
  };

  const handleCloseFormUpdate = () => {
    setUpdatingProduct(false);
  };

  return (
    <div className="relative col-span-11 md:col-span-10 p-6 bg-gray-200">
      {updatingProduct && (
        <ProductUpdate
          product={selectedProduct}
          closeForm={handleCloseFormUpdate}
        />
      )}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="bg-slate-600 text-white">
              {PRODUCT_HEADER_LABEL.map((p) => (
                <th key={p.id} scope="col" className={`px-6 py-3 `}>
                  {p.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentProducts.map((product) => {
              return (
                <tr
                  key={product.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white "
                  >
                    {product.name}
                  </th>
                  <td className="px-2 py-2">
                    <img
                      src={product.pictureURL}
                      alt="img"
                      className="w-16 rounded"
                    />
                  </td>
                  <td className="px-6 py-4 ">{product.color}</td>
                  <td className="px-6 py-4">{product.brand}</td>
                  <td className="px-6 py-4">{product.country}</td>
                  <td className="px-6 py-4">${product.price}</td>
                  <td className="px-6 py-4">
                    <div
                      onClick={() => handleUpdateProduct(product)}
                      className="flex items-center px-1 py-2 cursor-pointer hover:underline"
                    >
                      <MdOutlineCreate className="mr-1 text-lg" />
                      <span className="font-medium text-blue-600 dark:text-blue-500">
                        Edit
                      </span>
                    </div>
                    <div
                      onClick={() => handleClickOpen(product)}
                      className="flex items-center p-1 hover:underline cursor-pointer"
                    >
                      <MdDeleteOutline className="mr-1 text-lg" />
                      <span className="font-medium text-red-600 dark:text-red-500 ">
                        Remove
                      </span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Comfirm remove product"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you really want to remove this product from the product list?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleDeleteProduct} autoFocus>
            Comfirm
          </Button>
        </DialogActions>
      </Dialog>

      <Pagination
        className="mt-4 flex justify-center"
        count={Math.ceil(product_list.length / productsPerPage)}
        page={currentPage}
        variant="outlined"
        shape="rounded"
        onChange={(event, value) => setCurrentPage(value)}
      />
    </div>
  );
}

export default ProductListAdmin;
