import axios from "axios";
import { authService } from "../../services/authService";
import { getToken, setToken } from "../utils/token";

const api = axios.create({
  baseURL: import.meta.env.VITE_HOST,
});

api.interceptors.request.use((config) => {
  // console.log("middleware request", config);
  let token = getToken();

  if (token) {
    // token = JSON.parse(token);
    config.headers["Authorization"] = `Bearer ${token.accessToken}`;
  }
  return config;
});

api.interceptors.response.use(
  (res) => {
    // console.log("middleware response", res.data);
    return res.data;
  },
  async (error) => {
    // console.log("Got error in middleware response", error);
    // console.log(error.request);
    if (error.request.status === 403) {
      let token = getToken();
      // console.log("Token", token);

      if (token) {
        const refresh = await authService.refreshToken({
          refreshToken: token.refreshToken,
        });

        if (refresh.data) {
          token.accessToken = refresh.data.accessToken;
          setToken(token);

          // console.log("error config after refreshing token", error.config);
          return api(error.config);
        }
      }
    }
    return error.response.data;
  }
);

export default api;
