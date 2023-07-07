import { getAccessToken, setAccessToken } from "@/accessToken";
import axiosInstance from "@/axiosInstance";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";

export const Layout = () => {
  const navigate = useNavigate();

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

      if (err.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        try {
          const response = await axiosInstance.post("/refresh-token");

          const newAccessToken = response.data.accessToken;

          setAccessToken(newAccessToken);

          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

          return axiosInstance(originalRequest);
        } catch (err) {
          navigate("/sign-in");
        }
      }

      return Promise.reject(err);
    }
  );

  return (
    <div className="relative flex min-h-screen flex-col gap-4 bg-slate-50 text-slate-900">
      <Navbar />
      <div className="flex flex-col gap-8 p-4">
        <Outlet />
      </div>
    </div>
  );
};
