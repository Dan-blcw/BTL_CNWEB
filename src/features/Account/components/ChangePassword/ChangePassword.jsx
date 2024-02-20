import React from "react";
import PropTypes from "prop-types";
import ChangePasswordForm from "./ChangePasswordForm";
import { toast } from "react-toastify";

ChangePassword.propTypes = {};

function ChangePassword(props) {
  const handleSubmit = async (data) => {
    try {
      toast.success("Update password successfully <3");
      console.log(data);
    } catch (error) {}
  };
  return <ChangePasswordForm onSubmit={handleSubmit} />;
}

export default ChangePassword;
