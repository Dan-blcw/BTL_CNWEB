import StorageKeys from "../constants/storage-key";
import axiosClient from "./axiosClient";

const productApi = {
  getAll(params) {
    try {
      const url = `/api/v1/admin/list-ob`;
      return axiosClient.get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem(StorageKeys.TOKEN)}`,
        },
        params: params,
      });
    } catch (error) {
      // Xử lý các lỗi
      throw error;
    }
  },

  addProduct(data) {
    try {
      const url = "/api/v1/add-ob";
      return axiosClient.post(url, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem(StorageKeys.TOKEN)}`,
        },
      });
    } catch (error) {
      // Xử lý các lỗi
      throw error;
    }
  },

  removeProduct(id) {
    try {
      const url = `/api/v1/delete-ob/${id}`;
      return axiosClient.post(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem(StorageKeys.TOKEN)}`,
        },
      });
    } catch (error) {
      // Xử lý các lỗi
      throw error;
    }
  },

  updateProduct(data) {
    try {
      const url = `/api/v1/update-ob/${data.id}`;
      return axiosClient.post(url, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem(StorageKeys.TOKEN)}`,
        },
      });
    } catch (error) {
      // Xử lý các lỗi
      throw error;
    }
  },
};

export default productApi;
