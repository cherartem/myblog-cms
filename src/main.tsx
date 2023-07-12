import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout";
import "@fontsource-variable/raleway/wght.css";
import { SignInPage } from "./pages/sign-in";
import HomePage from "./pages/home";
import NewArticlePage from "./pages/new-article";
import { Provider as ReactWrapBalancerProvider } from "react-wrap-balancer";
import SettingsPage from "./pages/settings";
import EditArticlePage from "./pages/edit-article";
import ReadArticlePage from "./pages/read-article";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/new-article",
        element: <NewArticlePage />,
      },
      {
        path: "/settings",
        element: <SettingsPage />,
      },
      {
        path: "/edit/:articleId",
        element: <EditArticlePage />,
      },
      {
        path: "/read/:articleId",
        element: <ReadArticlePage />,
      },
    ],
  },
  {
    path: "/sign-in",
    element: <SignInPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactWrapBalancerProvider>
        <RouterProvider router={router} />
      </ReactWrapBalancerProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
