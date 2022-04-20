import api from "../core/constants/api";

export const userService = {
  getInfo() {
    return api.get("/user/get-info");
  },
  changePassword(data) {
    return api.post(`/user/change-password`, data);
  },
  updateInfo(data) {
    return api.post(`'/user/update`, data);
  },
};
