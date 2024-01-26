import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import { Landing } from "./pages/landing/landing.jsx";
import { Dashboard } from "./pages/dashboard/dashboard.jsx";
import { Error } from "./pages/error/error.jsx";
import { RouterProvider } from "react-router";
import { WebsiteLayout } from "./layouts/website/websiteLayout.jsx";
import { AllBlogs } from "./pages/blog/blog.jsx";
import { BlogEntry } from "./pages/blog/entry.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        element: <WebsiteLayout />,
        children: [
          {
            index: true,
            element: <Landing />,
          },
          {
            path: "blog",
            element: <AllBlogs />,
          },
          {
            path: "blog/:title",
            element: <BlogEntry />,
          },
        ],
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
