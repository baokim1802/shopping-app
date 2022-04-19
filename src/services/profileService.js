import api from "../core/constants/api";

export const profileService = {
  getWishList(query = "") {
    return api.get(`/product${query}`);
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
