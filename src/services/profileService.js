import api from "../core/constants/api";

export const profileService = {
  getWishList(query = "") {
    console.log("getWishList api", `/ecommerce/v1/profile/wishlist${query}`);
    return api.get(`/ecommerce/v1/profile/wishlist${query}`);
  },
  addWishList(id) {
    return api.post(`/ecommerce/v1/profile/wishlist/${id}`);
  },
  removeWishList(id) {
    return api.delete(`/ecommerce/v1/profile/wishlist/${id}`);
  },

  addAddress(data) {
    return api.post(`/ecommerce/v1/profile/address`, data);
  },
  editAddress(id, data) {
    return api.post(`/ecommerce/v1/profile/address/${id}`, data);
  },
  getAddressList() {
    return api.get(`/ecommerce/v1/profile/address/default`);
  },
  getAddressDetail() {},
  deleteAddress(id) {
    return api.delete(`/ecommerce/v1/profile/address/${id}`);
  },
};
