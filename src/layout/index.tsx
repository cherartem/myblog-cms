import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Toaster } from "@/components/ui/toaster";

export const Layout = () => {
  return (
    <div className="relative flex min-h-screen flex-col gap-4 bg-slate-50 text-slate-900">
      <Navbar />
      <div className="flex justify-center p-4 md:p-8">
        <div className="w-full max-w-screen-lg">
          <Outlet />
        </div>
        <Toaster />
      </div>
    </div>
  );
};
