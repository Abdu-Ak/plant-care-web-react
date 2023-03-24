import { message } from "antd";
import axios from "axios";
import { URL } from "../constants/Constants";

const instance = axios.create({
  baseURL: URL,
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = token;
  }

  return config;
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.data.blocked) {
      window.location = "/";
      message.error("You been blocked by Admin..!");

      localStorage.removeItem("token");
    } else {
      localStorage.removeItem("token");
    }
  }
);

export default instance;
