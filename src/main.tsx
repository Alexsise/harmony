// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import App from "./App";
import Home from "./pages/Home/Home";
import LiveTrade from "./pages/LiveTrade/LiveTrade";
import Settings from "./pages/Settings/Settings";

import "./main.css";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: "live_trade", Component: LiveTrade },
      { path: "settings", Component: Settings },
      { path: "a", element: <>a?</> },
    ],
  },
]);

const root = document.getElementById("root")!;

createRoot(root).render(<RouterProvider router={router} />);
