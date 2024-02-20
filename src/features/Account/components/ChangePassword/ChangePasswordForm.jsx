import React from "react";
import PropTypes from "prop-types";
import PasswordField from "../../../../components/form-control/PasswordField/PasswordField";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Divider, Paper } from "@mui/material";

ChangePasswordForm.propTypes = {
  onSubmit: PropTypes.func,
};

function ChangePasswordForm({ onSubmit }) {
  const schema = yup.object().shape({
    oldPassword: yup.string().required("Please enter old password"),
    newPassword: yup
      .string()
      .required("Please enter your password.")
      .min(6, "Please enter at least 6 characters."),
    retypeNewPassword: yup
      .string()
      .required("Please retype your password.")
      .oneOf([yup.ref("newPassword")], "Password does not match"),
  });
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const formSubmit = async (data) => {
    if (onSubmit) {
      await onSubmit(data);
      reset();
    }
  };
  return (
    <Paper className="flex-1 mr-4 relative">
      <form
        onSubmit={handleSubmit(formSubmit)}
        className="flex justify-between"
      >
        <div className="mt-4 px-4 flex-2">
          <h2 className="font-bold uppercase text-2xl mb-4 text-center">
            Change password
          </h2>
          <Divider className="w-full" />
          <div className="mt-4">
            <PasswordField
              id="oldPassword"
              label="Old password"
              placeholder="Enter your old password..."
              register={{
                ...register("oldPassword"),
              }}
              errorMessage={errors.oldPassword?.message}
              required
            />
          </div>
          <PasswordField
            id="newPassword"
            label="New password"
            placeholder="Enter your new password..."
            register={{
              ...register("newPassword"),
            }}
            errorMessage={errors.newPassword?.message}
            required
          />
          <PasswordField
            id="retypeNewPassword"
            label="Retype new password"
            placeholder="Enter your new password again..."
            register={{
              ...register("retypeNewPassword"),
            }}
            errorMessage={errors.retypeNewPassword?.message}
            required
          />
        </div>
        <button className="absolute  hover:bg-blue-700 bottom-2 right-2 w-24 mt-12 py-2 px-4 self-end bg-blue-500 rounded-md text-white text-lg cursor-pointer">
          SAVE
        </button>
      </form>
    </Paper>
  );
}

export default ChangePasswordForm;
