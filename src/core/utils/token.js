import { TOKEN_STORAGE_KEY, USER_STORAGE_KEY } from "../constants/key";

export const setToken = (data) => {
  console.log("In setToken", data);
  localStorage.setItem(TOKEN_STORAGE_KEY, JSON.stringify(data));
};
export const getToken = () => {
  let token = localStorage.getItem(TOKEN_STORAGE_KEY);
  if (token) {
    token = JSON.parse(token);
  }
  return token;
};
export const clearToken = () => {
  localStorage.removeItem(TOKEN_STORAGE_KEY);
  localStorage.removeItem(USER_STORAGE_KEY);
};

export const getUser = () => {
  let user = localStorage.getItem(USER_STORAGE_KEY);
  if (user) {
    user = JSON.parse(user);
  }
  return user;
};
export const setUser = (data) => {
  localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(data));
};
