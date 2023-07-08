import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

export const Layout = () => {
  return (
    <div className="relative flex min-h-screen flex-col gap-4 bg-slate-50 text-slate-900">
      <Navbar />
      <div className="p-4">
        <Outlet />
      </div>
    </div>
  );
};
