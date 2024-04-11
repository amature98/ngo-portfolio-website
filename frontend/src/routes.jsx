// IMport Dependencies
import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
// Import Pages and sections for routing
import HomePage from "./pages/home.page";
import BlogsPage from "./pages/blogs.page";
import BlogPage from "./pages/blog.page";
import ErrorPage from "./pages/error.page";
// Routing function
function Routes() {
  return useRoutes([
    { path: "/", element: <HomePage /> },
    { peth: "/blogs", element: <BlogsPage /> },
    { path: "/blogs/:id", element: <BlogPage /> },
    { path: "/404", element: <ErrorPage /> },
    { path: "*", element: <Navigate to="/404" /> },
  ]);
}
export default Routes;
