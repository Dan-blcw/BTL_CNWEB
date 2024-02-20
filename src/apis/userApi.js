import axiosClient from "./axiosClient";

const userApi = {
  login(data) {
    const url = "/auth/local";
    return axiosClient.post(url, data);
  },

  register(data) {
    const url = "/auth/local/register";
    return axiosClient.post(url, data);
  },

  getInfo() {
    const url = "/user/information/get";
    // return axiosClient.get(url);
    return {
      fullName: "Nguyen Xuan Phong",
      email: "ngxphong03@gmail.com",
      telephoneNumber: "",
      address: "",
      city: "",
    };
  },

  updateInfo(newInfor) {
    const url = "/user/information/update";
    return axiosClient.post(url, newInfor);
  },

  updatePassword(newPassword) {
    const url = "/auth/local/password/update";
    return axiosClient.post(url, newPassword);
  },
};

export default userApi;
