import api from "../core/constants/api";

export const userService = {
  getInfo() {
    return api.get("/user/get-info");
  },
};
