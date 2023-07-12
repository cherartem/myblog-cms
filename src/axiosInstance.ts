import axios from "axios";
import { getAccessToken, setAccessToken } from "./accessToken";

const axiosInstance = axios.create({
  baseURL: "https://myblog-api.fly.dev/api",
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  function (config) {
    config.headers.Authorization = `Bearer ${getAccessToken()}`;
    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (err) {
    const originalRequest = err.config;

    if (err.response.status === 401 && !originalRequest._retry === true) {
      originalRequest._retry = true;

      try {
        const { data } = await axiosInstance.post("/refresh-token");

        const newAccessToken = data.accessToken;

        setAccessToken(newAccessToken);

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        axiosInstance(originalRequest);
        return;
      } catch (err) {
        window.location.href = "/sign-in";
      }
    }

    return Promise.reject(err);
  }
);

export default axiosInstance;
