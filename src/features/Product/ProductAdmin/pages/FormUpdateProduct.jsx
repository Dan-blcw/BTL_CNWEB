import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import PropTypes from "prop-types";
import React from "react";
import InputField from "../../../../components/form-control/InputField/InputField";
import SelectField from "../../../../components/form-control/SelectField/SelectField";
import TextAreaField from "../../../../components/form-control/TextAreaField/TextAreaField";
import { LinearProgress } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";

FormUpdateProduct.propTypes = {
  onSubmit: PropTypes.func,
  onClose: PropTypes.func,
  product: PropTypes.object.isRequired,
};

function FormUpdateProduct({ onSubmit, onClose, product }) {
  const { color_list, brand_list, country_list } = useSelector(
    (state) => state.products
  );

  const schema = yup.object().shape({
    name: yup.string().required("Please enter product name."),
    price: yup
      .number()
      .required("Please enter product price.")
      .moreThan(0, "Price must be greater than 0"),
    pictureURL: yup.string().required("Please enter URL image."),
  });

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const formSubmit = async (data) => {
    if (onSubmit) {
      await onSubmit({ ...data, id: product.id });
    }
  };

  const handleCloseForm = () => {
    if (onClose) onClose();
  };

  return (
    <div className="z-50 min-[400px] absolute bg-white mx-auto mt-2 w-2/3 xl:w-1/2 px-8 pt-2 pb-14 rounded-md left-0 right-0 border border-solid border-black">
      {isSubmitting && (
        <LinearProgress
          sx={{ position: "absolute", top: 0, left: 0, right: 0 }}
        />
      )}
      <CloseIcon
        onClick={handleCloseForm}
        className="absolute top-2 right-2 cursor-pointer text-xl"
      />
      <h2 className="uppercase font-semibold text-xl text-center">
        Update Product: {product.name}
      </h2>
      <form
        className="mt-6 flex flex-wrap gap-12 mb-4"
        onSubmit={handleSubmit(formSubmit)}
        encType="multipart/form-data"
      >
        <div className="flex-1 flex flex-col justify-between">
          <div className="flex flex-wrap justify-between">
            <div className="flex-2 mr-12">
              <InputField
                id="product_name"
                type="text"
                label="Product name"
                valueUpdate={product.name}
                placeholder="Enter product name..."
                required={true}
                register={{
                  ...register("name", {
                    value: product.name,
                  }),
                }}
                errorMessage={errors.name?.message}
              />
            </div>
            <div className="flex-1">
              <InputField
                id="price"
                label="Price"
                type="number"
                placeholder="Enter price of product..."
                required={true}
                register={{
                  ...register("price", {
                    value: product.price,
                  }),
                }}
                errorMessage={errors.price?.message}
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between">
            <SelectField
              name="color"
              label="Color"
              register={{
                ...register("color", {
                  value: product.color,
                }),
              }}
              options={color_list}
            />

            <SelectField
              name="brand"
              label="Brand"
              register={{
                ...register("brand", {
                  value: product.brand,
                }),
              }}
              options={brand_list}
            />

            <SelectField
              name="country"
              label="Coutry"
              register={{
                ...register("country", {
                  value: product.country,
                }),
              }}
              options={country_list}
            />
          </div>

          <InputField
            id="pictureURL"
            label="URL of picture"
            name="pictureURL"
            type="text"
            placeholder="Enter url of image..."
            required={true}
            valueUpdate={product.pictureURL}
            register={{
              ...register("pictureURL", {
                value: product.pictureURL,
              }),
            }}
            errorMessage={errors.pictureURL?.message}
          />

          <TextAreaField
            name="description"
            label="Description"
            placeholder="Write descriptions about product thoughts here..."
            row={6}
            register={{
              ...register("description", {
                value: product.description,
              }),
            }}
          />
        </div>

        <div className="mt-6 absolute bottom-4 right-4 w-36">
          <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormUpdateProduct;
